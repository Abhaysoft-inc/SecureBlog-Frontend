<template>
  <div id="app">
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/FooterComp.vue';
export default {

  name: 'App',
  components:{
    Footer

  },

};
</script>
