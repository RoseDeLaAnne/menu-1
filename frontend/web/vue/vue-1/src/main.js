import { createApp } from "vue";

import App from "./App.vue";

import "./assets/styles/_config.sass";
import "./assets/styles/_general.sass";
import "./assets/styles/_transitions.sass";

import "./registerServiceWorker";

import router from "./router";
import store from "./store";

import { languages } from "@/locales";
import { defaultLocale } from "@/locales";
import { createI18n, useI18n } from "vue-i18n";

const messages = Object.assign(languages);

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("language") || defaultLocale,
  fallbackLocale: "en",
  messages,
});

createApp(App, {
  setup() {
    const { t } = useI18n();

    return { t };
  },
})
  .use(store)
  .use(router)
  .use(i18n)
  .mount("#app");
