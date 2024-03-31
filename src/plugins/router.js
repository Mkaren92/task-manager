import { createRouter, createWebHashHistory } from "vue-router";
import Tasks from "@/pages/Tasks.vue";
import TaskCreate from "@/pages/TaskCreate.vue";
import TaskEdit from "@/pages/TaskEdit.vue";
import NotFound from "@/pages/NotFound.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/tasks",
    },
    {
      path: "/tasks",
      component: Tasks,
    },
    {
      path: "/tasks/create",
      component: TaskCreate,
    },
    {
      path: "/tasks/edit/:id",
      component: TaskEdit,
    },
    {
      // Catch-all route for handling 404 errors
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;
