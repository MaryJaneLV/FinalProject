<template>
    <form @submit.prevent="submit">
        <input type="text" placeholder="title" v-model="title"/>
        <input type="text" placeholder="text" v-model="text"/>
        <button type="submit">Create post</button>
        <hr>
    </form>
</template>

<script>
import {mapMutations} from "vuex";
export default {
    data() {
        return {
            title: "",
            text: ""
        };
    },
    methods: {
        ...mapMutations(["createPost"]),
        submit() {
            this.createPost({
                title: this.title,
                text: this.text
            })
        }
    }
}
</script>

<style scoped>
input {
    display: block;
    width: 70%;
    border: 1px, solid, #ccc;
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 10px;
}
</style>