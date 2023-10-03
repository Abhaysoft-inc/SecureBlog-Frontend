<!-- Login.vue -->
<template>
  <MyNavbar />
  <div class="container my-4">
    <h2>Login To SecureBlog</h2>
    <div class="container my-4">
      <form @submit.prevent="login">
        <div class="form-group">
          <input class="f form-control" v-model="username" type="text" placeholder="Username" />
        </div>
        <div class="form-group">
          <input v-model="password" type="password" placeholder="Password" class="form-control" />
        </div>

        <button class="btn btn-primary" type="submit">Login</button>




      </form>
    </div>

  </div>
</template>

<script>
import MyNavbar from '@/components/NavbarComp.vue';
import axios from 'axios';
export default {
  components: {
    MyNavbar

  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(`https://secureblog-backend.onrender.com/api/auth/login`, {
          username: this.username,
          password: this.password,
        });

        if (response.status === 200) {
          const token = response.data.token;
          localStorage.setItem('token', token);

          // Optionally, you can set the username in localStorage here as well
          const username = response.data.username;
          localStorage.setItem('username', username);
          

          // Redirect to a secure route or do something else
          // this.$router.push('/dashboard'); // Use this to navigate to a route
          // or
          window.location.href = '/dashboard'; // Use this to navigate via URL
        } else {
          alert('Login failed');
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('Login failed');
      }
    },
  },
};
</script>
