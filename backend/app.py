# from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
# from flask_jwt_extended import JWTManager
# from config import Config
# from models import db

# app = Flask(__name__)
# app.config.from_object(Config)

# # Initialize Extensions
# db.init_app(app)
# jwt = JWTManager(app)

# # Register Blueprints
# from routes.auth_routes import auth_bp
# from routes.post_routes import post_bp
# app.register_blueprint(auth_bp, url_prefix='/auth')
# app.register_blueprint(post_bp, url_prefix='/posts')

# if __name__ == '__main__':
#     with app.app_context():
#         db.create_all()
#     app.run(debug=True)

# from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate

# # Initialize the app
# app = Flask(__name__)

# # Configure the database URI (example using SQLite)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///yourdatabase.db'  # Use your actual DB URI
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# # Initialize the extensions
# db = SQLAlchemy(app)
# migrate = Migrate(app, db)

# # Example model (optional, but good for testing)
# class Post(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(120), nullable=False)

# # Run the app
# if __name__ == "__main__":
#     app.run(debug=True)

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['JWT_SECRET_KEY'] = 'your_secret_key'
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# User Model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

# Initialize the database
with app.app_context():
    db.create_all()

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if User.query.filter_by(email=email).first():
        return jsonify({"error": "User already exists"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(username=username, email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User created successfully"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if user and bcrypt.check_password_hash(user.password, password):
        access_token = create_access_token(identity={"username": user.username, "email": user.email})
        return jsonify({"token": access_token}), 200
    else:
        return jsonify({"error": "Invalid credentials"}), 401

if __name__ == '__main__':
    app.run(debug=True)
