import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { 
      title:'首頁',
      requiresAuth: true 
    }  // 加入meta屬性
  },
  {
    path: '/about',
    name: 'about',
    meta: { 
      title:'123',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    // component: LoginView
    component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView.vue')
  },
  {
    path: '/product',
    name: 'products',
    component: () => import(/* webpackChunkName: "product" */ '@/views/product/ProductView.vue'),
    children: [
			{ 
				// /user/:username
				path: '', 
        component: () => import(/* webpackChunkName: "product" */ '@/views/product/ProductView.vue'),
			},
      {
        // /user/:username/profile
        path: 'profile',
        component: () => import(/* webpackChunkName: "product" */ '@/views/product/ProductView.vue'),
      }
    ]
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import(/* webpackChunkName: "error" */ '@/views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },
})

router.beforeEach((to, from) => {
  // 檢查用户是否已登录 並 ❗️避免無限重定向
  if(to.meta.requiresAuth && to.name !== 'login'){
    const isAuth = localStorage.getItem('token')
    console.log('檢查用户'+ isAuth);
    if(isAuth){
      // return '/about'
      return true
    }else{
      return '/login'
    }
  }
})
  
	// if(to.meta.requiresAuth && to.name !== 'Login'){
  //   // const api = `${process.env.APIPATH}/api/user/check`
  //   // this.axios.post(api).then((response) => {
  //   //   if(response.data.success){
	// 	// 		return true
  //   //   }else{
	// 	// 		// 將用户重定向到login页面
	// 	// 		// return { name: 'Login' }
	// 	// 		return '/login'
	// 	// 	}
  //   // }.catch(error=>{
	// 	// 	 // 返回 false 以取消导航
	// 	// 	 return false
	// 	// })

  //   const isLogin = localStorage.getItem('token')
  //   if(isLogin){
  //     return true
  //   }else{
  //     return '/login'
  //   }
  // } else {
  //   return true
  // }
// })
export default router
