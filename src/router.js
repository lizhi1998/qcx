import Vue from 'vue'
import Router from 'vue-router'
import Index from './view/Index.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'login',
      component: () => import('./view/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: Index,
      children: [{
          path: '/home',
          name: 'home',
          component: () => import('./view/home/Index.vue')
        },
        {
          path: '/message',
          name: 'message',
          component: () => import('./view/message/Index.vue')
        },
				{
				  path: '/message/:id',
				  name: 'messageDetails',
				  component: () => import('./view/message/Details.vue'),
					props:true,
				 },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('./view/profile/Index.vue'),
         },
				 {
            path: '/profile/:id',
            name: 'profileDetail',
            component: () => import('./view/profile/PersonInfo.vue'),
						props:true,
						
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // if (to.meta.requireAuth) {
  //   next({
  //     path: '/login'
  //   })
  // } else {
  //   next()
  // }
  next()
})

export default router