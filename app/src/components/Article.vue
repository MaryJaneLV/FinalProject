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
        <div class="d-flex align-items-center justify-content-between">
          <p>Author: {{ user }}</p>
          <p>Date: {{ formatDate }}</p>
        </div>
      </template>
    </modal>
    <div class="article-container">
      <div
        class="article-card"
        :style="{ backgroundImage: `url(${img})` }"
        v-on:click="$refs.modalName.openModal()"
      >
        <div class="article-title">{{ title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Modal from "./Modal.vue";

export default {
  name: "Article",
  props: {
    title: String,
    img: String,
    text: String,
    user: Number,
    date: String,
  },
  components: {
    Modal,
  },
  computed: {
    formatDate() {
      return moment(this.date).format("MMMM Do YYYY - HH:mm");
    },
  },
};
</script>

<style>
.article-container {
  display: flex;
}
.article-card {
  width: 19rem;
  height: 19rem;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background: cover center no-repeat;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border-radius: 2px;
  box-shadow: 0 2px 8px lightblue;
  transition: all 0.5s ease;
}
.article-card:hover {
  transform: scale(1.1);
  cursor: pointer;
  opacity: 0.6;
}
@media (max-width: 768px) {
  .article-card {
    margin-bottom: 2rem;
  }
}
</style>
