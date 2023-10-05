<!-- LogoutButton.vue -->
<template>
    <button @click="logout" class="btn btn-danger btn-lg">Logout</button>

    
  </template>
  
  <script>
  import API_URL from '../../config.js'
  import axios from 'axios';
  
  export default {
    methods: {
      async logout() {
        try {
          // Send a request to the logout route on the server
          const response = await axios.post(API_URL + `/auth/logout`);
          
          if (response.status === 200) {
            // Clear the client-side token and any other stored data
            localStorage.removeItem('token');
            
            // Optionally, you can also clear the username
            localStorage.removeItem('username');
            
            // Redirect to the login page or any other route
            this.$router.push('/login');
          } else {
            alert('Logout failed');
          }
        } catch (error) {
          console.error('Logout error:', error);
          alert('Logout failed');
        }
      },
    },
  };
  </script>
  
