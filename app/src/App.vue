<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/posts">All posts</router-link>
    </div>
    <div id="add"><router-link to="/newpost">+</router-link></div>
    <div id="dropdown">
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
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: darkblue;
}

#nav {
  padding: 30px;
  text-align: left;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: darkblue;
}

#add {
  color: darkblue;
  padding: 30px;
  font-weight: bold;
  color: #2c3e50;
  text-align: right;
  margin-top: -5.1rem;
  margin-right: 19rem;
}

#dropdown {
  color: darkblue;
  font-weight: bold;
  color: #2c3e50;
  text-align: right;
  margin-top: -3.5rem;
  margin-right: 8rem;
}

.menu {
  font: 14px/1.5 "Open Sans", sans-serif;
  font-weight: 600;
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu a {
  display: block;
  color: darkblue;
  text-decoration: none;
  padding: 5px;
  width: 90%;
}

.menu li {
  display: block;
  position: relative;
  float: right;
  color: darkblue;
  min-width: 180px;
}

.menu li ul {
  position: absolute;
  top: 30px;
  margin: 0;
  padding: 0;
}

.menu li ul li {
  background: #e8e8e8;
  transition: background 0.3s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

<script>
export default {
  data() {
    return {
      hover: false
    };
  }
};
</script>
