<template>
  {{ postCopy.title }}
  <MyNavbar/>
    <div class="container my-4">
      
      <h2 class="text-center my-4">{{ postCopy.title }}</h2>
      <p>Published on: {{ postCopy.createdAt }}</p>
      <p style="font-weight:100">Author: {{ postCopy.author }}</p>
      
      <div style=" font-size: 20px;" v-if="postCopy.content" v-html="postCopy.content"></div>
      <div v-else>
        <p>Blog post not found or loading...</p>
        
      
    </div>
      <router-link to="/">Back to Home</router-link>
      
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import MyNavbar from '@/components/NavbarComp.vue';
  
  export default {
    components:{

      MyNavbar,
    },
    props: ['post'],
    data() {
      return {
        postCopy: { title: '', content: '', createdAt:'',author:'' }, // Initialize with default values
      };
    },
    async created() {
      try {
        const response = await axios.get(`http://localhost:3000/api/blogs/${this.$route.params.id}`);
        this.postCopy = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  };
  </script>
  