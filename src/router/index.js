import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'login',
		component:() => import ('../views/public/Login')
	},

	{
		path: '/register',
		name: 'register',
		component:() => import('../views/public/Register')
	},
	
	{
		path: '/index', redirect: {name: 'dashboard'}, 
		name: 'index',
		component: () => import('../views/private/Index'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/private/Dashboard.vue')
      },
		]
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
