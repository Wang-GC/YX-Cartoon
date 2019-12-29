<template>
     <div :id="ranking" @mouseover=" mousemove_now " @mouseout=" mousemove_after" >      
            <div id="top_mian"  >
                <div id="top_before" ref="mousemove_time"  >
                    <div class="top_before_box">

                        <div class="top_before_num" ><p>{{index+1}}</p></div>

                        <div class="top_before_main">
                             <div class="top_before_title" >
                                <p>{{top.top_title}}</p>
                                <span><a href="#">{{top.hits}}</a></span>
                            </div>
                            <div class="top_before_text">
                                {{top.text}}
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div id="top_after" ref="mousemove_out" style="display:none" >
                    <div class="top_after_box">
                        <div class="top_after_num" ><p>{{index+1}}</p></div>

                        <div class="top_after_main">
                            <div class="top_after_img">
                                <img v-bind:src=top.url alt="">
                            </div>
                            <div class="top_after_main_main">
                                <div class="top_after_title">
                                    <p>{{top.top_title}}</p>
                                </div>
                                <div class="top_after_text">
                                    {{top.top_main}}
                                </div>
                                <div class="top_after_icon">1024万+</div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
    </div>
</template>
<script>
export default {
    props:{
        top:Object,
        index:Number
    },
    data(){
        return {
        ranking:'ranking_before',
        show:true,        
        } 
    },
    methods:{
        mousemove_now(){
            console.log("hhhh");
            this.ranking='ranking_after';
            this.$refs.mousemove_time.style.display = 'none';
            this.$refs.mousemove_out.style.display = 'block';
        },
        mousemove_after(){
            console.log("hahaha");
            this.ranking='ranking_before';
            this.$refs.mousemove_time.style.display = 'block';
            this.$refs.mousemove_out.style.display = 'none';
        },
        top_default(){
            if(index == 0){
                this.$refs.mousemove_time.style.display = 'none';
                this.$refs.mousemove_out.style.display = 'block';
            }
        }
    },
    
    
}
</script>
<style>
    .top_before_box{
        width:100%;
        height:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .top_before_num{
        width:8%;
        height:100%;
        /* border:1px solid rgb(0, 255, 55); */
        display: flex;
        flex-direction:column;
        justify-content: flex-start;
        align-items: center;
    }
    .top_before_num>p{
        width:90%;
        font-size: 1.5rem;
        border-radius: 5px;
        background-color: rgb(75, 219, 245);
        display: flex;
        flex-direction:column;
        justify-content: flex-start;
        align-items: center;
        color: white;
    }
    .top_before_main{
        width:90%;
        height:100%;
        /* border:1px solid rgb(75, 50, 50); */
        display: flex;
        flex-direction:column;
        justify-content: space-between;
        align-items: center;
    }
    .top_before_title{
        width:100%;
        height:40%;
        /* border:1px solid rgb(121, 187, 14); */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .top_before_title>p{
        font-size: 1.5rem;
        font-weight: bold;
        color: black;
    }
    .top_before_title>p>span>a{
        font-size: 1rem;
        color: #747171;
    }
    .top_before_text{
        width:100%;
        height:50%;
        /* border:1px solid rgb(216, 102, 131); */
        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
        font-size: 0.8rem;       
    }
    .top_after_box{
        width:100%;
        height:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .top_after_num{
        width:8%;
        height:100%;
        /* border:1px solid rgb(0, 255, 55); */
        display: flex;
        flex-direction:column;
        justify-content: flex-start;
        align-items: center;
    }
    .top_after_num>p{
        width:90%;
        font-size: 2rem;
        border-radius: 5px;
        background-color: rgb(16, 177, 252);
        display: flex;
        flex-direction:column;
        justify-content: flex-start;
        align-items: center;
        color: white;
    }
    .top_after_main{
        width:90%;
        height:100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .top_after_img{
        width:34%;
        height:90%;
        border-radius: 1rem;
        overflow: hidden;
    }
    .top_after_img>img{
        width: 100%;
    }
    .top_after_main_main{
        width:65%;
        height:100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        /* border:1px solid red; */
    }
    .top_after_title{
        width:100%;
        height:30%;
    }
    .top_after_title>p{
        font-size: 2rem;
        font-weight: bold;
    }
    .top_after_text{
        width:100%;
        height:35%;
        /* border:1px solid red; */
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .top_after_text>p{
        font-size: 0.5rem;
        color: #333131;
    }
    .top_after_icon{
        width:100%;
        height:20%;
        font-size: 0.5rem;
        color: #9e9e9e;
    }
    #top_mian{
        width:100%;
        height:100%;
        /* border:1px solid rgb(61, 61, 88); */
        box-sizing: border-box;
    }
    #top_before{
        width:100%;
        height:100%;
    }
    #top_after{
        width:100%;
        height:100%;
        overflow: hidden;
    }
     #ranking_before{
        width:100%;
        /* border:1px solid red; */
        height:10%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
    }
    #ranking_after{
        width:100%;
        /* border:1px solid blue; */
        height:20%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    #top_right_title>p{
        font-size: 2rem;
    }
    #top_right_title>p>a{
        color: #000;
        font-weight: bold;
    }

    #top_right_footer>a>div{
        border: none;
        width:100%;
        height:80%;
        border-radius: 4rem;
        background-color: #9e9e9e;
        color:white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
    }
</style>