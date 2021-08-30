<template>
  <div class="post-container">
    <div class="column left">
      <img :src="img" />
    </div>
    <div class="column right">
      <div class="post-header">
        <slot name="header">
          {{ title }}
        </slot>
      </div>

      <div class="post-body">
        <slot name="body">
          {{ sometext }}
        </slot>
      </div>
      <div class="post-footer">
        <slot name="footer">
          <hr />
        </slot>
        <button @click="show = true">Show</button>
      </div>
    </div>
    <template>
      <div>
        <ModalFullScreen :show="show" v-on:show="handleShow">
          <template slot="header">
            header
          </template>

          <template slot="body">
            <div v-for="n in 1000" :key="n">Body {{ n }}</div>
          </template>

          <template slot="footer">
            <button @click="show = false">Close</button>
          </template>
        </ModalFullScreen>
      </div>
    </template>
  </div>
</template>

<script>
import ModalFullScreen from "modal-fullscreen-vue";

export default {
  name: "Post",
  props: {
    title: String,
    img: String,
    sometext: String
  },
  components: {
    ModalFullScreen
  }
};
</script>

<style scoped>
.column {
  float: left;
  width: 50%;
  height: 300px;
  margin-bottom: 3rem;
  border-radius: 2px;
  box-shadow: 0 2px 8px lightblue;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
hr {
  width: 85%;
}
.left {
  width: 40%;
}
.right {
  width: 60%;
}
.post-header {
  font-size: 1.5em;
  margin-top: 1rem;
  color: darkblue;
  text-align: center;
  font-weight: bold;
}
.post-container {
  max-width: 70rem;
  transition: all 0.5s ease;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.post-container:hover {
  transform: scale(1.1);
  position: relative;
  display: inline-flex;
}
.post-body {
  padding: 10px 50px 0 50px;
  overflow: hidden;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.post-footer {
  text-align: center;
}
</style>
