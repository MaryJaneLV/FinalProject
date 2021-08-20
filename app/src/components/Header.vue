<template>
  <header>
    <ul id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/posts">All posts</router-link>
    </ul>
    <div>
      <ul class="menu">
        <li @mouseover="hover = true" @mouseleave="hover = false">
          <router-link to="/login">Person</router-link>
          <transition name="fade">
            <ul v-if="hover" @click="hover = false">
              <li><router-link to="/userposts">My posts</router-link></li>
              <li><router-link to="/login">Login</router-link></li>
              <li><router-link to="/signup">Sign Up</router-link></li>
            </ul>
          </transition>
        </li>
      </ul>
    </div>
    <router-view />
  </header>
</template>

<script>
export default {
  data() {
    return {
      hover: false
    };
  }
};
</script>

<style>
header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  border: 1px solid pink;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: darkblue;
}
</style>
