import Vue from 'vue'
import VueRouter from 'vue-router'
const tabbar=()=>import('../components/tabbar/tabbar')
const home=()=>import('../views/home/Home')
const user=()=>import('../views/user/User')
const category=()=>import('../views/category/Category')
const shopcart=()=>import('../views/shopcart/Shopcart')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tabbar',
    component: tabbar
  },
  {
    path:'/tabbar',
    name:'tabbar',
    component: tabbar
  },
  {
    path:'/home',
    name:'home',
    component: home
  },
  {
    path:'/user',
    name:'user',
    component: user
  },
  {
    path:'/category',
    name:'category',
    component: category
  },
  {
    path:'/shopcart',
    name:'shopcart',
    component: shopcart
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
