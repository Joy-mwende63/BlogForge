const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const SECRET_KEY = 'your_secret_key';
const PORT = 3001;

// Setup SQLite database
const db = new sqlite3.Database('./user.db');

app.use(cors());
app.use(express.json());

// Initialize the database (Run this once if the table doesn't exist)
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )
`);

// Signup Route
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user already exists
    db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the new user into the database
      db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err) => {
        if (err) {
          return res.status(500).json({ message: 'Error creating user' });
        }
        res.status(201).json({ message: 'Signup successful!' });
      });
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ token, message: 'Login successful!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
