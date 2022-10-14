import { createRouter, createWebHistory } from "vue-router";
import QuizDemo from "../views/QuizDemoView.vue";
import QuizOptions from "../views/QuizOptionsView.vue"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/quizOptions",
      name: "quizOptions",
      component: QuizOptions,
    },
    {
      path: "/quizDemo",
      name: "quizDemo",
      component: QuizDemo,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
