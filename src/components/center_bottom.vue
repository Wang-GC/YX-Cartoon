<template>
    <div class="center_bottom" id="center_bottom_box">
        <div class="center_bottom_nav">
            <p></p>
            <p :class="active1" @click="click_nav1">{{nav_1}}</p>
            <p :class="active2" @click="click_nav2">{{nav_2}}</p>
            <p :class="active3" @click="click_nav3">{{nav_3}}</p>
        </div>
        <div class="center_bottom_main">
            <div class="main_left">
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
            <div class="main_right"></div>
        </div>
    </div>
</template>
<script>
import Tabs_1 from './Tabs_1'
import Tabs_2 from './Tabs_2'
import Tabs_3 from './Tabs_3'

export default {
    components:{
        Tabs_1,
        Tabs_2,
        Tabs_3,
    },
    methods:{
        click_nav1(){
            this.active1='after1';
            this.active2='before2';
            this.active3='before3';
            this.$refs.nav1.style.display = 'block';
            this.$refs.nav2.style.display = 'none';
            this.$refs.nav3.style.display = 'none';
        },
        click_nav2(){
            this.active1='before';
            this.active2='after2';
            this.active3='before3';
            this.$refs.nav1.style.display = 'none';
            this.$refs.nav2.style.display = 'block';
            this.$refs.nav3.style.display = 'none';
        },
        click_nav3(){
            this.active1='before';
            this.active2='before2';
            this.active3='after3';
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
            active1:'before1',
            active2:'before2',
            active3:'before3',
        }
    }
}
</script>
<style>
    .center_bottom{
        width:100%;
        height:100%;
        /* border:1px solid red; */
        display: flex;
        flex-direction: column;
    }
    .center_bottom_nav{
        width:75%;
        height:8%;
        /* border:1px solid blue; */
        display: flex;
        align-items: center;
    }
    .center_bottom_nav>p{
        width:10%;
        height:100%;
        margin-left: 1%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .before,.before2,.before3{
        color: black;
        font-size: 1.5rem;
    }
    .before1,.after1,.after2,.after3{
        border:2px solid #f39800;
        box-sizing: border-box;
        border-radius: 10px 10px 0 0;
        color: #f39800;
        font-size: 1.5rem;
    }
    .center_bottom_main{
        width:100%;
        height:92%;
        /* border:1px solid rgb(40, 40, 90); */
        display: flex;
        justify-content: space-between;
    }
    .main_left{
        width:75%;
        height:100%;
        border:2px solid #f39800;
        box-sizing: border-box;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .main_left>div{
        width:100%;
        height:100%;
        margin: 0 auto;
        /* display: flex;
        align-items: center;
        justify-content: center;
        border:1px solid red; */
    }
    .main_right{
        width:24%;
        height:100%;
        border-radius: 1rem;
        border:2px solid #f39800;
        box-sizing: border-box;
    }
</style>