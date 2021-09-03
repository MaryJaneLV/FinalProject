<template>
  <div class="container">
    <div class="error" v-if="showError">
      Incorrect username or password
    </div>
    <div v-else="isAuth"></div>
    <form v-if="!isAuth" @submit="login">
      <h2>Log in</h2>
      <input v-model="username" placeholder="username" name="uname" />
      <br />
      <input
        v-model="password"
        placeholder="password"
        type="password"
        name="psw"
      />
      <br />
      <button type="submit">LOGIN</button>
    </form>
    <div v-else>
      <h2>Are you sure you want to log out?</h2>
      <button v-on:click="logout">LOGOUT</button>
    </div>
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
    showError() {
      if (
        this.$store.state.auth.showError !=
        this.$store.state.auth.isAuthenicated
      )
        return this.$store.state.auth.showError;
    },
  },
  methods: {
    login(e) {
      e.preventDefault();
      const payload = {
        username: this.username,
        password: this.password,
      };
      this.$store.dispatch({
        type: "auth/login",
        payload,
      });
    },
    logout() {
      this.$store.dispatch({
        type: "auth/logout",
      });
    },
  },
};
</script>

<style scoped>
input[name="uname"],
input[name="psw"] {
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

.error {
  margin-top: 2rem;
  height: 10%;
  background-color: #f5ca4d;
  opacity: 0.7;
  width: 30%;
  padding: 12px 20px;
  display: inline-block;
  border-radius: 5px;
  border: 1px solid darkorange;
  box-sizing: border-box;
  color: #735122;
  font-weight: bold;
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
