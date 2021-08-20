<template>
  <Header />
</template>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  color: #222;
  text-align: center;
}
</style>

<script>
import Header from "./components/Header.vue";

export default {
  data() {
    return {
      hover: false
    };
  },
  components: {
    Header
  }
};
</script>
