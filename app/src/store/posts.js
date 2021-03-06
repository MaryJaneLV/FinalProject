import axios from "axios";
import router from "../router";

const initState = {
  posts: [],
};

export const posts = {
  namespaced: true,
  state: initState,
  actions: {
    async loadPoasts({ commit }) {
      try {
        const res = await axios({
          url: "http://localhost:3000/api/post",
          method: "GET",
        });

        const posts = res.data;
        //To actualy change state we need to commit a mutation
        //posts are passed to loadPosts mutation
        commit("loadPosts", posts); // Call loadPoasts mutation and pass posts
      } catch (error) {
        console.error("Failed to fetch posts");
      }
    },
    async createPost({ commit }, { payload }) {
      try {
        let res = await axios({
          url: "http://localhost:3000/api/post",
          data: JSON.stringify(payload),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
        });
        let post = res.data;
        commit("createPost", post);
        router.push("/userposts");
      } catch (error) {
        console.error(error);
      }
    },
    async deletePost({ commit }, { id }) {
      const url = `http://localhost:3000/api/post/${id}`;
      console.log(url);
      await axios({
        url: url,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      commit("deletePost", id);
      router.push("/userposts");
    },
  },
  mutations: {
    loadPosts(state, posts) {
      state.posts = posts; // change of state
    },
    createPost(state, post) {
      state.posts.unshift(post);
    },
    deletePost(state, id) {
      state.posts = state.posts.filter((post) => post.id !== id);
    },
  },
  getters: {
    //Check views/UserPosts for usage
    userPosts: (state, getters, rootState) => {
      if (!rootState.auth.user) {
        return [];
      }
      return state.posts.filter((post) => {
        return post.user_id == rootState.auth.user.id;
      });
    },
    //Check views/Home computed for usage
    sortPostsByDate: (state) =>
      state.posts.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      ),
  },
};
