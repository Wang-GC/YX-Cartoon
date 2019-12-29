<template>
  <div id="app">
    <Nav_header></Nav_header>
    <!-- <Header_LBT></Header_LBT>
    <Center></Center>
    <Footer></Footer> -->
    <!-- <Home></Home> -->
    <router-view></router-view>
    <Copyright></Copyright>
  </div>
</template>

<script>

import Nav_header from './components/nav_header.vue'
import Header_LBT from './components/header_LBT.vue'
import Center from './components/center.vue'
import Footer from './components/footer.vue'
import Home from './components/Home.vue'
import Copyright from './components/copyright.vue'
import Catalogue from './components/cartoon/catalogue.vue'
import Cartoon_main from './components/cartoon/cartoon_main.vue'


export default {
  components:{
    Nav_header,
    Header_LBT,
    Center,
    Footer,
    Copyright,
    Home,
    Catalogue,
    Cartoon_main,
  }
}
</script>

<style>
  #app{
      width:100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      /* justify-content: center; */
  }
</style>
