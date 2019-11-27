import Vue from 'vue'
import Router from 'vue-router'
import Landing from '../src/views/Landing'
import Main from '../src/views/Main'
import WebShop from '../src/views/WebShop'
import Login from '../src/views/Login'
import Navbar from '../src/components/Navbar'
import Settings from '../src/views/Settings'
import Vuexic from '../src/views/Vuexic'
import Register from '../src/views/Register'
import Proizvodi from '../src/views/Proizvodi'
import Prodavnica from '../src/views/Prodavnica'
import test from '../src/views/test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },{
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: Navbar
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },{
      path: '/prodavnica',
      name: 'prodavnica',
      component: WebShop
    },{
      path: '/vuex',
      name: 'Vuex',
      component: Vuexic
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/proizvodi',
      name: 'Proizvodi',
      component: Proizvodi
    },
    {
      path: '/radnja',
      name: 'Prodavnica',
      component: Prodavnica
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },

  ]
})
