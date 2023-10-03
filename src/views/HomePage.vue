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
