<template>
  <div>
      <MyNavbar /> <!-- Include the Navbar component here -->
  
      <div class="container my-4">
  <div v-if="editedPost">
    <h2>Edit Post</h2>
    <form @submit.prevent="updatePost">
      <div class="form-group">
        <label for="update-title">Title:</label>
        <input v-model="editedPost.title" type="text" class="form-control" id="update-title" required />
      </div>
      <div class="form-group">
        <label for="update-content">Content:</label>
        <textarea v-model="editedPost.content" class="form-control" id="update-content" rows="5" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Update</button>
    </form>
  </div>
  </div>
  </div>
</template>

<script>
import API_URL from '../../../config.js';
import axios from 'axios';

import MyNavbar from '@/components/NavbarComp.vue';

export default {
  components: {
      MyNavbar // Register the Navbar component
    },
  data() {
    return {
      editedPost: null, // Initialize as null to prevent the error
    };
  },
  methods: {
    async updatePost() {
      try {
        // Make a PUT request to update the post on the server
        await axios.put(API_URL + `/blogs/${this.$route.params.id}`, this.editedPost);

        // Wrap the $router.push call in $nextTick
        this.$nextTick(() => {
          this.$router.push(`/blog/${this.$route.params.id}`);
        });
      } catch (error) {
        console.error('Error updating post:', error);
      }
    },
    async loadUpdatedPost() {
      try {
        const response = await axios.get(API_URL + `/blogs/${this.$route.params.id}`);
        this.editedPost = response.data;
      } catch (error) {
        console.error('Error fetching post for editing:', error);
      }
    },
  },
  created() {
    // Load the post data to be edited
    this.loadUpdatedPost();
  },
};
</script>
