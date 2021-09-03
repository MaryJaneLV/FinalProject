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
      </template>

      <template v-slot:footer>
        <div>
          <p>Author: {{ user }}</p>
          <p>Created: {{ formatDate }}</p>
        </div>
        <div class="del">
          <button v-if="isLoggedIn" v-on:click="deletePost">DELETE</button>
        </div>
      </template>
    </modal>
    <div class="post-container">
      <div class="column left">
        <img v-bind:src="imageUrl" />
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
import moment from "moment";
import Modal from "./Modal.vue";

export default {
  name: "Post",
  props: {
    id: Number,
    title: String,
    text: String,
    user: Number,
    date: String,
    imageUrl: String,
  },
  components: {
    Modal,
  },
  computed: {
    formatDate() {
      return moment(this.date).format("MMMM Do YYYY - HH:mm ");
    },
    isLoggedIn() {
      if (!this.$store.state.auth.user) return false;
      if (this.$store.state.auth.user.id === this.user) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    deletePost() {
      let id = this.id;
      this.$store.dispatch({
        type: "posts/deletePost",
        id,
      });
    },
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
  position: relative;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
hr {
  width: 85%;
}
.del {
  position: relative;
  top: 5px;
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
  display: table;
  min-width: 70rem;
  max-width: 70rem;
  transition: all 0.3s ease-in-out;
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
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 9.5rem;
  max-height: 9rem;
}
.post-footer {
  text-align: center;
}
</style>
