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
          <p>Author:</p>
        </div>
      </template>
    </modal>
    <div class="article-container">
      <!-- TODO: add img - :style="{ backgroundImage: `url(${img})` }"  -->
      <div class="article-card" v-on:click="$refs.modalName.openModal()">
        <div class="article-title">{{ title }} {{ text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "Article",
  props: {
    title: String,
    img: String,
    text: String,
  },
  components: {
    Modal,
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
}
.article-card:hover {
  cursor: pointer;
  opacity: 0.6;
}
@media (max-width: 768px) {
  .article-card {
    margin-bottom: 2rem;
  }
}
</style>
