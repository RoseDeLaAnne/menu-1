import axios from "axios";

import router from "@/router/index";

export const headerModule = {
  state: () => ({
    userData: {},
  }),
  getters: {},
  mutations: {
    setUserData(state, userData) {
      state.userData = userData;
    },
  },
  actions: {
    async getUserData({ commit, rootState }) {
      const url = `http://192.168.0.104:8000/api/user/${rootState.userId}/`;

      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${rootState.accessToken}` },
      });

      if (response.status === 200) {
        commit("setUserData", response.data);
        commit("setIsSuperUser", response.data.is_superuser, {
          root: true,
        });
        commit("setTelegramUserId", response.data.telegram_user_id, {
          root: true,
        });
      }
    },
  },
  namespaced: true,
};
