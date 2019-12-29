import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Classify from '../components/classify.vue'
import Ranking from '../components/ranking.vue'
import Contribute from '../components/contribute.vue'

import Login from '../components/login/login.vue'
import Register from '../components/login/register.vue'
import Catalogue from '../components/cartoon/catalogue.vue'
import Cartoon_main from '../components/cartoon/cartoon_main.vue'
import Nav_header from '../components/nav_header.vue'

Vue.use(Router)

export default new Router({

  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/Home' 
    },
    {
      path: '/Home',
      name:'Home',
      component:Home 
    },
    {
      path: '/Classify',
      component: Classify
    },
    {
      path: '/Ranking',
      component:Ranking 
    },
    {
      path: '/Contribute',
      component:Contribute 
    },
    {
      path: '/Login',
      name:'Login',
      component:Login 
    },
    {
      path: '/Register',
      name:'Register',
      component:Register 
    },
    {
      path: '/Catalogue',
      name:'Catalogue',
      component:Catalogue 
    },
    {
      path: '/Cartoon_main',
      name:'Cartoon_main',
      component:Cartoon_main 
    },
    {
      path: '/Nav_header',
      name:'Nav_header',
      component:Nav_header 
    },
  ]

})
