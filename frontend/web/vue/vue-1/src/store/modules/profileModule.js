import axios from "axios";

import router from "@/router/index";

export const profileModule = {
  state: () => ({
    headerData: {
      view: {
        name: "Profile",
      },
    },
  }),
  getters: {},
  mutations: {},
  actions: {},
  namespaced: true,
};
