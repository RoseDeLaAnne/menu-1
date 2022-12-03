import { createStore } from "vuex";

import { categoriesModule } from "./components/main/categoriesModule";
import { typeModule } from "./components/main/typeModule";

import { menuModule } from "./views/main/menuModule";

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {        
        componentsMainCategories: categoriesModule,
        componentsMainType: typeModule,

        viewsMainMenu: menuModule,
    },
});
