<template>
  <MyNavbar/>
  <div class="container my-4">
    <div class="jumbotron">
  <h1 class="display-4">Hello, {{ username  }}</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <!-- <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> -->
    <LogoutButton/>

  </p>
</div>
  </div>
  <div class="container">
    <h2>Your Blog Posts</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in userPosts" :key="post._id">
          <td>{{ post.title }}</td>
          <td>{{ post.content }}</td>
          <td>
            <!-- <button class="btn btn-primary" @click="updatePost(post)">Update</button> -->
            <button class="btn btn-danger" @click="deletePost(post._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

      <!-- Dashboard content goes here -->
      
  
  <script>
  import LogoutButton from '@/components/LogoutButton.vue';
  import MyNavbar from '@/components/NavbarComp.vue';
  import axios from 'axios';
  export default {
    components:{
      LogoutButton,
      MyNavbar

    },
    data() {
      return {
        username: '',
        userPosts: [] // Initialize an empty array to store user's posts
      };
    },
    mounted() {
      // Fetch the user's username from your authentication data
      // Assuming you have a way to retrieve the username after login
      // Update this part to fetch the username from your store or session
      this.username = localStorage.getItem('username'); //Modify this according to your session data structure
      this.loadUserPosts();
    },

    methods: {
    async loadUserPosts() {
    try {
      const response = await axios.get(`https://secureblog-backend.onrender.com/api/blogs/user/${this.username}`);
      this.userPosts = response.data;
    } catch (error) {
      console.error('Error fetching user posts:', error);
    }
  },
    // updatePost(post) {
    //   // Implement update post logic here
    // },
    async deletePost(postId) {
      try {
        await axios.delete(`https://secureblog-backend.onrender.com/api/blogs/${postId}`);
        // Reload user's posts after deletion
        this.loadUserPosts();
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  }
  };
  </script>
  
  <style scoped>
  /* Add your CSS styling for the Dashboard page here */
  </style>
  
