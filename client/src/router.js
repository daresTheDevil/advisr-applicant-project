import { createWebHistory, createRouter } from "vue-router";
import Business from "./components/Business.vue";
import Businesses from "./components/Businesses.vue";
const history = createWebHistory();
const routes = [
  { path: "/", name: "businesses", component: Businesses },
  {
    path: "/business/:id",
    name: "business",
    component: Business
  }
];
const router = createRouter({ history, routes });
export default router;
