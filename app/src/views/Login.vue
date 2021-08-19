<template>
  <div>
    <div class="container">
      <h2>Log in</h2>
      <label for="uname"></label>
      <input type="text" placeholder="Username" name="uname" required />
      <br />
      <label for="psw"></label>
      <input type="password" placeholder="Password" name="psw" required />
      <br />
      <button type="submit">Log in</button>
    </div>
  </div>
</template>

<style>
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

.container {
  padding: 100px;
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
      list: [{ name: "Maria", id: 1 }]
    };
  }
};
</script>
