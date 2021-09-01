import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
<<<<<<< HEAD

createApp(App)
  .use(router)
=======
import store from "./store";

createApp(App)
  .use(router)
  .use(store)
>>>>>>> 245e57185e3e6820579082481d38f5c442c2affa
  .mount("#app");
