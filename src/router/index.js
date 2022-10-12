import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import WelcomeAbout from '../components/WelcomeAbout.vue'
import signupView from '../components/signupView.vue'
import signinView from '../components/signinView.vue'
import PreferencesView from '../components/PreferencesView.vue'
import AccessView from '../components/AccessView.vue'

const routes = [
  {
    path: '/home',
    name: 'HomeView',
    meta: {
      enterClass: 'animate__animated animate__fadeIn',
      leaveClass: 'animate__animated animate__fadeOut',
    },

    component: HomeView
  },
  {
    path: '/',
    name: 'welcome',
    meta: {
      enterClass: 'animate__animated animate__fadeIn',
      leaveClass: 'animate__animated animate__fadeOut',
    },
    component: WelcomeAbout
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    meta: {
      enterClass: 'animate__animated animate__fadeIn',
      leaveClass: 'animate__animated animate__fadeOut',
    },
    component: signupView
  },
  {
    path: '/sign-in',
    name: 'sign-in',
      meta: {
      enterClass: 'animate__animated animate__fadeIn',
      leaveClass: 'animate__animated animate__fadeOut',
    },
    component: signinView
  },
  {
    path: '/Preferences',
    name: 'PreferencesView',
    meta: {
      enterClass: 'animate__animated animate__fadeIn',
      leaveClass: 'animate__animated animate__fadeOut',
    },
    component: PreferencesView
  },
  {
    path: '/access-location',
    name: 'AccessView',
    meta: {
      enterClass: 'animate__animated animate__fadeIn',
      leaveClass: 'animate__animated animate__fadeOut',
    },

    component: AccessView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
