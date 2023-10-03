<template>
    <div>
      <MyNavbar />
      <div class="container mt-4">
        <h1>All Blog Posts</h1>
  
        <!-- Iterate through the blog posts and display each one as a Bootstrap card with an image and summary -->
        <div class="container my-4">
        <div class="row">
          <div
            v-for="post in posts"
            :key="post._id"
            class="col-md-4 mb-4"
          >
            <div class="card">
              <!-- Display the post image -->
              <img src="@/assets/logo.png" class="card-img-top" alt="Post Image" />
  
              <!-- Display post title and make it a clickable link -->
              <router-link :to="'/blog/' + post._id">
                <div class="card-body">
                  <h5 class="card-title">{{ post.title }}</h5>
                  <!-- Display a summary of the post -->
                  <!-- <p class="card-text">{{ post.summary }}</p> -->
                  <!-- Optionally, display other post details like author, date, etc. -->
                  <!-- <p class="card-text">{{ post.author }}</p> -->
                  <!-- <p class="card-text">{{ formatDate(post.date) }}</p> -->
                  <!-- "Read More" button -->
                  <router-link :to="'/blog/' + post._id" class="btn btn-primary">Read More</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </template>
  

<script>
import MyNavbar from '../components/NavbarComp.vue';
import axios from 'axios';
export default{
    components:{
        MyNavbar,
    },
    data() {
    return {
      posts: [],
    };
  },
  methods: {
    async loadPosts() {
      try {
        const response = await axios.get('http://localhost:3000/api/blogs'); // Replace with your backend API endpoint
        this.posts = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.loadPosts(); // Fetch blog posts when the component is created
  },
}</script>