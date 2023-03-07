import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import pinia from "@/plugins/pinia";
import router from "@/router/index.js";

import "typeface-poppins";
import "typeface-roboto";
import "typeface-raleway";

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
