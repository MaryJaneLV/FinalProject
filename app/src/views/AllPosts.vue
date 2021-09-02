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
      :imageUrl="post.picture_url"
      v-bind:key="post.id"
    />
  </div>
</template>

<script>
import axios from "axios";
import Post from "../components/Post.vue";

export default {
  name: "AllPosts",
  // data() {
  //   return {
  //     posts: null,
  //   };
  // },
  computed:{
    //Gettings state from vuex store 
    posts(){
      return this.$store.state.posts.posts;
    }
  },
  components: {
    Post,
  }
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
