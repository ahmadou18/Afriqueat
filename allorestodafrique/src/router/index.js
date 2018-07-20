import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Products from '@/components/Products'
import ProductsDetails from '@/components/ProductsDetails'
import Cart from '@/components/Cart'
import Dashboard from '@/components/Dashboard'
import DashboardAdd from '@/components/DashboardAdd'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Products',
      name: 'Products',
      component: Products
    },
    {
      path: '/Products/:id',
      name: 'ProductsDetails',
      component: ProductsDetails,
      props: true
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/Dashboard/Add',
      name: 'DashboardAdd',
      component: DashboardAdd
    }
  ]
})
