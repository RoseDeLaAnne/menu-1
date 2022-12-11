import { createStore } from "vuex";

import { menuViewModule } from "./modules/views/menuViewModule";

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
    selectedCategories(state) {
      return state.categories.filter((category) => category.selected);
    },
    selectedTypes(state) {
      return state.types.filter((type) => type.selected);
    },
    categoriesIsEmpty(state, getters) {
      if (getters.selectedCategories.length === 0) {
        return true;
      } else {
        return false;
      }
    },
    typesIsEmpty(state, getters) {
      if (getters.selectedTypes.length === 0) {
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
    categorySelectCategory(state, category) {
      state.categories[category.id].selected = !category.selected;
      localStorage.setItem("categories", JSON.stringify(state.categories));
    },
    typeSelectType(state, type) {
      state.types[type.id].selected = !type.selected;
      localStorage.setItem("types", JSON.stringify(state.types));
    },
  },
  actions: {},
  modules: {
    menuView: menuViewModule,
  },
});
