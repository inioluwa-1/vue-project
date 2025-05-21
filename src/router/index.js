import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import HomeComponent from '@/views/HomeComponent.vue'
import PageNotFound from '@/components/PageNotFound.vue'
import AboutView from '@/views/AboutView.vue'
import SignUp from '@/views/SignUp.vue'
import SignIn from '@/views/SignIn.vue'
import DashBoard from '@/views/DashBoard.vue'
import ComputedProperty from '@/views/ComputedProperty.vue'
import DynamicRoute from '@/views/DynamicRoute.vue'
import BlogView from '@/views/BlogView.vue'
import ParentView from '@/views/ParentView.vue'
import LogView from '@/views/LogView.vue'
import LoginView from '@/views/LoginView.vue'
import DashView from '@/views/DashView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // another method of routing
      // component: AboutView


      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
       component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/hello',
      component: HelloWorld
    },
    {
      path:'/computed',  
      component: ComputedProperty
    },
    {
      path: '/home',
      component: HomeComponent
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: '/signin',
      component: SignIn
    },
    {
      path: '/dashboard',
      component: DashBoard      
    },
    {
      path: '/dynamic',
      component: DynamicRoute,
      name: 'blog'
    },
    {
      path: '/dynamic/:id/:title',
      component: BlogView,
      name: 'blogview'
    },
    {
      path: '/parent',
      component: ParentView,
      name: 'parent'
    },
    {
      path: '/log',
      component: LogView
    },
    {
      path: '/login',
      component: LoginView
    },
    {
      path: '/dash/:username',
      component: DashView
    },
    {
      path: '/:catchAll(.*)',
      component: PageNotFound
    }
  ],
})

export default router
