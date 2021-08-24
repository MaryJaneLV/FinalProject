<!--
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/posts">All posts</router-link>
    </div>
    <div id="add"><router-link to="/newpost">+</router-link></div>
    <div id="dropdown">
      <ul class="menu">
        <li @mouseover="hover = true" @mouseleave="hover = false">
          <img src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" />
          <router-link to="/login"></router-link>
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
-->

<template>
  <div class="header">
    <ul id="nav">
      <img
        id="logo"
        src="https://www.seekpng.com/png/full/778-7781688_new-applied-now-accenture-logo-greater-than.png"
      />
      <li><router-link to="/"> Home </router-link></li>
      <li><router-link to="/posts"> All posts </router-link></li>
    </ul>
    <div class="button-container">
      <button id="plus-btn">
        <router-link to="/newpost">
          <img
            src="https://mpng.subpng.com/20180329/khq/kisspng-computer-icons-icon-design-clip-art-plus-5abccc211d83e3.0307650615223224651209.jpg"
          />
        </router-link>
      </button>
      <li id="user-btn" @mouseover="hover = true" @mouseleave="hover = false">
        <img src="http://simpleicon.com/wp-content/uploads/user1.png" />
        <transition name="fade">
          <Dropdown
            :options="options"
            v-if="hover"
            @mouseover="hover = true"
            @click="hover = false"
          />
        </transition>
      </li>
    </div>
  </div>
</template>

<script>
import Dropdown from "./Dropdown.vue";

export default {
  name: "Header",
  props: {},
  data() {
    return {
      options: [
        {
          title: "My posts",
          url: "/userposts"
        },
        {
          title: "Log in",
          url: "/login"
        },
        {
          title: "Sign Up",
          url: "/signup"
        }
      ],
      hover: false
    };
  },
  components: {
    Dropdown
  },
  methods: {
    clicker() {
      return (this.hover = !this.dropdownState);
    }
  }
};
</script>

<style>
img {
  width: 70px;
  height: 70px;
  background-color: white;
}

.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  border: 1px solid darkblue;
  position: relative;
}

#nav {
  display: flex;
  list-style: none;
}

#nav > li {
  padding: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: darkblue;
}

#nav > li.router-link-visited {
  color: red;
}

#logo {
  width: 2.5rem;
  height: 2.5rem;
}

.button-container {
  display: flex;
}

#plus-btn,
#user-btn {
  border: none;
  margin-right: 1rem;
  background-color: white;
}
#user-btn {
  list-style: none;
}

/*
img {
  width: 10%;
  height: 10%;
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
  width: 50%;
}
.menu li {
  display: block;
  position: relative;
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
*/
</style>
