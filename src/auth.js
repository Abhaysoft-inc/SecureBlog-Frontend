// src/auth.js

// Function to check if the user is authenticated
export function isAuthenticated() {
    // Check if the session data is present
    return !!localStorage.getItem('username'); // Modify this according to your session data structure
  }
  