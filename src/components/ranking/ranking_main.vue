<template>
    <div class="main_box">
        <router-link target="_blank" :to="{name:'Catalogue',query:{title:main.title,author:main.title,text:main.text}}" v-for="(main,index) in mains" :key="index" >
            <div class="main_" >
                <div class="main_img" :style="{'backgroundImage':'url('+main.img+')','background-size':'100%'}"></div>
                <div class="main_text">
                    <span class="main_title"><p>{{index+1}}</p>{{main.title}}</span>
                    <span class="author" >{{main.author}}</span>
                    <p>{{main.text}}</p>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{
            mains:[
                {
                    img:"../../../static/images/ranking_1.jpg",
                    title:"谷围南亭",
                    author:"墨飞",
                    text:"少年高影无意间入住一破落城中村的旅店，却意外卷入了一场百年浩劫的神秘纷争，"+
                    "世界的真相第一次在他眼前揭开。龙脉风水一说，古已有之，山河化形为龙，还需点睛之笔，诡异的风水秘术，神秘的镇龙神钉，奇人异事层出不穷，高影的人生也随之改写！！",
                },
                {
                    img:"../../../static/images/ranking_2.jpg",
                    title:"谷围南亭",
                    author:"墨飞",
                    text:"少年高影无意间入住一破落城中村的旅店，却意外卷入了一场百年浩劫的神秘纷争，"+
                    "世界的真相第一次在他眼前揭开。龙脉风水一说，古已有之，山河化形为龙，还需点睛之笔，诡异的风水秘术，神秘的镇龙神钉，奇人异事层出不穷，高影的人生也随之改写！！",
                },
                {
                    img:"../../../static/images/ranking_3.jpg",
                    title:"谷围南亭",
                    author:"墨飞",
                    text:"少年高影无意间入住一破落城中村的旅店，却意外卷入了一场百年浩劫的神秘纷争，"+
                    "世界的真相第一次在他眼前揭开。龙脉风水一说，古已有之，山河化形为龙，还需点睛之笔，诡异的风水秘术，神秘的镇龙神钉，奇人异事层出不穷，高影的人生也随之改写！！",
                },
                {
                    img:"../../../static/images/ranking_4.jpg",
                    title:"谷围南亭",
                    author:"墨飞",
                    text:"少年高影无意间入住一破落城中村的旅店，却意外卷入了一场百年浩劫的神秘纷争，"+
                    "世界的真相第一次在他眼前揭开。龙脉风水一说，古已有之，山河化形为龙，还需点睛之笔，诡异的风水秘术，神秘的镇龙神钉，奇人异事层出不穷，高影的人生也随之改写！！",
                },
                {
                    img:"../../../static/images/ranking_5.jpg",
                    title:"谷围南亭",
                    author:"墨飞",
                    text:"少年高影无意间入住一破落城中村的旅店，却意外卷入了一场百年浩劫的神秘纷争，"+
                    "世界的真相第一次在他眼前揭开。龙脉风水一说，古已有之，山河化形为龙，还需点睛之笔，诡异的风水秘术，神秘的镇龙神钉，奇人异事层出不穷，高影的人生也随之改写！！",
                },
                {
                    img:"../../../static/images/ranking_6.jpg",
                    title:"谷围南亭",
                    author:"墨飞",
                    text:"少年高影无意间入住一破落城中村的旅店，却意外卷入了一场百年浩劫的神秘纷争，"+
                    "世界的真相第一次在他眼前揭开。龙脉风水一说，古已有之，山河化形为龙，还需点睛之笔，诡异的风水秘术，神秘的镇龙神钉，奇人异事层出不穷，高影的人生也随之改写！！",
                },
                {
                    img:"../../../static/images/ranking_7.jpg",
                    title:"谷围南亭",
                    author:"墨飞",
                    text:"少年高影无意间入住一破落城中村的旅店，却意外卷入了一场百年浩劫的神秘纷争，"+
                    "世界的真相第一次在他眼前揭开。龙脉风水一说，古已有之，山河化形为龙，还需点睛之笔，诡异的风水秘术，神秘的镇龙神钉，奇人异事层出不穷，高影的人生也随之改写！！",
                },
                {
                    img:"../../../static/images/ranking_8.jpg",
                    title:"谷围南亭",
                    author:"墨飞",
                    text:"少年高影无意间入住一破落城中村的旅店，却意外卷入了一场百年浩劫的神秘纷争，"+
                    "世界的真相第一次在他眼前揭开。龙脉风水一说，古已有之，山河化形为龙，还需点睛之笔，诡异的风水秘术，神秘的镇龙神钉，奇人异事层出不穷，高影的人生也随之改写！！",
                },
                {
                    img:"../../../static/images/ranking_9.jpg",
                    title:"谷围南亭",
                    author:"墨飞",
                    text:"少年高影无意间入住一破落城中村的旅店，却意外卷入了一场百年浩劫的神秘纷争，"+
                    "世界的真相第一次在他眼前揭开。龙脉风水一说，古已有之，山河化形为龙，还需点睛之笔，诡异的风水秘术，神秘的镇龙神钉，奇人异事层出不穷，高影的人生也随之改写！！",
                },
                {
                    img:"../../../static/images/ranking_10.jpg",
                    title:"谷围南亭",
                    author:"墨飞",
                    text:"少年高影无意间入住一破落城中村的旅店，却意外卷入了一场百年浩劫的神秘纷争，"+
                    "世界的真相第一次在他眼前揭开。龙脉风水一说，古已有之，山河化形为龙，还需点睛之笔，诡异的风水秘术，神秘的镇龙神钉，奇人异事层出不穷，高影的人生也随之改写！！",
                },
                {
                    img:"../../../static/images/ranking_11.jpg",
                    title:"谷围南亭",
                    author:"墨飞",
                    text:"少年高影无意间入住一破落城中村的旅店，却意外卷入了一场百年浩劫的神秘纷争，"+
                    "世界的真相第一次在他眼前揭开。龙脉风水一说，古已有之，山河化形为龙，还需点睛之笔，诡异的风水秘术，神秘的镇龙神钉，奇人异事层出不穷，高影的人生也随之改写！！",
                },
                {
                    img:"../../../static/images/ranking_12.jpg",
                    title:"谷围南亭",
                    author:"墨飞",
                    text:"少年高影无意间入住一破落城中村的旅店，却意外卷入了一场百年浩劫的神秘纷争，"+
                    "世界的真相第一次在他眼前揭开。龙脉风水一说，古已有之，山河化形为龙，还需点睛之笔，诡异的风水秘术，神秘的镇龙神钉，奇人异事层出不穷，高影的人生也随之改写！！",
                },
            ]
        }
    },
    methods:{
        tag_1(){
            if(mians.index<19){
                
            }
        },
         router_to_catalogue(){
             this.router.push({
                 path:'/Catalogue',
                 query:{
                     title:mains
                 }
             })
         }
    },
}
</script>
<style scoped>
    .main_box{
        width:100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .main_box>a{
        width:30%;
        height:18rem;
        margin-bottom: 3%;
        /* border:1px solid red; */
    }
    .main_{
        width: 100%;
        height:100%;
        /* border:1px solid red; */
        display: flex;
        justify-content: space-between;
    }
   .main_>div{
        width:48%;
        /* border:1px solid red; */
    }
    .main_img{
        border-radius: 10px;
    }
    .main_text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .main_title{
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        color: black;
    }
    .author{
        font-size: 1rem;
        color: rgb(151, 146, 146);
    }
    .main_text>span>p{
        color: rgb(251, 10, 10);
        font-size: 1.4rem;
        width:2rem;
        width:2rem;
        border-radius: 50%;
        background-color: rgb(255, 252, 87);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .main_text>p{
        color: rgb(134, 134, 133);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
    }
</style>