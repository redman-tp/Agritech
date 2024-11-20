const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "", // This will render IndexPage as the default child for "/"
        component: () => import("pages/IndexPage.vue"),
      },
    ],
  },

  {
    path: "/profile",
    component: () => import("layouts/ProfileLayout.vue"),
    children: [
      {
        path: "", // This will render IndexPage as the default child for "/"
        component: () => import("pages/ProfilePage.vue"),
      },
    ],
  },

  // Routes for login and signup, using ProfileLayout as their parent layout
  {
    path: "/login", // Matches "/login"
    component: () => import("src/layouts/AuthLayout.vue"),
    children: [
      {
        path: "", // Default child for "/login"
        component: () => import("pages/auth/LoginPage.vue"),
      },
    ],
  },
  {
    path: "/signup", // Matches "/signup"
    component: () => import("src/layouts/AuthLayout.vue"),
    children: [
      {
        path: "", // Default child for "/signup"
        component: () => import("pages/auth/SignupPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
