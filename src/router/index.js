import { createRouter, createWebHistory } from "vue-router";
import QuizDemo from "../views/QuizDemoView.vue";
import HomeView from "../views/HomeView.vue";
import QuizOptionsView from "../views/QuizOptionsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "quizOptions",
          component: QuizOptionsView,
          props: true,
        },
      ],
    },
    {
      path: "/quizDemo",
      name: "quizDemo",
      component: QuizDemo,
    },
    {
      path: "/profile",
      name: "profile",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
