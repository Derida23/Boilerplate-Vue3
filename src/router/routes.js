const routes = [
  {
    path: "/",
    component: () => import("@/layouts/authenticated.vue"),
    children: [
      {
        path: "/",
        name: "Authenticated",
        component: () => import("@/views/auth/index.vue"),
        children: [
          {
            path: "/login",
            name: "Login",
            component: () => import("@/views/auth/login/index.vue"),
          },
        ],
      },
    ],
  },
];

export default routes;
