import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
// 	if(!to.meta.public) {
// 		return next({path: '/'})
// 	}else {
// 		next()
// 	}
// })

export default router
