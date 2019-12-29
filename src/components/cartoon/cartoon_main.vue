<template>
    <div class="cartoon_main_box">
        <div class="cartoon_main">
            <div class="header">
                <div class="header_main" id="top_top">
                    <p>{{heads.text}}</p>
                    <a href="#">{{heads.tag}}</a>
                    <a href="#">{{this.$route.query.title}}</a>
                    <p>{{this.$route.query.name}}</p>
                </div>
                <div class="header_hit">
                    <span>{{this.$route.query.hit}}</span>
                </div>
            </div>

            <div class="center">
                <span>
                    <a href="#">上一话</a>
                    <p>|</p>
                    <el-button class="directory"  @click.native="drawer = true" type="primary" >目录</el-button>

                    <el-drawer
                        class="catalog_title"
                        :title=heads.title
                        :visible.sync="drawer"
                        :direction="direction"
                        >
                        <div class="catalog_box">
                            <div v-for="(catalog,index) in catalogs" :key="index">
                                <a href="#">{{catalog.num}}</a>
                                <a href="#">{{catalog.title}}</a>
                            </div>
                        </div>
                    </el-drawer>

                    <p>|</p>
                    <a href="#">下一话</a>
                </span>
                <div>
                    <img v-for="(main,index) in mains" :key="index" :src=main.img alt="">
                </div>
                <span>
                    <a href="#">上一话</a>
                    <p>|</p>
                    <el-button class="directory" @click="drawer = true" type="primary" >目录</el-button>
                    <p>|</p>
                    <a href="#">下一话</a>
                </span>
            </div>

            <!-- <button class="top"><a href="top_top"></a> 回到顶部</button>     -->
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
            height:document.body.clientHeight,
            drawer: false,
            direction: 'ltr',
            heads:{
                text:"作品",
                tag:"查看首页",
                name:"我的英雄学院",            
                title:"第2话：怒吼吧！肌肉",
                hit:"8089",
                id:"",
            },
            mains:[
                {img:"../../../static/cartoon/test_1.jpg"},
                {img:"../../../static/cartoon/test_2.jpg"},
                {img:"../../../static/cartoon/test_3.jpg"},
                {img:"../../../static/cartoon/test_4.jpg"},
                {img:"../../../static/cartoon/test_5.jpg"},
                {img:"../../../static/cartoon/test_6.jpg"},
                {img:"../../../static/cartoon/test_7.jpg"},
                {img:"../../../static/cartoon/test_8.jpg"},
                {img:"../../../static/cartoon/test_9.jpg"},
                {img:"../../../static/cartoon/test_10.jpg"},
                {img:"../../../static/cartoon/test_11.jpg"},
                {img:"../../../static/cartoon/test_12.jpg"},
                {img:"../../../static/cartoon/test_13.jpg"},
                {img:"../../../static/cartoon/test_14.jpg"},
                {img:"../../../static/cartoon/test_15.jpg"},
                {img:"../../../static/cartoon/test_16.jpg"},
                {img:"../../../static/cartoon/test_17.jpg"},
                {img:"../../../static/cartoon/test_18.jpg"},
                {img:"../../../static/cartoon/test_19.jpg"},
                {img:"../../../static/cartoon/test_20.jpg"},

            ],
            catalogs:[
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第二话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第二话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第二话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第一话",
                    title:"绿谷出久",
                },
                {
                    num:"第er话",
                    title:"绿谷出久",
                },
            ],
        }
    },
    created(){
        console.log(this.$route)
        this.getRouterDate()
    },
    methods:{
        getRouterDate(){
            this.id = this.$route.query.id
            console.log('id',this.id)
        }
    },
    components:{
        Recommended,
    }
}
</script>
<style>
    .cartoon_main_box{
        width:100%;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .cartoon_main{
        margin: 2%;
        width:70%;
        border:1px solid rgb(196, 194, 194);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .header{
        /* border:1px solid red; */
        background-color: rgba(233, 235, 236, 0.171);
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 1.3rem;
        padding: 10px;
    }
    .header>div>p,.header>div>a{
        padding-right: 1.2rem;
    }
    .header_main{
        display: flex;
    }
    .header_main>a{
        color: rgb(252, 63, 63);
    }
    .header_hit{
        margin-right: 5%;
    }

/* ************目录************* */
    .el-button--primary{
        background: none !important;
        border: none !important;
        color: black ;
    }
    .el-button{
        padding: 0px;
    }
    tr:hover{
        color: black !important;
    }
    .catalog_box{
        /* border:1px solid red; */
        height:700px;
        overflow: scroll;
    }
    .catalog_box>div{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        margin: 6%;
    }
    element.style{
        width:15% ;
    }
    el-drawer__header>span{
        font-size: 1.5rem;
    }
/* ***************************** */
    .center{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .center>span{
        display: flex;
        justify-content: space-between;
        width: 20%;
        font-size: 1.2rem;
        color: black;
        padding: 3%;
    }
    .center>div{
        display: flex;
        flex-direction: column;
        width: 50%;
        align-items: center;
        /* border:1px solid red; */
    }
    .center>div>img{
        width: 100%;
    }
    .footer{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .top{
        position: fixed;
        right: 11%;
        bottom: 4%;
    }
</style>