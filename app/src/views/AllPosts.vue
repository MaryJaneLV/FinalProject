<template>
  <div class="content">
    <div class="title">
      <h2>
        All Posts
        <hr />
      </h2>
      <!-- TODO: add :img="post.img" -->
    </div>
    <Post
      v-for="post in posts"
      :id="post.id"
      :title="post.title"
      :text="post.text"
      :user="post.user_id"
      :date="post.created_at"
      v-bind:key="post.id"
    />
  </div>
</template>

<script>
import axios from "axios";
import Post from "../components/Post.vue";

export default {
  name: "AllPosts",
  data() {
    return {
      posts: null,
      // posts: [
      //   // {
      //   //   title: "test",
      //   //   img:
      //   //     "https://store-images.s-microsoft.com/image/apps.35525.14608082416797958.59899f01-ac4e-4144-9edf-b7fc9376ebc8.0e786dca-5bd2-4556-8622-d50af178c850?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg",
      //   //   sometext:
      //   //     "n the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      //   // },
      //   // {
      //   //   title: "test2",
      //   //   img:
      //   //     "https://store-images.s-microsoft.com/image/apps.38570.14608082416797958.8e8dcbb6-f16e-4d58-aa8e-eb355cb1af9a.8519d408-e09e-429a-801f-d6822d613b5f?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg",
      //   //   sometext:
      //   //     "the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ip djcbsjdbcskljdcnsljd sdkjcbskdjcbsldjkcns cjsdbcksjdbcldjsbcs dcsjdbckjsdbclknd djnbcksdjcblksdjbclaksjdbclakdjsbclkejdbvc kjfbd lvhsedfcjkvbeldkjbcvl;kdjvbch;kedjabvak;djvg;idjkbve;qkfjbhe;ikj"
      //   // },
      //   // {
      //   //   title: "test3",
      //   //   img:
      //   //     "https://static.planetminecraft.com/files/resource_media/screenshot/1733/bunny-on-side-1502918442.png",
      //   //   sometext:
      //   //     "the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ip jsndckjsdncksjdcsdcb sdc sdkcjbskdjcbsd ckjsdbckjsdc sdkcjbsdkcjbskdcjbskdjcbksjdc sdcijsbdckjsbdckj"
      //   // }
      // ]
    };
  },
  components: {
    Post,
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/post")
      .then((response) => (this.posts = response.data));
  },
};
</script>

<style scoped>
.content {
  padding: 100px;
  text-align: -webkit-center;
}
.title {
  color: darkblue;
  justify-content: space-between;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  position: relative;
}

h2 {
  margin-left: 5%;
  display: flex;
}
hr {
  width: 15%;
  margin-right: 5%;
  height: fit-content;
  position: relative;
  top: 5px;
  border: none;
  color: darkblue;
  height: 1px;
  background-color: darkblue;
}
</style>
