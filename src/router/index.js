import { createRouter, createWebHistory } from 'vue-router';
import ContactList from '../components/ContactList.vue';
import ContactCreate from '../components/ContactCreate.vue';
import ContactEdit from '../components/ContactEdit.vue';
import ContactShow from '../components/ContactShow.vue';

const routes = [
  {
    path: '/',
    name: 'ContactList',
    component: ContactList
  },
  {
    path: '/create',
    name: 'ContactCreate',
    component: ContactCreate
  },
  {
    path: '/edit/:id',
    name: 'ContactEdit',
    component: ContactEdit
  },
  {
    path: '/show/:id',
    name: 'ContactShow',
    component: ContactShow
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
