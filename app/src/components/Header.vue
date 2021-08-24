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
</style>
