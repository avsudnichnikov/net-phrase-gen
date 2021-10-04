import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Units from "@/views/Units";
import UnitCreate from "@/views/UnitCreate";
import Dictionaries from "@/views/Dictionaries";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/units',
    name: 'Units',
    component: Units,
  },
  {
    path: '/units/new',
    name: 'UnitCreate',
    component: UnitCreate,
  },
  {
    path: '/dictionaries',
    name: 'Dictionaries',
    component: Dictionaries,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
