const routes = [
  {
    path: "/",
    component: () => import("@/layouts/authenticated.vue"),
    children: [
      {
        path: "/",
        name: "Authenticated",
        redirect: {
          name: "login",
        },
        component: () => import("@/views/auth/index.vue"),
        children: [
          {
            path: "/login",
            name: "Login",
            component: () => import("@/views/auth/login/index.vue"),
          },
          {
            path: "/register",
            name: "Register",
            component: () => import("@/views/auth/register/index.vue"),
          },
        ],
      },
    ],
  },
];

export default routes;
