import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import http from '@/services/http'
import { state } from "../store/modules/authentication"

Vue.use(VueRouter)

Vue.prototype.$http = http


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
	if(!to.meta.public && !state.token) {
		return next({path: '/'})
	}else {
		next()
	}
})

export default router
