export default [
	{
		path: '/',
		name: 'login',
		component:() => import ('../views/public/Login'),
		meta: {
			public: true
		}
	},

	{
		path: '/register',
		name: 'register',
		component:() => import('../views/public/Register'),
		meta: {
			public: true
		}
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
			{
        path: '/peso',
        name: 'peso',
        component: () => import('../views/private/Peso.vue')
      },
			{
        path: '/alimentos',
        name: 'alimentos',
        component: () => import('../views/private/Alimentos.vue')
      },
			{
        path: '/pressao-arterial',
        name: 'pressao-arterial',
        component: () => import('../views/private/PressaoArterial.vue')
      },
			{
        path: '/atividades-fisicas',
        name: 'atividades-fisicas',
        component: () => import('../views/private/AtividadesFisicas.vue')
      },
		]
	},
]