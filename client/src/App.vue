<template>
  <div id="app">
    <postForm />
    <div class="post" v-for="post in allPosts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.text}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from "vuex";
import postForm from "./components/postForm";
export default {
  name: "app",
  // computed: {
  //     allPosts() {
  //       return this.$store.getters.allPosts;
  //     }
  // },
  computed: mapGetters(["allPosts"]),
  methods: mapActions(["fetchPosts"]),
  components: {postForm},
  async mounted() {
    //this.$store.dispatch("fetchPosts");
    this.fetchPosts();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
