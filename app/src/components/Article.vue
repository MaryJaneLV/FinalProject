<template>
  <div class="article-container">
    <div class="article-card" :style="{ backgroundImage: `url(${img})` }">
      <div class="article-title">{{ title }} {{ sometext }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    title: String,
    img: String
  }
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
