import { createStore } from "vuex";

import { menuViewModule } from "./modules/menuViewModule";

export default createStore({
  state: {
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
