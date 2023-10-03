<template>
    <div>
      <MyNavbar /> <!-- Include the Navbar component here -->
  
      <div class="container my-4">
        <h2>Create a New Blog Post</h2>
  
        <form @submit.prevent="createPost" class="my-2">
          <div class="my-4">
            <label for="title">Title:</label>
            <input class="form-control" type="text" id="title" v-model="newPost.title" required />
          </div>
          <div>
            <label for="content">Content:</label>
            
            <textarea id="content" class="form-control" rows="13" v-model="newPost.content" required></textarea>
            
          </div>
          <!-- Show the "Create Post" button if authenticated, else show a message -->
          <button class="btn btn-primary my-4" type="submit">Create Post</button>
                  </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import MyNavbar from '@/components/NavbarComp.vue';
  
  export default {
    components: {
      MyNavbar // Register the Navbar component
    },
    data() {
      return {
        
        newPost: {
          title: '',
          content: '',
          author: localStorage.getItem('username'),
        }, // Add a data property for the new post
      };
    },
    mounted() {
      // Fetch the user's username from your authentication data
      // Assuming you have a way to retrieve the username after login
      // Update this part to fetch the username from your store or session
      this.newPost.username = localStorage.getItem('username'); //Modify this according to your session data structure
    },

    methods: {
      async createPost() {
        try {
          const response = await axios.post('https://secureblog-backend.onrender.com/api/blogs', this.newPost,{author: this.newPost.username,});
          console.log('New post created:', response.data);
  
          // Optionally, you can redirect the user to the newly created post
          this.$router.push(`/blog/${response.data._id}`);
        } catch (error) {
          console.error('Error creating post:', error);
        }
      }, // Add a comma to separate methods
  
      // Add other methods here if needed
    }, // Add a closing curly brace for the methods section
  };
  </script>
  
