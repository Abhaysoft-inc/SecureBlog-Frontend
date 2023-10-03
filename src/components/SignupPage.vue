<!-- Signup.vue -->
<template>
  <MyNavbar/>
    <div class="container my-4">
      <h2>Signup</h2>
      <div class="container my-4">
      <form @submit.prevent="signup">
        <div class="form-group"><input v-model="username" class="form-control" type="text" placeholder="Username" /></div>
        <div class="form-group"><input v-model="fullname" class="form-control" type="text" placeholder="Full Name" /></div>
        <div class="form-group"><input v-model="mobile" class="form-control" type="text" placeholder="Mobile No." /></div>
        
        <div class="form-group"><input v-model="password" type="password" class="form-control" placeholder="Password" /></div>
        
        <button type="submit" class="btn btn-primary">Signup</button>
      </form>
    </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; // Import Axios
  import MyNavbar from '@/components/NavbarComp.vue';
  export default {
    components:{
      MyNavbar
    },
    data() {
      return {
        username: '',
        password: '',
        mobile:'',
        fullname:'',
      };
    },
    methods: {
      async signup() {
        try {
          const response = await axios.post(`http://localhost:3000/api/auth/signup`, {
            username: this.username,
            password: this.password,
            mobile:this.mobile,
            fullname:this.fullname,
          });
  
          if (response.status === 201) {
            alert('Signup successful');
            window.location.href = '/login';
            // Redirect to login or do something else
          } else {
            alert('Signup failed');
          }
        } catch (error) {
          console.error('Signup error:', error);
          alert('Signup failed');
        }
      },
    },
  };
  </script>
  