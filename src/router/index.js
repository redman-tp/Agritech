import { createRouter, createWebHistory } from "vue-router"; // Use createWebHistory instead of createWebHashHistory
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(), // Changes to history mode for cleaner URLs
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
