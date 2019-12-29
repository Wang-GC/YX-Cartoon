<template>
    <div id="center">
        <div id="center_top">
            <Center_top></Center_top>
           <!-- <div id="center_top_left">
               <div id="tabs_title" class="radio-group" >
                   <div id="tabs_icon"></div>
                   <span v-for="(tab,index) in tabs"  :key="index" :class="{cur:iscur==index}"  @click="iscur=index,tabChange('Tabs_' + (index + 1))">{{tab.name}}</span>
               </div>
               <div id="tabs_main" >
                       <component v-bind:is="tabView"></component>                 
               </div>
           </div>
            -->
        </div>
        <div id="center_bottom">
            <Center_bottom></Center_bottom>
        </div>
    </div>
</template>

<script>
import Tabs_1 from './Tabs_1.vue'
import Tabs_2 from './Tabs_2.vue'
import Tabs_3 from './Tabs_3.vue'
import Center_bottom from './center_bottom.vue'
import Center_top from './center_top.vue'
export default {
    components:{
        Tabs_1,
        Tabs_2,
        Tabs_3,

        Center_bottom,
        Center_top
    },
    methods: {
        tabChange:function(tab){
        this.tabView = tab;
        }
    },
    data(){
        return {
            tabview:'Tabs_1',

            tabs:[
                {name:"综合榜单"},
                {name:"口碑榜"},
                {name:"畅销榜"}
            ],
            
             iscur: 0,
        }
    }
}
</script>

<style>
     #ranking_before{
        width:100%;
        /* border:1px solid red; */
        height:15%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    #ranking_after{
        width:100%;
        /* border:1px solid red; */
        height:20%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    #center{
        /* width: 1280px; */
        height:95rem;
        margin-top: 1%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    #center_top{
        width:70%;
        height:50%;
        /* border:1px solid #00b7c4; */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    #center_top_left{
        width:75%;
        height:95%;
        /* border:1px solid #00b7c4; */
    }
    .radio-group>span{
        cursor:pointer;
        /* border:1px solid red; */
        width:10%;
        height:100%;
        margin-left:3%;
        font-size:1.5rem;
        display: flex;
        display: flex;
        flex-direction: row;
        justify-content:center;
        align-items: center;
    }
    .cur{
        box-sizing: border-box;
        border:0.2rem solid #00b7c4;
        border-radius: 10px 10px 0 0;
        color:#00b7c4;
        /* background-color: #20a0ff;    */
    }
    #tabs_icon{
        width:8%;
        height:100%;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        /* border:1px solid blue; */
    }
    #tabs_title{
        /* border:1px solid blue; */
        width:100%;
        height:8%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    #tabs_main{
        box-sizing: border-box;
        border:0.2rem solid #00b7c4;
        border-radius: 1rem;
        width:100%;
        height:92%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    #center_bottom{
        width:70%;
        height:50%;
        margin-top: 2%;
        /* border:1px solid #f19800; */
    }
</style>