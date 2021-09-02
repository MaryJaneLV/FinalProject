<template>
  <div>
    <div class="container">
      <h2>New Post</h2>
      <label for="title"></label>
      <input
        v-model="title"
        type="text"
        placeholder="Title"
        name="title"
        required
      />
      <br />
      <label for="text"></label>
      <input
        v-model="pictureUrl"
        type="text"
        placeholder="Image URL"
        name="img"
        required
      />
      <br />
      <label for="text"></label>
      <textarea
        v-model="text"
        type="text"
        placeholder="Text"
        name="text"
      ></textarea>
      <br />
      <button type="submit" v-on:click="createPost">Create</button>
    </div>
  </div>
</template>

<style scoped>
input[name="title"],
input[name="img"] {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
textarea[name="text"] {
  height: 300px;
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
textarea[name="text"]::placeholder {
  vertical-align: text-top;
  font-family: Arial, sans-serif;
}
textarea {
  font-family: Arial, sans-serif;
}

input [type=""] button {
  background-color: darkblue;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 30%;
}

button {
  background-color: darkblue;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 30%;
}

button:hover {
  opacity: 0.8;
}

.container {
  width: 100%;
  position: absolute;
  padding: 0 0 0 0;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: darkblue;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
}
</style>

<script>
export default {
  data() {
    return {
      title: "",
      text: "",
      pictureUrl: "",
    };
  },
  methods: {
    createPost(e) {
      e.preventDefault();
      const payload = {
        title: this.title,
        text: this.text,
        picture_url: this.pictureUrl,
      };
      this.$store.dispatch({
        type: "posts/createPost",
        payload,
      });
    },
  },
};
</script>
