export const categoriesModule = {
  state: () => ({
    data: [
      {
        id: 0,
        name: "popular",
        displayName: "popular",
      },
      {
        id: 1,
        name: "breakfast",
        displayName: "breakfast",
      },
      {
        id: 2,
        name: "lunch",
        displayName: "lunch",
      },
    ],
  }),
  getters: {},
  mutations: {},
  actions: {},
  namespaced: true,
};
