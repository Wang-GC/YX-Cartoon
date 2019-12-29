<template>
    <div id="Tabs_1">
        <div id="Tabs_1_carton" v-for="(main,index) in mains" :key="index">
            <router-link target="_blank" :to="{name:'Catalogue',query:{name:main.name,title:main.title,img:main.img,new:main.new,author:main.author,hit:main.hit}}">{{main.name}}
                <div id="Tabs_1_carton_box">
                    <div id="Tabs_1_img" :style="{'backgroundImage':'url('+main.img+')','background-size':'100%'}">
                        <div id="Tabs_1_img_tips">
                            <span><p>{{main.new}}</p></span>
                        </div>
                    </div>
                </div>
                <div id="Tabs_1_painter">
                    <p>{{main.title}}</p>
                    <div>
                        <p>{{main.author}}</p>
                        <p>{{main.hit}}</p>
                    </div>
                </div>
            </router-link>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            mains:[
                {
                    img:"../../static/images/carton1_1.jpg",
                    new:"更新至第1688话",
                    title:"哑舍",
                    author:"玄色",
                    hit:"99万",
                },
                {
                    img:"../../static/images/carton1_2.jpg",
                    new:"更新至第1688话",
                    title:"哑舍",
                    author:"玄色",
                    hit:"99万",
                },
                {
                    img:"../../static/images/carton1_3.jpg",
                    new:"更新至第1688话",
                    title:"哑舍",
                    author:"玄色",
                    hit:"99万",
                },
                {
                    img:"../../static/images/carton1_4.jpg",
                    new:"更新至第1688话",
                    title:"哑舍",
                    author:"玄色",
                    hit:"99万",
                },
                {
                    img:"../../static/images/carton1_5.jpg",
                    new:"更新至第1688话",
                    title:"哑舍",
                    author:"玄色",
                    hit:"99万",
                },
                {
                    img:"../../static/images/carton1_6.jpg",
                    new:"更新至第1688话",
                    title:"哑舍",
                    author:"玄色",
                    hit:"99万",
                },
                {
                    img:"../../static/images/carton1_7.jpg",
                    new:"更新至第1688话",
                    title:"哑舍",
                    author:"玄色",
                    hit:"99万",
                },
                {
                    img:"../../static/images/carton1_8.jpg",
                    new:"更新至第1688话",
                    title:"哑舍",
                    author:"玄色",
                    hit:"99万",
                },
                {
                    img:"../../static/images/carton1_9.jpg",
                    new:"更新至第1688话",
                    title:"哑舍",
                    author:"玄色",
                    hit:"99万",
                },
                {
                    img:"../../static/images/carton1_10.jpg",
                    new:"更新至第1688话",
                    title:"哑舍",
                    author:"玄色",
                    hit:"99万",
                },
            ]
        }
    }
}
</script>
<style >   
    #Tabs_1_carton>a{
        width:100%;
        height:100%;
    }
    #Tabs_1{
        /* border:1px solid red; */
        width:98%;
        height:98%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0.5rem auto;
    }
    #Tabs_1_carton{
        /* border: 0.1rem solid #535f27; */
        width:18%;
        height:45%;
        margin-top: 1%;
        margin-left: 1%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-items: center;
        align-items: center;
    }
    #Tabs_1_carton_box{
        width:95%;
        height:80%;
        border:1px solid #aaaa;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #Tabs_1_painter>p{
        font-size: 1.3rem;
        font-weight: bold;
        display:flex;
        color: black;
    }
    #Tabs_1_painter>a>
    #Tabs_1_painter{
        width:98%;
    }
    #Tabs_1_painter>div{
        width: 100%;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }
    #Tabs_1_painter>div>p{
        color: #726c6c;
    }
    #Tabs_1_img{
        border:1px solid #aaa;
        width:95%;
        height:95%;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content:flex-end;
        align-items: flex-end;
        
    }
    #Tabs_1_img>img{
        width:100%; 
    }
    #Tabs_1_img_tips>span{
        width:100%;
        background-color: rgb(41, 40, 40,0.4);
    
    }
    #Tabs_1_img_tips>span{
        color: rgb(228, 225, 225);
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>