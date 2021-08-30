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
      </div>
      <button @click="$refs.modalName.openModal()">Open modal</button>
    </div>
    <modal ref="modalName">
      <template v-slot:header>
        <h1>Modal title</h1>
      </template>

      <template v-slot:body>
        <p>
          {{ sometext }}
        </p>
        <p>
          {{ sometext }}
        </p>
      </template>

      <template v-slot:footer>
        <div>
          <button @click="$refs.modalName.closeModal()">Cancel</button>
          <button @click="$refs.modalName.closeModal()">Save</button>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "Post",
  props: {
    title: String,
    img: String,
    sometext: String
  },
  components: {
    Modal
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
