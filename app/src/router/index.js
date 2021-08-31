import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Posts from "../views/AllPosts.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Error from "../views/Error.vue";
import UserPosts from "../views/UserPosts.vue";
import NewPost from "../views/NewPost.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/posts",
    name: "All Posts",
    component: Posts
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: Signup
  },
  {
    path: "/userposts",
    name: "My Posts",
    component: UserPosts
  },
  {
    path: "/newpost",
    name: "New Post",
    component: NewPost
  },
  {
    path: "/:catchAll(.*)*",
    name: "Error",
    component: Error
  }
];

const router = new VueRouter({
  routes
});

export default router;
