<template>
    <div>
        <Header_LBT></Header_LBT>
        <Center></Center>
        <Footer></Footer>
    </div>
</template>
<script>

import Header_LBT from './header_LBT.vue'
import Center from './center.vue'
import Footer from './footer.vue'

export default {
    components:{
    Header_LBT,
    Center,
    Footer,
  },
  data(){
      return{
          nickname:"",
      }
  },
  created(){
        this.getRouterDate();
    },
  methods:{
    getRouterDate(){
            this.nickname = this.$route.params.nickname;
            console.log("haha")
    },
  }
}
</script>
<style scoped>
    div{
        width:100%;
        margin: 0 auto;
    }
</style>