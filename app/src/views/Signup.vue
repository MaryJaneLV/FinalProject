<template>
  <div class="container">
    <h2>Sign Up</h2>
    <form @submit="register">
      <input v-model="username" placeholder="username" type="text" />
      <br />
      <input v-model="password" placeholder="password" type="password" />
      <br />
      <button type="submit">REGISTER</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    isAuth() {
      return this.$store.state.auth.isAuthenicated;
    },
  },
  methods: {
    register(e) {
      e.preventDefault();
      const payload = {
        username: this.username,
        password: this.password,
      };
      this.$store.dispatch({
        type: "auth/register",
        payload,
      });
    },
  },
};
</script>

<style scoped>
input[type="text"],
input[type="password"] {
  width: 30%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: darkblue;
  text-align: center;
  width: 100%;
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
