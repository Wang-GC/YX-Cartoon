<template>
    <div class="catalogue_box">
        <div class="catalogue_main">
            <div class="introduction">
                <div class="cartoon_img" :style="{'backgroundImage':'url('+heads.img+')','background-size':'100%'}"></div>
                <div class="cartoon_text">
                    <span class="cartoon_title">{{this.$route.query.title}}</span>
                    <p  class="cartoon_author">{{this.$route.query.author}}</p>
                    <span  class="cartoon_bref">{{heads.bref}}</span>
                    <p>{{this.$route.query.text}}</p>
                    <div>
                        <div>
                            <a href="#" >{{heads.button_1}}</a>
                            <a href="#" >{{heads.button_2}}</a>
                        </div>
                        
                        <P>
                            <a href="javascript:;">{{heads.tag_1}}</a>
                            <a href="javascript:;">{{heads.tag_2}}</a>
                        </P>
                    </div>
                </div>
            </div>
            <div class="directory">
                <div class="cartoon_main" v-for="(main,index) in mains" :key="index">
                    <div>
                        <router-link target="_blank"  :to="{name:'Cartoon_main',query:{name:main.name,title:heads.title,hit:main.hit}}"><img :src=main.img alt=""></router-link> 
                    </div>
                    <router-link target="_blank" :to="{name:'Cartoon_main',query:{name:main.name,title:heads.title}}">{{main.name}}</router-link> 
                    <p>{{main.hit}}</p>
                    <span>{{main.date}}</span>
                </div>
            </div>
        </div>
        <div class="footer">
            <Recommended></Recommended>
        </div>
    </div>
</template>
<script>
import Recommended from './recommended.vue'
export default {
    data(){
        return{
            text:"同类推荐",
            heads:{
                img:"../../../static/images/catalogue_1.jpg",
                title:"我的英雄学园",
                author:"堀越耕平",
                bref:"漫画简介",
                text:"大部分的人类，在这个时代里都拥有名为“个性”的力量，但有力量之人却不一定都属於正义的一方。"+
                    "一名天生没有力量的少年——绿谷出久从小就憧憬一位顶尖英雄，而他的梦想就是成为伟大的英雄，可是，没有力量的他能实现自己的梦想吗？虽然困难重重，少年却依旧不放弃，朝著自己的标勇往前进！",
                button_1:"查看第一话",
                button_2:"关注",
                tag_1:"1.03亿",
                tag_2:"90万",
            },
            mains:[
                {
                    img:"../../../static/images/cartoon_main_1.jpg",
                    name:"第1话 绿谷出久：原点",
                    hit:"5.4万",
                    date:"10-11",
                },
                {
                    img:"../../../static/images/cartoon_main_1.jpg",
                    name:"第2话 发货尴尬尬他人提供",
                    hit:"5.6万",
                    date:"10-11",
                },
                {
                    img:"../../../static/images/cartoon_main_1.jpg",
                    name:"第1话 绿谷出久：原点",
                    hit:"5.4万",
                    date:"10-11",
                },
                {
                    img:"../../../static/images/cartoon_main_1.jpg",
                    name:"第1话 绿谷出久：原点",
                    hit:"5.4万",
                    date:"10-11",
                },
                {
                    img:"../../../static/images/cartoon_main_1.jpg",
                    name:"第1话 绿谷出久：原点",
                    hit:"5.4万",
                    date:"10-11",
                },
                {
                    img:"../../../static/images/cartoon_main_1.jpg",
                    name:"第1话 绿谷出久：原点",
                    hit:"5.4万",
                    date:"10-11",
                },
                {
                    img:"../../../static/images/cartoon_main_1.jpg",
                    name:"第1话 绿谷出久：原点",
                    hit:"5.4万",
                    date:"10-11",
                },
                {
                    img:"../../../static/images/cartoon_main_1.jpg",
                    name:"第1话 绿谷出久：原点",
                    hit:"5.4万",
                    date:"10-11",
                },
            ],
            footers:[
                {
                    img:"../../../static/images/comment_1.jpg",
                    title:"大龟甲师",
                    hit:"65万",
                    comment:"1.5万"
                },
                {
                    img:"../../../static/images/comment_2.jpg",
                    title:"大龟甲师",
                    hit:"65万",
                    comment:"1.5万"
                },
                {
                    img:"../../../static/images/comment_3.jpg",
                    title:"大龟甲师",
                    hit:"65万",
                    comment:"1.5万"
                },
                {
                    img:"../../../static/images/comment_4.jpg",
                    title:"大龟甲师",
                    hit:"65万",
                    comment:"1.5万"
                },
                {
                    img:"../../../static/images/comment_5.jpg",
                    title:"大龟甲师",
                    hit:"65万",
                    comment:"1.5万"
                },
            ]
        }
    },
    components:{
        Recommended,
    },
    methods:{
        router_to_cartoon_main(){
            this.$router.push({
                path:'/Cartoon_main',
                query:{
                    id:'没有id吗？',
                }
            })
        }
    },
    created(){
console.log(this.$router)
    }
}
</script>
<style>
    .catalogue_box{
        width:100%;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .catalogue_main{
        width:70%;
        border:1px solid rgb(88, 87, 87,0.5);
        border-radius: 10px;
        margin: 2%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .introduction{
        width:100%;
        border-bottom:1px solid rgb(88, 87, 87,0.5);
        /* border-radius: 10px; */
        display: flex;
        align-items: center;
        
    }
    .cartoon_img{
        width:30%;
        height:15rem;
        /* border:1px solid red; */
        border-radius: 10px;
        margin: 30px;
    }
    .cartoon_text{
        width:60%;
        height:10rem;
        display: flex;
        flex-direction: column;
        /* border:1px solid red; */
        height:15rem;
    }
    .cartoon_title{
        font-size: 2rem;
        /* margin-bottom: 1rem; */
    }
    .cartoon_author{
        color: rgb(153, 154, 155);
        margin-bottom: 1rem;
    }
    .cartoon_bref{
        width:10%;
        height:12%;
        border-bottom: 2px solid rgb(245, 209, 5);
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        margin-bottom: 2%;
    }
    .cartoon_text>p{
        margin-bottom: 2%;
    }
    .cartoon_text>div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .cartoon_text>div>div{
        display: flex;
        width:23%;
        
    }
    .cartoon_text>div>div>a{
        display: block;
        width:100%;
        background-color: rgb(250, 230, 51);
        padding: 4px;
        border-radius: 10px;
        color: rgb(114, 114, 114);
        margin-right: 4%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
     .cartoon_text>div>P{
        /* border:1px solid red; */
        display: flex;
        justify-content: space-between;
        width: 20%;
     }
     .cartoon_text>div>P>a{
        display: block;
        color: black;
     }
     .directory{
        /* border:1px solid red; */
        width:90%;

     }
     .cartoon_main{
        width:100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgb(216, 215, 215);
        padding-bottom: 2%;
        padding-top: 2%;
     }
     .cartoon_main>div{
         /* border:1px solid red; */
         border-radius: 10px;
         width:20%;
         height:9rem;
         overflow: hidden;
     }
     .cartoon_main>div>a>img{
         width: 100%;
     }
     .cartoon_main>a{
         color: black;
     }
     .footer{
         display: flex;
         align-items: center;
         justify-content: center;
     }
</style>