
import { createRouter, createWebHistory } from 'vue-router';

import LoginScreen from '@/components/LoginScreen.vue';
import MainScreen from '@/components/MainScreen.vue';
import CartScreen from '@/components/CartScreen.vue';
import FaqScreen from '@/components/FaqScreen.vue';
import AboutUs from '@/components/AboutUs.vue';
import TermsAndConditions from '@/components/TermsAndConditions.vue';
import PrivacyPolicy from '@/components/PrivacyPolicy.vue';

const routes = [
  { path: '/', name: 'Login', component: LoginScreen },
  { path: '/main', name: 'MainScreen', component: MainScreen },
  { path: '/cart', name: 'CartScreen', component: CartScreen },
  { path: '/faq', name: 'FaqScreen', component: FaqScreen },
  { path: '/about', name: 'AboutUs', component: AboutUs },
  { path: '/terms', name: 'TermsAndConditions', component: TermsAndConditions },
  { path: '/privacy', name: 'PrivacyPolicy', component: PrivacyPolicy },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
