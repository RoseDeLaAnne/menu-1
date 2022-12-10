import jwt_decode from "jwt-decode";

import { createStore } from "vuex";

import { getCookie } from "@/utils/cookie";

import { headerModule } from "./modules/headerModule";
import { menuViewModule } from "./modules/menuViewModule";
import { profileModule } from "./modules/profileModule";

export default createStore({
  state: {
    accessToken: "",
    refreshToken: "",

    userId: "",
    isSuperUser: false,
    telegramUserId: "",
    jti: '',

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
    // dishesGetter(state, getters) {
    //   var dishes = [];
    //   var newDishes = [];
    //   var newDishes2 = [];
    //   var newDishes3 = [];

    //   if (!getters.categoriesIsEmpty && !getters.typesIsEmpty) {
    //     for (const category of state.categories) {
    //       if (category.selected) {
    //         dishes.push(
    //           state.dishes.filter((dish) => dish.category === category.name)
    //         );
    //       }
    //     }

    //     for (const dish of dishes) {
    //       for (const dishNested of dish) {
    //         newDishes.push(dishNested);
    //       }
    //     }

    //     for (const type of state.types) {
    //       if (type.selected) {
    //         newDishes2.push(
    //           newDishes.filter((dish) =>
    //             dish.types.some((dishType) => dishType.name === type.name)
    //           )
    //         );
    //       }
    //     }
    //     for (const dish of newDishes2) {
    //       for (const dishNested of dish) {
    //         newDishes3.push(dishNested);
    //       }
    //     }

    //     return newDishes3;
    //   } else if (!getters.categoriesIsEmpty && getters.typesIsEmpty) {
    //     for (const category of state.categories) {
    //       if (category.selected) {
    //         dishes.push(
    //           state.dishes.filter((dish) => dish.category === category.name)
    //         );
    //       }
    //     }

    //     for (const dish of dishes) {
    //       for (const dishNested of dish) {
    //         newDishes.push(dishNested);
    //       }
    //     }

    //     return newDishes;
    //   } else if (getters.categoriesIsEmpty && getters.typesIsEmpty) {
    //     return state.dishes;
    //   } else if (getters.categoriesIsEmpty && !getters.typesIsEmpty) {
    //     for (const type of state.types) {
    //       if (type.selected) {
    //         newDishes2.push(
    //           state.dishes.filter((dish) =>
    //             dish.types.some((dishType) => dishType.name === type.name)
    //           )
    //         );
    //       }
    //     }
    //     for (const dish of newDishes2) {
    //       for (const dishNested of dish) {
    //         newDishes3.push(dishNested);
    //       }
    //     }

    //     return newDishes3;
    //   } else {
    //     return state.dishes;
    //   }
    // },
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
    initializeStore(state) {
      if (getCookie(`accessToken`)) {
        const accessToken = getCookie(`accessToken`);

        state.accessToken = accessToken;
        state.userId = jwt_decode(accessToken).user_id;
        state.jti = jwt_decode(accessToken).jti;
      } else {
        state.accessToken = "";
      }

      if (getCookie(`refreshToken`)) {
        state.refreshToken = getCookie(`refreshToken`);
      } else {
        state.refreshToken = "";
      }
    },
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken;
      state.userId = jwt_decode(accessToken).user_id;
      state.jti = jwt_decode(accessToken).jti;
    },
    setRefreshToken(state, refreshToken) {
      state.refreshToken = refreshToken;
    },

    setIsSuperUser(state, isSuperUser) {
      state.isSuperUser = isSuperUser
    },
    setTelegramUserId(state, telegramUserId) {
      state.telegramUserId = telegramUserId
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
    header: headerModule,
    menuView: menuViewModule,
    profile: profileModule,
  },
});
