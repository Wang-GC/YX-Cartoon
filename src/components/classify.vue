<template>
    <div class="classify_box">
        <div class="classify_tag">

             <div class="tag_main tag_" >
                <div class="tag_main_title">
                    {{tag_main_title}}
                </div>
                <div class="tag_main_text">
                    <div v-for="(tag,index) in tags" :key="index">
                        <span>{{tag}}</span>
                        <span><a href="javascript:;" style="color:black"  @click="remove(index)">×</a></span>
                    </div>
                </div>
            </div>
            
            <div class="tag_main" v-for="(main,index) in mains" :key="index">
                <div class="tag_title">
                    {{main.title}}
                </div>
                <div class="tag_text" >
                    <div v-for="(text,i) in main.list" :key="i" @click="input_text(text,index,i)" v-bind:class="{active:main.index===i}" >
                        <a href="javascript:;" >
                            {{text}}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="classify_main">
            <Ranking></Ranking>
        </div>
    </div>
</template>
<script>

import Ranking from './ranking/ranking_main.vue'
export default {
    data(){
        return{
            tag_main_title:"已选",
            mains:[
                {
                    title:"题材",
                    list:['全部','正能量','校园','玄幻','日漫','灵异','都市','古风','治愈','萌系','投稿']
                },
                {
                    title:"类别",
                    list:['全部','连载中','完结']
                }
            ],
            tags:{}
        }
        mains.forEach(tag=>tag.index=-1) 
    },
    methods:{
        input_text(text,index,i){
            console.log("12123");
            this.$set(this.tags,index,text);
   			//找到操作的这一行，把这一行的数据中的index，设置为点击的标签的下标 
   			this.mains[index].index=i;
        },
        remove(index){
            this.$delete(this.tags,index,index);
            this.mains[index].index=-1;
        }
    },
    components:{
        Ranking,
    }
}
</script>
<style scoped>
   
    .classify_box{
        width: 100%;
        background-color:white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .classify_tag{
        margin-top: 1%;
        width:70%;
        display: flex;
        flex-direction: column;
        margin-bottom: 2%;
    }
    .classify_tag>div{
        margin-top: 2%;
    }
    .tag_main{
        width:100%;
        height:4rem;
        display: flex;
        align-items: center;
    }
    .tag_{
        border-bottom: 1px solid rgb(200, 199, 199);
    }
    .tag_main_title,.tag_title{
        width:5%;
        height:100%;
        font-size: 1rem;
        color: rgb(173, 173, 173);
        display: flex;
        align-items: center;
    }
    .tag_main_text{
        width:60%;
        height:100%;
        /* border:1px solid red; */
        font-size: 1.5rem;
        display: flex;
        align-items: center;
    }
    .tag_main_text>div{
        font-size: 1.2rem;
        border-radius: 5px;
        background-color: rgb(248, 230, 68);
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
    }
    .tag_text{
        width:60%;
        /* border:1px solid red; */
        display: flex;
    }
    .tag_text>div{
        border:1px solid rgb(223, 186, 186);
        height:2rem;
        width:10%;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .active{
        background-color: rgb(248, 230, 68);
        border: none;
    }
    .tag_text>div>a{
        color: rgb(55, 55, 56);
    }
    .classify_main{
        width:70%;
    }
</style>