<template>
  <div>
    <Header />
    <router-view> </router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import ModalFullScreenVue from "modal-fullscreen-vue";

export default {
  name: "App",

  components: {
    Header,
    "modal-fullscreen-vue": ModalFullScreenVue
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
  position: absolute;
}
</style>
