import { createRouter, createWebHistory } from "vue-router";
import QuizDemo from "../views/QuizDemoView.vue";
import QuizOptions from "../views/QuizOptionsView.vue";
import HomeView from "../views/HomeView.vue";
import History from "../components/History.vue";
import Login from "../components/Login.vue"
import SignUp from "../components/SignUp.vue"
import { useAuthStore } from '@/stores/authStore.js';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Programming Quiz",
      component: HomeView,
    },
    {
      path: "/quizOptions/:name/:id",
      name: "quizOptions",
      component: () => QuizOptions,
    },
    {
      path: "/quizDemo",
      name: "quizDemo",
      component: QuizDemo,
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../views/ProfileView.vue"),
    },
    {
      path: "/history",
      name: "History",
      component: History,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/signup",
      name: "Sign up",
      component: SignUp,
    },
  ],
});

router.beforeEach(async (to) => {
  const publicPage = ["/login", "/", "/signup", "/quizOptions/:name/:id", "/quizDemo"];
  const authRequired = !publicPage.includes(to.path);
  const auth = useAuthStore();

  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath;
    return "/login";
  }
})

export default router;
