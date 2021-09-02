<template>
  <div>
    <Header />
    <router-view> </router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",

  components: {
    Header,
  },
  computed: {
    isAuth() {
      return this.$store.state.auth.isAuthenicated;
    },
    user() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    //To load data in to the store we need to dispatch an action.
    //Check store/posts.js for further instruction
    this.$store.dispatch({
      type: "posts/loadPoasts", // module posts, action loadPosts
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: darkblue;
}
</style>
