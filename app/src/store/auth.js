import axios from 'axios';
import router from '../router';

const initState = {
    isAuthenicated: false,
    loading: false,
    user: null
};

export const auth = {
    namespaced: true,
    state: initState,
    actions: {
        async register({commit}, {payload}) {
            try {
                await axios({
                    url: 'http://localhost:3000/api/user',
                    data: JSON.stringify(payload),
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                router.push('/')
            } catch (error) {
                console.error(error)
            }
        },
        async login({ commit, dispatch }, { payload }) {
            commit('authStart')
            try {
                const res = await axios({
                    url: 'http://localhost:3000/api/auth',
                    data: JSON.stringify(payload),
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                const token = res.data.token
                if (token) {
                    localStorage.setItem('token', token)
                    commit('authSuccess', token)
                    dispatch('loadUser')
                } else {
                    commit('authFailure')
                }
            } catch (error) {
                localStorage.removeItem('token')
                commit('authFailure')
                console.error(error)
            };
        },
        async logout({ commit }) {
            localStorage.removeItem('token')
            commit('authFailure')
        },
        async loadUser({ commit }) {
            try {
                const res = await axios({
                    url: 'http://localhost:3000/api/auth',
                    method: 'GET',
                    headers: {
                        "x-auth-token": localStorage.getItem('token')
                    }
                });

                const user = res.data
                commit('userLoaded', user)
                router.push('/')
            } catch (error) {
                commit('authFailure')
            }
        }
    },
    mutations: {
        authStart(state) {
            state.loading = true
        },
        authSuccess(state) {
            state.isAuthenicated = true
        },
        userLoaded(state, user) {
            state.user = user
            state.loading = false
        },
        logout(state) {
            state.isAuthenicated = false
            state.token = null
            state.userId = null
        },
        authFailure(state) {
            state.isAuthenicated = false
            state.loading = false
            state.user = null
        }
    }
};
