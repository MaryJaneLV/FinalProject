<template>
  <div>
    <div>
      <h1>Latest posts</h1>
    </div>
    <div class="page-container">
      <!-- TODO: add :img="article.img" -->
      <Article
        v-for="post in posts"
        :title="post.title"
        :text="post.text"
        :key="post.id"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Article from "../components/Article.vue";

export default {
  name: "Home",
  components: {
    Article,
  },
  computed: {
    posts(){
      //Using store/posts sortPostsByDate getter
      return this.$store.getters['posts/sortPostsByDate']
    }
  },
};
</script>

<style>
.home {
  padding: 100px;
  text-align: center;
}
body {
  margin: 0;
  padding: 0;
  width: 100%;
}
.page-container {
  max-width: 60rem;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
}
@media (max-width: 768px) {
  .page-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
