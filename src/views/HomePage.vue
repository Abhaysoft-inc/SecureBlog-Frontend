<template>
  <div>
    <MyNavbar />
    <div class="container mt-4">
      <h1>Latest Posts</h1>

      <div class="container my-4">
        <div class="row">
          <div
            v-for="(post, index) in posts"
            :key="post._id"
            class="col-md-4 mb-4"
            :class="{ 'latest-post': index === 0 }"
          >
            <div class="card">
              <img src="@/assets/logo.png" class="card-img-top" alt="Post Image" />

              <router-link :to="'/blog/' + post._id">
                <div class="card-body">
                  <h5 class="card-title">{{ post.title }}</h5>
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
import API_URL from '../../config.js';
import MyNavbar from '../components/NavbarComp.vue';
import axios from 'axios';
export default {
  components: {
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
        const response = await axios.get(API_URL + `/blogs`); // Replace with your backend API endpoint
        this.posts = response.data.reverse(); // Reverse the posts array
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.loadPosts(); // Fetch blog posts when the component is created
  },
};
</script>
