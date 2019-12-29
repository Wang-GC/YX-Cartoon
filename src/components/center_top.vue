<template>
    <div class="center_box">
        <div class="center_box_left">
            <div class="center_top" id="center_top_box">
            <div class="center_top_nav">
                <p></p>
                <p :class="top_active1" @click="click_nav1">{{nav_1}}</p>
                <p :class="top_active2" @click="click_nav2">{{nav_2}}</p>
                <p :class="top_active3" @click="click_nav3">{{nav_3}}</p>
            </div>
            <div class="center_top_right_title"></div>
            <div class="center_top_main">
                <div class="top_main_left">
                    <div ref="nav1" style="display:block">
                        <Tabs_1 ></Tabs_1>
                    </div>
                    
                    <div ref="nav2" style="display:none">
                        <Tabs_2 ></Tabs_2>
                    </div>

                    <div ref="nav3" style="display:none">
                        <Tabs_3 ></Tabs_3>
                    </div>
                </div>
                <div class="top_main_right"></div>
            </div>
        </div>
        </div>
        <div class="center_box_right">
            <div id="center_top_right">
               <div id="top_right_title" >
                   <p><a href="#">排行</a></p>
               </div>
               <div id="top_right_main">
                  <Top_right_mian   v-for="(top,index) in tops" :key="index" :top="top" :index="index"></Top_right_mian>
               </div>
               <div id="top_right_footer">
                   <a href="#"> <div>查看更多</div> </a>
               </div>
           </div>
        </div>
    </div>
    
</template>
<script>
import Tabs_1 from './Tabs_1'
import Tabs_2 from './Tabs_2'
import Tabs_3 from './Tabs_3'
import Top_right_mian from './top_right_main.vue'
export default {
    components:{
        Tabs_1,
        Tabs_2,
        Tabs_3,
        Top_right_mian,
    },
    methods:{
        click_nav1(){
            this.top_active1='top_after1';
            this.top_active2='top_before2';
            this.active3='top_before3';
            this.$refs.nav1.style.display = 'block';
            this.$refs.nav2.style.display = 'none';
            this.$refs.nav3.style.display = 'none';
        },
        click_nav2(){
            this.top_active1='top_before';
            this.top_active2='top_after2';
            this.top_active3='top_before3';
            this.$refs.nav1.style.display = 'none';
            this.$refs.nav2.style.display = 'block';
            this.$refs.nav3.style.display = 'none';
        },
        click_nav3(){
            this.top_active1='top_before';
            this.top_active2='top_before2';
            this.top_active3='top_after3';
            this.$refs.nav1.style.display = 'none';
            this.$refs.nav2.style.display = 'none';
            this.$refs.nav3.style.display = 'block';
        },
    },
    data(){
        return{
            nav_1:"综合榜单",
            nav_2:"口碑榜",
            nav_3:"畅销榜",
            top_active1:'top_before1',
            top_active2:'top_before2',
            top_active3:'top_before3',
            tops:[                
                {
                    // index:1,
                    top_title:"哑舍",
                    hits:"1024万",
                    text:"哑舍里的古物，每一件都有着自己的故事，承载了许多年，无人倾听，默然等待千年，"+
                    "只为再次相遇。古物背后的历史，历史背后的人生。它们在岁月中浸染了成百上千年，每一件，都凝聚着工匠的心血，倾注了使用者的感情。",
                    url:"../../static/images/carton1_1.jpg",
                    top_main:"哑舍里的古物，每一件都有着自己的故事，承载了许多年，无人倾听，默然等待千年，"+
                    "只为再次相遇。古物背后的历史，历史背后的人生。它们在岁月中浸染了成百上千年，每一件，都凝聚着工匠的心血，倾注了使用者的感情。",
                },
                {
                    // index:2,
                    top_title:"怦然心动",
                    hits:"900万",
                    text:"少男少女同住一个屋檐下，一同历经青春的懵懂和烦恼。画风温馨的超人气少女漫，感受青春悸动的萌芽，这一部就够！",
                    url:"../../static/images/top_2.jpg",
                    top_main:"少男少女同住一个屋檐下，一同历经青春的懵懂和烦恼。画风温馨的超人气少女漫，感受青春悸动的萌芽，这一部就够！"
                },
                {
                    index:3,
                    top_title:"捡到只小狐狸",
                    hits:"888万",
                    text:"第三季剧情简介：狐女小七被吸血鬼格雷格视作‘妻子转世’，被虏回森林古堡后，两人开启全新爆笑治愈故事！一个鬼马小狐女，一个外表冷酷内心重度妻控的吸血鬼，究竟是误会一场还是命定情缘？",
                    url:"../../static/images/top_3.jpg",
                    top_main:"第三季剧情简介：狐女小七被吸血鬼格雷格视作‘妻子转世’，被虏回森林古堡后，两人开启全新爆笑治愈故事！一个鬼马小狐女，一个外表冷酷内心重度妻控的吸血鬼，究竟是误会一场还是命定情缘？"
                },
                {
                    index:4,
                    top_title:"女巨人也要谈恋爱",
                    hits:"800万",
                    text:"身高180+的软妹恋上冰山总裁。谁说女追男隔层纱？女巨人的甜虐追爱史，扑倒冰山总裁不是梦！独特的设定，和其他充满套路的总裁漫不一样，看完第一话就停不下来！都市浪漫轻喜剧神作！",
                    url:"../../static/images/top_4.jpg",
                    top_main:"身高180+的软妹恋上冰山总裁。谁说女追男隔层纱？女巨人的甜虐追爱史，扑倒冰山总裁不是梦！独特的设定，和其他充满套路的总裁漫不一样，看完第一话就停不下来！都市浪漫轻喜剧神作！"
                },
                {
                    index:5,
                    top_title:"精怪实录",
                    hits:"788万",
                    text:"奇异事件！这些发生在你身边的故事，结局总是让人意想不到！中短篇悬疑故事合辑，喜欢反转刺激的你不要错过！",
                    url:"../../static/images/top_5.jpg",
                    top_main:"奇异事件！这些发生在你身边的故事，结局总是让人意想不到！中短篇悬疑故事合辑，喜欢反转刺激的你不要错过！"
                },
                {
                    index:6,
                    top_title:"我男票是锦衣卫",
                    hits:"700万",
                    text:"人气古风穿越巨制，俏皮少女与傲娇锦衣卫的甜虐之恋.。上天注定的七世情缘，他转世轮回只为和她再次相遇，她追随他穿越千年……画风超级赞的古风恋爱！",
                    url:"../../static/images/top_6.jpg",
                    top_main:"人气古风穿越巨制，俏皮少女与傲娇锦衣卫的甜虐之恋.。上天注定的七世情缘，他转世轮回只为和她再次相遇，她追随他穿越千年……画风超级赞的古风恋爱！"
                },
                {
                    index:7,
                    top_title:"零分偶像",
                    hits:"699万",
                    text:"恋爱类总榜热度第一名少女漫！当红人气鲜肉被曝毕业证做假仅考零分，回大学重修遇见贫穷土鳖学霸女，地位不对等的恋爱会有结果么？超强剧情，快来体验最心动，最浪漫，最苏最撩的爱情！！",
                    url:"../../static/images/top_7.jpg",
                    top_main:"恋爱类总榜热度第一名少女漫！当红人气鲜肉被曝毕业证做假仅考零分，回大学重修遇见贫穷土鳖学霸女，地位不对等的恋爱会有结果么？超强剧情，快来体验最心动，最浪漫，最苏最撩的爱情！！"
                },
                {
                    index:8,
                    top_title:"DOLO命运胶囊",
                    hits:"688万",
                    text:"不够漂亮也不够聪明，真的只能做最底端的人吗？如果有一种胶囊，能让你逆袭命运，你愿意付出最珍贵的东西去交换它吗？",
                    url:"../../static/images/top_8.jpg",
                    top_main:"不够漂亮也不够聪明，真的只能做最底端的人吗？如果有一种胶囊，能让你逆袭命运，你愿意付出最珍贵的东西去交换它吗？"
                },
            ],
        }
    }
}
</script>
<style>
    .center_box{
        width:100%;
        height:100%;
        /* border: 1px solid red; */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .center_box_left{
        width:75%;
        height:100%;
        /* border:1px solid blue; */
    }
    .center_box_right{
        width:24%;
        height:100%;
        /* border:1px solid blue; */
    }
    .center_top{
        width:100%;
        height:100%;
        /* border:1px solid red; */
        display: flex;
        flex-direction: column;
    }
    .center_top_nav{
        width:100%;
        height:8%;
        /* border:1px solid blue; */
        display: flex;
        align-items: center;
    }
    .center_top_nav>p{
        width:10%;
        height:100%;
        margin-left: 1%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .top_before,.top_before2,.top_before3{
        color: black;
        font-size: 1.5rem;
    }
    .top_before1,.top_after1,.top_after2,.top_after3{
        border:2px solid #00b7ee;
        box-sizing: border-box;
        border-radius: 10px 10px 0 0;
        color: #00b7ee;
        font-size: 1.5rem;
    }
    .center_top_main{
        width:100%;
        height:92%;
        /* border:1px solid rgb(40, 40, 90); */
        display: flex;
        justify-content: space-between;
    }
    .top_main_left{
        width:100%;
        height:100%;
        border:2px solid #00b7ee;
        box-sizing: border-box;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .top_main_left>div{
        width:100%;
        height:100%;
    }

    #center_top_right{
        width:100%;
        height:100%;
        /* border:1px solid #00b7c4; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #top_right_title{
        width:100%;
        height:8%;
        /* border:1px solid blue; */
        display: flex;
        align-items: center;
    }
    #top_right_main{
        width:100%;
        height:84%;
        /* border:1px solid rgb(24, 24, 56); */
    }
    #top_right_footer>a{
        width:100%;
        height:98%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #top_right_footer{
        width:100%;
        height:8%;
        /* border:1px solid rgb(27, 190, 109);     */
    }
</style>