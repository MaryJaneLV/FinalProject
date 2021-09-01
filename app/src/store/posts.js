import axios from 'axios';
import router from '../router';

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
                    url: 'http://localhost:3000/api/post',
                    method: 'GET'
                });

                const posts = res.data
                commit('loadPosts', posts)
            } catch (error) {
                console.error('Failed to fetch posts')
            }
        },
        async createPost({commit}, {payload}){
            try {
                let res = await axios({
                    url: 'http://localhost:3000/api/post',
                    data: JSON.stringify(payload),
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "x-auth-token":localStorage.getItem('token')
                    }
                });
                let post = res.data
                commit('loadPosts', post)
                router.push('/userposts')
            } catch (error) {
                console.error(error)
            }
        }
    },
    mutations: {
        loadPosts(state, posts) {
            state.posts = posts
        },
        createPost(state, post){
            state.posts.push(post)
        }
    }
};
