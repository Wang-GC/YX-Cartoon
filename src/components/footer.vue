<template>
    <div class="footer_box" id="footer">
        <div class="footer">
            <div class="footer_title">新书推荐</div>
            <div class="footer_main">
                <a class="footer_main_left" href="#">
                    <div class="footer_main_left_text">
                        <p><a href="#">晴空下<span>校园</span></a></p>
                        <p>北巷</p>
                        <p class="text_main">《青空之夏》第二季回归！意外的失忆，让江雪忘记了这个改变自己的男孩夏至，由此，在一起追逐篮球梦的过程中，不为人知的过往逐渐被揭开</p>
                    </div>
                </a>
                <div class="footer_main_right_box">
                    <!-- <Footer_right_main></Footer_right_main> -->
                    <div class="right_main" v-for="(main,index) in mains" :key="index"  >
                        <div class="right_main_img" ><a href="#"><img :src=main.img alt=""></a></div>
                        <div class="right_main_text">
                            <p class="main_title"><a href="#">{{main.title}}</a></p>
                            <p class="main_author">{{main.author}}</p>
                            <p class="main_type"><span>{{main.type1}}</span>  <span>{{main.type2}}</span></p>
                            <p class="main_text">{{main.text}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Footer_right_main from './footer_main_right.vue'
export default {
    // el:'footer',
    data(){
        return{
            components:{
                Footer_right_main
            },
            mains:[
                {
                    img:"../../static/images/carton1_1.jpg",
                    title:"高等灵魂",
                    author:"千亮",
                    type1:"古风",
                    type2:"玄幻",
                    text:"一个无神论少年蒋乘风因为一次意外获得一种神奇的力量，凭借这种力量，他可以轻松化解世间最恐怖，最令的人畏惧的事件。这次的任务是拯救一个失踪的少年，地点则是令人闻风丧胆的 昆噬岩！ 看他如何一路过关斩将！勇斗邪灵！ 不要在我面前装神弄鬼！否则统统打爆！",
                },

                {
                    img:"../../static/images/carton1_2.jpg",
                    title:"高等灵魂",
                    author:"千亮",
                    type1:"古风",
                    type2:"玄幻",
                    text:"一个无神论少年蒋乘风因为一次意外获得一种神奇的力量，凭借这种力量，他可以轻松化解世间最恐怖，最令的人畏惧的事件。这次的任务是拯救一个失踪的少年，地点则是令人闻风丧胆的 昆噬岩！ 看他如何一路过关斩将！勇斗邪灵！ 不要在我面前装神弄鬼！否则统统打爆！",
                },

                {
                    img:"../../static/images/carton1_3.jpg",
                    title:"高等灵魂",
                    author:"千亮",
                    type1:"古风",
                    type2:"玄幻",
                    text:"一个无神论少年蒋乘风因为一次意外获得一种神奇的力量，凭借这种力量，他可以轻松化解世间最恐怖，最令的人畏惧的事件。这次的任务是拯救一个失踪的少年，地点则是令人闻风丧胆的 昆噬岩！ 看他如何一路过关斩将！勇斗邪灵！ 不要在我面前装神弄鬼！否则统统打爆！",
                },

                {
                    img:"../../static/images/carton1_4.jpg",
                    title:"高等灵魂",
                    author:"千亮",
                    type1:"古风",
                    type2:"玄幻",
                    text:"一个无神论少年蒋乘风因为一次意外获得一种神奇的力量，凭借这种力量，他可以轻松化解世间最恐怖，最令的人畏惧的事件。这次的任务是拯救一个失踪的少年，地点则是令人闻风丧胆的 昆噬岩！ 看他如何一路过关斩将！勇斗邪灵！ 不要在我面前装神弄鬼！否则统统打爆！",
                },

                {
                    img:"../../static/images/carton1_5.jpg",
                    title:"高等灵魂",
                    author:"千亮",
                    type1:"古风",
                    type2:"玄幻",
                    text:"一个无神论少年蒋乘风因为一次意外获得一种神奇的力量，凭借这种力量，他可以轻松化解世间最恐怖，最令的人畏惧的事件。这次的任务是拯救一个失踪的少年，地点则是令人闻风丧胆的 昆噬岩！ 看他如何一路过关斩将！勇斗邪灵！ 不要在我面前装神弄鬼！否则统统打爆！",
                },

                {
                    img:"../../static/images/carton1_6.jpg",
                    title:"高等灵魂",
                    author:"千亮",
                    type1:"古风",
                    type2:"玄幻",
                    text:"一个无神论少年蒋乘风因为一次意外获得一种神奇的力量，凭借这种力量，他可以轻松化解世间最恐怖，最令的人畏惧的事件。这次的任务是拯救一个失踪的少年，地点则是令人闻风丧胆的 昆噬岩！ 看他如何一路过关斩将！勇斗邪灵！ 不要在我面前装神弄鬼！否则统统打爆！",
                },
                
            ],
        }
       
    }
    
}
</script>
<style>
    .footer_box{
        width:100%;
        background-color: #e2f4ff;
        display: flex;
        align-items: center;
        justify-content:center;
    }
    .footer{
        width:70%;
        height:40rem;
        /* border:1px solid rgb(53, 53, 104); */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .footer_title{
        width:100%;
        height:8%;
        /* border:1px solid red; */
        font-size: 1.5rem;
        margin-left: 3%;
        font-weight: bold;
    }
    .footer_main{
        width:100%;
        height:85%;
        /* border:1px solid red; */
        display: flex;
    }
    .footer_main_left{
        width:27%;
        height:100%;
        border:2px solid #00b7ee;
        border-radius: 10px;
        box-sizing: border-box;
        background-image: url("../../static/images/footer_1.jpg");
        background-size: 100%;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column-reverse;
    }
    .footer_main_left_text{
        /* border:1px solid black; */
        background-color: rgba(12, 12, 12);
        background:-webkit-gradient(linear, 0% 40%, 0% 0%,from(#000000), to(#b4b3b3));
        opacity: 0.6;
    }
    .footer_main_left_text>p{
        color: white;
        font-size: 0.2em;
        margin-left: 3%;
    }
    .footer_main_left_text>p>a{
        color: white;
        font-size: 1.5rem;
    }
    .text_main{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .footer_main_right_box{
        width:73%;
        height:100%;
        /* border:1px solid rgb(51, 22, 22); */
        display: flex;
        flex-wrap: wrap;
        /* align-items:center; */
        justify-content: space-between;
    }
    .right_main{
        width:32%;
        height:46%;
        margin-left: 1%;
        /* border:1px solid red; */
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .right_main_text>p{
        margin-bottom: 2%;
    }
    .right_main_img{
        width:50%;
        height:100%;
        border-radius: 1rem;
        overflow: hidden;
    }
    .right_main_img>a>img{
        width:100%;
        height:100%;
    }
    .right_main_text{
        width:48%;
        display: flex;
        flex-direction: column;
    }
    .main_title>a{
        font-size: 1.5rem;
        font-weight: bold;
        color: #000;
    }
    .main_author,.main_text{
        color: #7a7a7a;
    }
    .main_type>span{
        /* width:15%; */
        border-radius: 5px;
        background-color: #00b7ee;
        color: white;
    }
    .main_text{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
    }
</style>