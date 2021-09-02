<template>
  <div class="content">
    <div class="title">
      <h2>
        My Posts
        <hr />
      </h2>
    </div>
    <Post
      v-for="post in userPosts"
      :title="post.title"
      :imageUrl="post.picture_url"
      :text="post.text"
      :key="post.title"
    />
  </div>
</template>

<script>
import Post from "../components/Post.vue";

export default {
  name: "UserPosts",
  components: {
    Post,
  },
  computed: {
    userPosts() {
      return this.$store.getters["posts/userPosts"];
    },
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
