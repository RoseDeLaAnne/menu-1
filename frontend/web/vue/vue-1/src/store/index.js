import { createStore } from "vuex";

import { menuViewModule } from "./modules/menuViewModule";

export default createStore({
  state: {
    dishes: [
      {
        id: 0,
        category: "salads",
        weight: 342,
        name: "Halumini",
        price: 3.6,
        types: [
          {
            id: 0,
            name: "vegan",
          },
        ],
        color: "#000",
        backgroundColor: "#e1eabd",
        imageUrl: "",
      },
      {
        id: 1,
        category: "meat",
        weight: 482,
        name: "Beef",
        price: 7.4,
        types: [],
        color: "#fff",
        backgroundColor: "#896857",
        imageUrl: "",
      },
      {
        id: 2,
        category: "pasta",
        weight: 372,
        name: "Alfredo",
        price: 4.1,
        types: [],
        color: "#000",
        backgroundColor: "#f4e3af",
        imageUrl: "",
      },
      {
        id: 3,
        category: "breakfast",
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
        backgroundColor: "#442e19",
        imageUrl: "",
      },
      {
        id: 4,
        category: "lunch",
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
        backgroundColor: "#de8871",
        imageUrl: "",
      },
      {
        id: 5,
        category: "soup",
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
        backgroundColor: "#231e15",
        imageUrl: "",
      },
      {
        id: 6,
        category: "beverages",
        weight: 253,
        name: "Red apple",
        price: 3.8,
        types: [
          {
            id: 0,
            name: "vegan",
          },
        ],
        color: "#fff",
        backgroundColor: "#792314",
        imageUrl: "",
      },
    ],
    categories: [
      {
        id: 0,
        name: "breakfast",
        selected: false,
      },
      {
        id: 1,
        name: "lunch",
        selected: false,
      },
      {
        id: 2,
        name: "soup",
        selected: false,
      },
      {
        id: 3,
        name: "salads",
        selected: false,
      },
      {
        id: 4,
        name: "meat",
        selected: false,
      },
      {
        id: 5,
        name: "pasta",
        selected: false,
      },
      {
        id: 6,
        name: "beverages",
        selected: false,
      },
    ],
    types: [
      {
        id: 0,
        name: "vegan",
        selected: false,
      },
      {
        id: 1,
        name: "hot",
        selected: false,
      },
    ],
  },
  getters: {
    dishesGetter(state, getters) {
      var dishes = [];
      var newDishes = [];
      var newDishes2 = [];
      var newDishes3 = [];

      if (!getters.categoriesIsEmpty && !getters.typesIsEmpty) {
        for (const category of state.categories) {
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

        for (const type of state.types) {
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
      } else if (!getters.categoriesIsEmpty && getters.typesIsEmpty) {
        for (const category of state.categories) {
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

        return newDishes;
      } else if (getters.categoriesIsEmpty && getters.typesIsEmpty) {
        return state.dishes;
      } else if (getters.categoriesIsEmpty && !getters.typesIsEmpty) {
        for (const type of state.types) {
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
    categoriesIsEmpty(state) {
      const selectedCategories = state.categories.filter(
        (category) => category.selected
      );

      if (selectedCategories.length === 0) {
        return true;
      } else {
        return false;
      }
    },
    typesIsEmpty(state) {
      const selectedTypes = state.types.filter((type) => type.selected);

      if (selectedTypes.length === 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  mutations: {
    setDishes(state, dishes) {
      state.dishes = dishes;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setTypes(state, types) {
      state.types = types;
    },
    modalCategorySelectCategory(state, category) {
      state.categories[category.id].selected = !category.selected;
    },
    modalTypeSelectType(state, type) {
      state.types[type.id].selected = !type.selected;
    },
  },
  actions: {},
  modules: {
    menuView: menuViewModule,
  },
});
