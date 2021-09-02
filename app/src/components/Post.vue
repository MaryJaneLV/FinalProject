<template>
  <div>
    <modal ref="modalName">
      <template v-slot:header>
        <h1>{{ title }}</h1>
      </template>
      <template v-slot:body>
        <p>
          {{ text }}
        </p>
        <p>
          {{ text }}
        </p>
        <p>
          {{ text }}
        </p>
      </template>

      <template v-slot:footer>
        <div class="d-flex align-items-center justify-content-between">
          <p>Author: {{ user }}</p>
          <p>Created: {{ date }}</p>
          <!-- TODO: Add to user posts for post modification
          <button class="btn btn--secondary" @click="$refs.modalName.closeModal()">Cancel</button>
          <button class="btn btn--primary" @click="$refs.modalName.closeModal()">Save</button> -->
        </div>
      </template>
    </modal>
    <div class="post-container">
      <div class="column left">
        <p>IMAGE</p>
 
        <img v-bind:src="imageUrl"/>
      </div>

      <div class="column right">
        <div class="post-header">
          <slot name="header">
            {{ title }}
          </slot>
        </div>

        <div class="post-body">
          <slot name="body">
            {{ text }}
          </slot>
        </div>
        <div class="post-footer">
          <slot name="footer">
            <hr />
            <button @click="$refs.modalName.openModal()">Read more</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "Post",
  props: {
    title: String,
    // img: String,
    text: String,
    user: Number,
    date: String,
    imageUrl: String,
  },
  components: {
    Modal,
  },
};
</script>

<style scoped>
.column {
  float: left;
  height: 300px;
  margin-bottom: 3rem;
  border-radius: 2px;
  box-shadow: 0 2px 8px lightblue;
}
button {
  cursor: pointer;
  opacity: 0.8;
  background: darkblue;
  border-radius: 12px;
  box-shadow: 0 6px 30px -10px #4a74c9;
  overflow: hidden;
  transform: translateX(0);
  color: #fff;
  width: 7rem;
  height: 3rem;
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
  max-width: 70rem;
  /*TODO: fix overlapping of posts  */
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
