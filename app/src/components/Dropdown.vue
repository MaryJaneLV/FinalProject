<template>
  <div class="dropdown">
    <ul class="menu">
      <li @mouseover="hover = true" v-for="option in options" :key="option.title">
        <router-link :to="option.url">{{ option.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    options: Array
  },
};
</script>

<style>
.dropdown {
  position: absolute;
  right: 0;
  width: 15rem;
  background: #fff;
  box-shadow: -2px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -2px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 3px 5px 0px rgba(0, 0, 0, 0.75);
  z-index: 1;
  min-width: 180px;
}

.dropdown > ul {
  list-style: none;
  line-height: 2rem;
  margin: 0;
  padding: 0;
}

.dropdown > ul > li:hover {
  background: #dbe2ef;
  cursor: pointer;
}

.dropdown > ul > li > a {
  color: darkblue;
  text-decoration: none;
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
  width: 100%;
}
.menu li {
  display: block;
  color: darkblue;
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
