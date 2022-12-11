export const menuViewModule = {
  state: () => ({
    headerData: {
      view: {
        name: "Menu",
      },
    },
    dishes: [
      {
        id: 1,
        category: {
          id: 1,
          name: "salads",
        },
        weight: 342,
        name: "Halumini",
        price: 3.6,
        types: [
          {
            id: 1,
            name: "vegan",
          },
        ],
        color: "#000",
        background_color: "#e1eabd",
        imageUrl: "",
      },
      {
        id: 2,
        category: {
          id: 1,
          name: "meat",
        },
        weight: 482,
        name: "Beef",
        price: 7.4,
        types: [],
        color: "#fff",
        background_color: "#896857",
        imageUrl: "",
      },
      {
        id: 3,
        category: {
          id: 1,
          name: "pasta",
        },
        weight: 372,
        name: "Alfredo",
        price: 4.1,
        types: [],
        color: "#000",
        background_color: "#f4e3af",
        imageUrl: "",
      },
      {
        id: 4,
        category: {
          id: 1,
          name: "breakfast",
        },
        weight: 143,
        name: "Pancakes",
        price: 2.5,
        types: [
          {
            id: 0,
            name: "vegan",
          },
        ],
        color: "#fff",
        background_color: "#442e19",
        imageUrl: "",
      },
      {
        id: 5,
        category: {
          id: 1,
          name: "lunch",
        },
        weight: 543,
        name: "Red fish",
        price: 7.5,
        types: [
          {
            id: 0,
            name: "hot",
          },
        ],
        color: "#000",
        background_color: "#de8871",
        imageUrl: "",
      },
      {
        id: 6,
        category: {
          id: 1,
          name: "soup",
        },
        weight: 653,
        name: "Egg soup",
        price: 10.8,
        types: [
          {
            id: 0,
            name: "hot",
          },
        ],
        color: "#fff",
        background_color: "#231e15",
        imageUrl: "",
      },
      {
        id: 7,
        category: {
          id: 1,
          name: "beverages",
        },
        weight: 253,
        name: "Red apple",
        price: 3.8,
        types: [
          {
            id: 1,
            name: "vegan",
          },
        ],
        color: "#fff",
        background_color: "#792314",
        imageUrl: "",
      },
    ],
    modalIsActive: false,
  }),
  getters: {
    dishesGetter(state, getters, rootState, rootGetters) {
      var dishes = [];
      var newDishes = [];
      var newDishes2 = [];
      var newDishes3 = [];

      if (!rootGetters.categoriesIsEmpty && !rootGetters.typesIsEmpty) {
        for (const category of rootState.categories) {
          if (category.selected) {
            dishes.push(
              state.dishes.filter((dish) => dish.category === category.name)
            );
          }
        }

        for (const dish of dishes) {
          for (const dishNested of dish) {
            newDishes.push(dishNested);
          }
        }

        for (const type of rootState.types) {
          if (type.selected) {
            newDishes2.push(
              newDishes.filter((dish) =>
                dish.types.some((dishType) => dishType.name === type.name)
              )
            );
          }
        }
        for (const dish of newDishes2) {
          for (const dishNested of dish) {
            newDishes3.push(dishNested);
          }
        }

        return newDishes3;
      } else if (!rootGetters.categoriesIsEmpty && rootGetters.typesIsEmpty) {
        for (const category of rootState.categories) {
          if (category.selected) {
            dishes.push(
              state.dishes.filter(
                (dish) => dish.category.name === category.name
              )
            );
          }
        }

        for (const dish of dishes) {
          for (const dishNested of dish) {
            newDishes.push(dishNested);
          }
        }

        return newDishes;
      } else if (rootGetters.categoriesIsEmpty && rootGetters.typesIsEmpty) {
        return state.dishes;
      } else if (rootGetters.categoriesIsEmpty && !rootGetters.typesIsEmpty) {
        for (const type of rootState.types) {
          if (type.selected) {
            newDishes2.push(
              state.dishes.filter((dish) =>
                dish.types.some((dishType) => dishType.name === type.name)
              )
            );
          }
        }
        for (const dish of newDishes2) {
          for (const dishNested of dish) {
            newDishes3.push(dishNested);
          }
        }

        return newDishes3;
      } else {
        return state.dishes;
      }
    },
  },
  mutations: {
    headerShowModal(state) {
      state.modalIsActive = true;

      document.body.classList.add("body_no-scroll");
    },
    modalCloseModal(state) {
      state.modalIsActive = false;

      document.body.classList.remove("body_no-scroll");
    },
    setDishes(state, dishes) {
      state.dishes = dishes;
    },
  },
  actions: {},
  namespaced: true,
};
