<template>
 <div>
      <img alt="Vue logo" src="./assets/logo.png" >
        <li v-for="i in info" :key="i.id" :class="item">
        {{ i}}
        </li>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      info: null
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/api/user')
      .then(response => (this.info = response.data));
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
}
li {
    display:table;
    width: 90%;
    margin:0px auto 0px auto;
    border: 2px solid black
}
</style>
