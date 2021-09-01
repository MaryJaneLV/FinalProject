<template>
  <div class="page-container">
    <Article
      v-for="article in articleArray"
      :title="article.title"
      :img="article.img"
      :text="article.text"
      :key="article.title"
    />
  </div>
</template>

<script>
import Article from "../components/Article.vue";

export default {
  name: "Home",
  data() {
    return {
      articleArray: [
        {
          title: "Bunnies caught escaping",
          img:
            "https://store-images.s-microsoft.com/image/apps.35525.14608082416797958.59899f01-ac4e-4144-9edf-b7fc9376ebc8.0e786dca-5bd2-4556-8622-d50af178c850?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg",
          text:
            "the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a "
        },
        {
          title: "Bunny befriends a chicken",
          img:
            "https://store-images.s-microsoft.com/image/apps.38570.14608082416797958.8e8dcbb6-f16e-4d58-aa8e-eb355cb1af9a.8519d408-e09e-429a-801f-d6822d613b5f?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg",
          text:
            "the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a "
        },
        {
          title: "Just a cute bunny...",
          img:
            "https://static.planetminecraft.com/files/resource_media/screenshot/1733/bunny-on-side-1502918442.png",
          text:
            "the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a "
        }
      ]
    };
  },
  components: {
    Article
  }
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
