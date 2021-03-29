import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Explore from '../views/Explore.vue'
import About from '../views/About.vue'
import Signin from '../views/Signin.vue'
import Profile from '../views/Profile.vue'
import ViewEvent from '../views/ViewEvent.vue'
import Events from '../views/Events.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/user/:id',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/event/:id',
    name: 'ViewEvent',
    component: ViewEvent
  },
  {
    path: '/events',
    name: 'Event',
    component: Events
  },
]

const router = new VueRouter({
  routes
})

export default router
