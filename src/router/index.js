// Composables
import { createRouter, createWebHistory } from "vue-router";
import products from "@/views/products.vue";
import about from "@/views/about.vue";
const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Homeview.vue"),
      },
    ],
  },
  {
    path: "/products",
    component: products,
    name: "products",
  },
  {
    path: "/about",
    component: about,
    name: "about",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
