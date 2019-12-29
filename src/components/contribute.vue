<template>
    <div class="LBT_box">
        <div>
             <!-- <el-carousel class="recommend_center_box">
                <el-carousel-item v-for="(item,index) in recomment_center_photo" class="LBT_main" :key="index">
                    <a href="#"><img class="recommend_center_img" v-bind:src=item.url alt=""> </a> 
                </el-carousel-item>
            </el-carousel> -->
                    <input type="submit"  @click="button()" value="提交">
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
     data() {
        return {
            class_name:"",
            meet_title:"",
            username:"shshsh",
            startDate:"",
            endDate:"",
            mails:"",
            recomment_center_photo:[
                { url:"../../static/images/LBT1.jpg"},
                { url:"../../static/images/LBT2.jpg"},
                { url:"../../static/images/LBT3.jpg"},
                { url:"../../static/images/LBT4.jpg"},
                { url:"../../static/images/LBT5.jpg"},
            ]
        }
    },
    methods:{
        // button(){
        //     axios({
        //         method:"get",
        //         url:"/api/user/testJson",
        //         data:{
        //             username: this.username,
        //         },
        //     }).then(res=>{
        //         console.log(res);
        //     })
        // }
    },
}
</script>
<style scoped>
    .LBT_box{
        width: 100%;
        height:40rem;
        border:1px solid red;
        /* background-color: rgb(31, 3, 66); */
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden; 
    }
    .LBT_box>div{
        width:90%;
        height:80%;
        border:1px solid white;
        margin-right: 10px;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>