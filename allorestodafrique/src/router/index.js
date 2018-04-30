import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import Products from '@/components/Products'
import ProductsDetails from '@/components/ProductsDetails'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
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
      path: '/Logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/Products',
      name: 'Products',
      component: Products
    },
    {
      path: '/Products/:id',
      name: 'ProductsDetails',
      component: ProductsDetails
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
