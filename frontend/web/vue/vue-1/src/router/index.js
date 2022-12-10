import axios from "axios";

import { createRouter, createWebHistory } from "vue-router";

import store from "@/store/index";

import LandView from "@/views/land/LandView.vue";

const routes = [
  {
    path: "/",
    name: "land",
    component: LandView,
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/auth/AuthenticationView.vue"),
  },
  {
    path: "/auth/sign-in",
    name: "sign-in",
    component: () => import("@/views/auth/SignIn.vue"),
    beforeEnter: async (to, from, next) => {
      if (localStorage.username) {
        const url = `http://192.168.0.104:8000/api/user-exist/${localStorage.getItem(
          `username`
        )}/`;

        const response = await axios.get(url);

        if (response.status === 200 && response.data.user_exist) {
          next();
        } else next({ name: "sign-up" });
      } else next({ name: "auth" });
    },
  },
  {
    path: "/auth/sign-up",
    name: "sign-up",
    component: () => import("@/views/auth/SignUp.vue"),
    beforeEnter: async (to, from, next) => {
      if (localStorage.username) {
        const url = `http://192.168.0.104:8000/api/user-exist/${localStorage.getItem(
          `username`
        )}/`;

        const response = await axios.get(url);

        if (response.status === 200 && !response.data.user_exist) {
          next();
        } else next({ name: "sign-in" });
      } else next({ name: "auth" });
    },
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import("@/views/main/MenuView.vue"),
  },
  {
    path: "/menu/:id",
    name: "menu-dish",
    component: () => import("@/views/main/MenuDish.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/main/ProfileView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (
//     to.name !== "auth" &&
//     to.name !== "sign-in" &&
//     to.name !== "sign-up" &&
//     to.name !== "land" &&
//     !store.state.accessToken
//   )
//     next({ name: "auth" });
//   else if (
//     (to.name === "auth" || to.name === "sign-in" || to.name === "sign-up") &&
//     to.name !== "menu" &&
//     store.state.accessToken
//   )
//     next({ name: "menu" });
//   else next();
// });

export default router;
