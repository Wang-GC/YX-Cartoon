<template>
    <div id="header_LBT">
        <div id="header_LBT_box">
            <el-carousel class="recommend_center_box" :height=height>
                <el-carousel-item v-for="(item,index) in recomment_center_photo" :key="index">
                    <a href="#"><img class="recommend_center_img" v-bind:src=item.url alt=""> </a> 
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
     data() {
        return {
            width:"",
            width_:"",
            height:"",
            recomment_center_photo:[
                { url:"../../static/images/LBT1.jpg"},
                { url:"../../static/images/LBT2.jpg"},
                { url:"../../static/images/LBT3.jpg"},
                { url:"../../static/images/LBT4.jpg"},
                { url:"../../static/images/LBT5.jpg"},
            ]
        }
    },
    created(){
        this.get();
    },
    mounted(){
        this.get();
    },
    methods:{
       get(){
            this.width_=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            this.height=this.width_*0.26+"px";
            window.onresize = ()=>{
                console.log("LBT")
                this.width_=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                this.height=this.width_*0.26+"px";
                console.log(this.height)
            }
       }
    }
}
</script>

<style >
    #header_LBT{
        width:100%;
        border-radius: 10PX;
        background-color: white;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    #header_LBT_box{
        width:100%;
        border-radius: 10px;
        overflow: hidden;
    }
    .recommend_center_img{
        width:100%;
    }
    .recommend_center_box{
        width:100%;
    }
    .el-carousel__container{
        width:100%;
        clear: both;
        overflow: hidden;
        zoom: 1;
    }
    .el-carousel__arrow{
        width:5rem;
        height:5rem;
        font-size: 2rem;
        background-color: rgba(87, 90, 90, 0.603);
    }
    .el-carousel__container {
        height:none;
    }
</style>