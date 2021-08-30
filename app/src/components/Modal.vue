<template>
  <div>
    <button @click="show = true">Show</button>
    <ModalFullScreen :show="show" v-on:show="handleShow">
      <template slot="header">
        header
      </template>

      <template slot="body">
        <div v-for="n in 1000" :key="n">Body {{ n }}</div>
      </template>

      <template slot="footer">
        <button @click="show = false">Close</button>
      </template>
    </ModalFullScreen>
  </div>
</template>

<script>
import ModalFullScreen from "../App.vue";

export default {
  components: {
    // without custom name
    ModalFullScreen
  },

  data() {
    return {
      bodyText: "Lorem Ipsum",
      show: true
    };
  },

  methods: {
    handleShow(show) {
      alert(`show: ${show}`);
    }
  }
};
</script>

<style scoped>
/*
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  overflow-x: hidden;
  overflow-y: auto;
}
.modal__backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}
.modal__dialog {
  position: absolute;
  width: auto;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 50px auto;
  display: block;
  flex-direction: column;
  z-index: 2;
  @media screen and (max-width: 992px) {
    width: 90%;
  }
}
.modal__close {
  width: 30px;
  height: 30px;
}
.modal__header {
  padding: 20px 20px 10px;
}
.modal__body {
  padding: 10px 20px 10px;
}
.modal__footer {
  padding: 10px 20px 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
*/
</style>
