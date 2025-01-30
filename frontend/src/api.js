// const API_URL = "http://127.0.0.1:5000";

// export const fetchPosts = async () => {
//   const response = await fetch(`${API_URL}/posts`);
//   return response.json();
// };

// export const createPost = async (post, token) => {
//   const response = await fetch(`${API_URL}/posts`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(post),
//   });
//   return response.json();
// };

// Add more API functions for login, register, update, delete

const API_URL = "http://127.0.0.1:5000";

// Fetch posts
export const fetchPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  return response.json();
};

// Create a new post
export const createPost = async (post, token) => {
  const response = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(post),
  });
  return response.json();
};

// Login function
export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};

// Register function
export const register = async (email, password, username) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, username }),
  });
  return response.json();
};

// Update post function
export const updatePost = async (postId, updatedPost, token) => {
  const response = await fetch(`${API_URL}/posts/${postId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedPost),
  });
  return response.json();
};

// Delete post function
export const deletePost = async (postId, token) => {
  const response = await fetch(`${API_URL}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
