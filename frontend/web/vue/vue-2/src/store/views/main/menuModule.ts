export const menuModule = {
  state: {
    headerData: {
      page: {
        name: "menu",
        displayName: "Menu",
      },
    },
    data: [
      {
        id: 0,
        category: {
          name: "pizza",
          displayName: "pizza",
        },
        weight: 143,
        name: "pepperoni",
        displayName: "pepperoni",
        price: 7.2,
        types: [
          {
            id: 0,
            name: "vegan",
          },
          {
            id: 1,
            name: "hot",
          },
        ],
        imageUrl: "",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  namespaced: true,
};
