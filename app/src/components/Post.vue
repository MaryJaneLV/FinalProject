<template>
  <div class="post-container">
    <div class="column">
      <img :src="img" />
    </div>
    <div class="column">
      <div class="post-header">
        <slot name="header">
          {{ title }}
        </slot>
      </div>

      <div class="post-body">
        <slot name="body">
          {{ sometext }}
        </slot>
      </div>
      <div class="post-footer">
        <slot name="footer">
          default footer
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    title: String,
    img: String,
    sometext: String
  }
};
</script>

<style scoped>
.column {
  float: left;
  width: 50%;
  height: 300px;
}
img {
  width: 100%;
  height: 100%;
}

.post-container {
  max-width: 60rem;
  margin-bottom: 2rem;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.post-header h3 {
  padding: 10px;
  color: #42b983;
}

.post-body {
  margin: 20px 0;
  padding-left: 10px;
}
</style>
