export default {
    actions: {
        async fetchPosts(ctx) {
            const res = await fetch(
              "http://localhost:3000/api/post"
            )
                
            const posts = await res.json();

            ctx.commit("updatePosts", posts)
          }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, newPost) {
            state.post.unshift(newPost)
        }
    },
    state: {
        posts: []
    },
    getters: {
        allPosts(state) {
            return state.posts
        }
    },
}