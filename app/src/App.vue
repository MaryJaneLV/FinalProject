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

<<<<<<< HEAD
  components: {
    Header
=======
    components: {
      Header
    },
    computed: {
    isAuth(){
      return this.$store.state.auth.isAuthenicated  
    },
    user(){
      return this.$store.state.auth.user
    }
>>>>>>> 245e57185e3e6820579082481d38f5c442c2affa
  }
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
