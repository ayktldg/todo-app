import Vue from "vue";
import VueRouter from "vue-router";
import List from "../views/List.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/add-new",
    name: "Form",
    component: () => import(/* webpackChunkName: "Form" */ "../views/Form.vue"),
  },
  {
    path: "/update/:id",
    name: "UpdateTodoForm",
    component: () =>
      import(/* webpackChunkName: "UpdateTodoForm" */ "../views/Form.vue"),
  },
  {
    path: "*",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "UpdateTodoForm" */ "../views/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
