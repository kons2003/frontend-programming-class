import { createRouter, createWebHistory } from "vue-router";
import PersonListView from "../views/PersonListView.vue";
import PersonEditView from "../views/PersonEditView.vue";
import PersonCreateView from "../views/PersonCreateView.vue";
const routes = [
  { path: "/", name: "PersonListView", component: PersonListView },
  { path: "/edit/:id", name: "PersonEditView", component: PersonEditView },
  { path: "/create", name: "PersonCreateView", component: PersonCreateView },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
