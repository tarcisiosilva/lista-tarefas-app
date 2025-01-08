const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "tarefas",
        component: () => import("pages/ListarTarefas.vue"),
      },
      {
        path: "relatorios",
        component: () => import("pages/Relatorios.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
