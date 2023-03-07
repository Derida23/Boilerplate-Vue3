import { createPinia } from "pinia";

const pinia = createPinia();

export default {
  install: (app) => {
    app.use(pinia);
  },
};
