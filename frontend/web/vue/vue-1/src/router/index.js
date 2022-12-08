import { createRouter, createWebHistory } from "vue-router";

import LandView from "@/views/land/LandView.vue";

const routes = [
  {
    path: "/",
    name: "land",
    component: LandView,
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import("@/views/main/MenuView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
