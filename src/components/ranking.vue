<template>
    <div class="ranking_box">
        <div class="ranking_nav"  >
            <div v-for="(nav,index) in navs" :key="index">
                <router-link  to="">{{nav.text}}</router-link>
            </div>
        </div>
        <div class="main">
            <Ranking></Ranking>
        </div>
    </div>
</template>
<script>

import Ranking from './ranking/ranking_main.vue'
export default {
    data(){
        return{
            navs:[
                {text:"综合榜"},
                {text:"口碑榜"},
                {text:"畅销榜"},
                {text:"新作榜"},
                {text:"完结榜"},
            ]
        }
    },
    components:{
        Ranking,
    }
}
</script>
<style >
    .ranking_box{
        width: 100%;
        background-color: rgb(253, 253, 253);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .ranking_nav{
        width:70%;
        height:5rem;
        border-bottom:1px solid rgb(195, 192, 192);
        display: flex;
        align-items: center;
    }
    .ranking_nav>div{
        width:10%;
        height:80%;
        /* border:1px solid red; */
        font-size: 1.5rem;
        display: flex;
        align-items: center;
    }
    .ranking_nav>div>a{
        color: rgb(252, 187, 102);
    }
    .main{
        margin-top: 2%;
        margin-bottom: 2%;
        width:70%;
        /* height:10rem; */
        border-bottom:1px solid rgb(180, 180, 180);
    }
</style>