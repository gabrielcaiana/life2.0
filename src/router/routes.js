export default [
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