<template>
  <div>
    <MyNavbar />

    <div class="container my-4">
      <h2>Create a New Blog Post</h2>

      <form @submit.prevent="createPost" class="my-2">
        <div class="my-4">
          <label for="title">Title:</label>
          <input class="form-control" type="text" id="title" v-model="newPost.title" required />
        </div>
        <div>
          <label for="content">Content:</label>
          <div ref="quillEditor"></div> <!-- Remove v-model here -->
        </div>
        <button class="btn btn-primary my-4" type="submit">Create Post</button>
      </form>
    </div>
  </div>
</template>

<script>
import API_URL from '../../../config';
import axios from 'axios';
import MyNavbar from '@/components/NavbarComp.vue';
import Quill from 'quill'; // Import Quill here
import 'quill/dist/quill.snow.css'; // Import Quill CSS

export default {
  components: {
    MyNavbar,
  },
  data() {
    return {
      newPost: {
        title: '',
        content: '',
        author: localStorage.getItem('username'),
      },
      quill: null,
    };
  },
  mounted() {
    this.newPost.username = localStorage.getItem('username');

    this.quill = new Quill(this.$refs.quillEditor, {
      theme: 'snow',
    });

    this.quill.on('text-change', () => {
      this.newPost.content = this.quill.root.innerHTML;
    });
  },
  methods: {
    async createPost() {
      try {
        const response = await axios.post(API_URL + '/blogs', this.newPost, { author: this.newPost.username });
        console.log('New post created:', response.data);
        this.$router.push(`/blog/${response.data._id}`);
      } catch (error) {
        console.error('Error creating post:', error);
      }
    },
  },
};
</script>
