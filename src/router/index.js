import { createRouter, createWebHistory } from "vue-router";
import NewsView from "../view/NewsView.vue";
import AskView from "../view/AskView.vue";
import JobsView from "../view/JobsView.vue";
import ItemView from "../view/ItemView.vue";
import UserView from "../view/UserView.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      component: NewsView,
    },
    {
      path: "/jobs",
      component: AskView,
    },
    {
      path: "/ask",
      component: JobsView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
    {
      path: "/user/:id",
      component: UserView,
    },
  ],
});
