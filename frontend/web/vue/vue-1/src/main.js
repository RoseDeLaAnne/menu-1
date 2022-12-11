import { createApp } from "vue";

import App from "./App.vue";

import "./assets/styles/_config.sass";
import "./assets/styles/_general.sass";

import "./registerServiceWorker";

import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
