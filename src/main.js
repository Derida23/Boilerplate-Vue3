import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import pinia from "@/plugins/pinia";
import router from "@/router/index.js";
import Toast, { POSITION } from "vue-toastification";

import "typeface-poppins";
import "typeface-roboto";
import "typeface-raleway";
import "vue-toastification/dist/index.css";

const app = createApp(App);

const toastOptions = {
  position: POSITION.TOP_CENTER,
};

app.use(pinia);
app.use(router);
app.use(Toast, toastOptions);
app.mount("#app");
