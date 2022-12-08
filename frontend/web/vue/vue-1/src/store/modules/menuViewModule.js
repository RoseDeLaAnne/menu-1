import router from "@/router/index";

export const menuViewModule = {
  state: () => ({
    headerData: {
      viewName: "Menu",
    },
    modalIsActive: false,
  }),
  getters: {},
  mutations: {
    headerShowModal(state) {
      state.modalIsActive = true;

      document.body.classList.add("body_no-scroll");
    },
    modalCloseModal(state) {
      state.modalIsActive = false;

      document.body.classList.remove("body_no-scroll");
    }
  },
  actions: {},
  namespaced: true,
};
