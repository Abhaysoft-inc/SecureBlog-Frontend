<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">SecureBlog</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          
          <!-- Conditionally render links based on authentication state -->
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/login" exact class="nav-link">Login</router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/signup" exact class="nav-link">Signup</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <router-link class="nav-link" to="/dashboard"  exact >Dashboard</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <router-link class="nav-link" to="/new">Create Post</router-link>
          </li>

          <li class="nav-item" v-if="isLoggedIn">
            <a class="nav-link" @click="logout" >Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    methods:{
      async logout() {
        try {
          // Send a request to the logout route on the server
          const response = await axios.post(`http://localhost:3000/api/auth/logout`);
          
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
    computed: {
      isLoggedIn() {
        // Check the authentication state, e.g., by checking if a token is present in localStorage
        return !!localStorage.getItem('token');
      },
    },
  };
  </script>
  