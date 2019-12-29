<template>
    <div class="login_box">
        <div class="login">
            <div class="logo" >
                <div>{{img}}</div>
                <div>{{name}}</div>
            </div>
            <div class="main_box" >
                <div class="form">
                    <div class="main" >
                        <div>{{mains[0].text_1}}</div>
                        <input type="text" :placeholder="mains[0].text_2" v-model="username">
                    </div>
                    <div class="main">
                        <div>{{mains[1].text_1}}</div>
                        <input type="password" :placeholder="mains[1].text_2"  v-model="password">
                    </div>
                    <p> 
                        <span>
                            <input type="checkbox" checked="checked" >
                            <label for="">记住我</label>
                        </span>
                         <a href="#">忘记密码？</a>
                    </p>
                    <div class="submit">
                        <a @click="login_success()">
                            <div>登录</div>
                        </a>
                    </div>
                    <p>
                        <span>还没有账号？</span>
                        <a href="/Register">立即注册</a>
                    </p>
                </div>
            </div>
        </div>
        <!-- 注册模块
        1.用户输入用户名及密码，调用接口
            1.1注册成功直接跳转登录页
        
        登录模块
        1.用户输入用户名及密码，调用接口
            1.1用户名未找到，提示用户：“用户名不存在”
            1.2用户名找到，但密码错误，提示用户：“密码输入错误”
            1.3用户名和密码都匹配，登录成功跳转主页，同时将用户名存为cookie
        2.加载主页获取cookie
            2.1cookie存在，显示用户名 -->
            
    </div>
</template>
<script>
export default {
    data(){
        return{
            img:"LOGO",
            name:"余心漫画",
            type:"text",
            username:"",
            password:"",
            nickname:"",
            Dates:"",
            isLogin:"",
            mains:[
                {
                    text_1:"账号:",
                    text_2:"请输入邮箱地址",
                },
                {
                    text_1:"密码:",
                    text_2:"请输入密码",
                },
            ]
        }
    },
    created(){
        this.getRouterDate();
        this.getDate();
    },
    methods:{
        getRouterDate(){
            this.username = this.$route.params.username;
            this.password = this.$route.params.password;
            this.nickname = this.$route.params.nickname;
            // console.log(this.nickname,this.password,this.username)
        },
        login_success(){
            this.$router.push({
                name:'Home',
                params: {
                    nickname: this.nickname,
                },
            })
        },
        getDate(){
            this.Dates = JSON.parse(sessionStorage.getItem('Date'));
            console.log(this.Dates);
            this.username = this.Dates.username;
            this.password = this.Dates.password;
            this.nickname = this.Dates.nickname;
            this.isLogin = this.Dates.isLogin;
        }
    }
}
</script>
<style scoped>
    .login_box{
        width:100%;
        height:830px;
        background-image: url("../../../static/images/login.jpg");
        background-attachment: fixed;
        background-size: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .login{
        width:30rem;
        height:35rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .logo{
        width:100%;
        height:10%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .logo>div{
        width:30%;
        font-size: 2rem;
        color: white;
    }
    .main_box{
        width:100%;
        height:88%;
        border-radius: 10px;
        background-color:rgba(107, 105, 105, 0);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .form{
        width:90%;
        height:90%;
        /* border:1px solid black; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:space-between;
    }
    .form>div{
        border-bottom:1px solid rgb(241, 240, 240);
        width:80%;
        height:15%;
        color: white;
    }
    .main{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .main>div{
        font-size: 1.6rem;
        width: 20%;
        color: white;
    }
    .main>input{
        width:78%;
        height:70%;
        border: none;
        background-color: rgb(255, 255, 255,0);
        color:white;
        outline: none;
    }
    input::-webkit-input-placeholder {
        color: white;
    }
    .form>p{
        color: white;
        /* border:1px solid rgb(131, 128, 103); */
        width:80%;
        height:15%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.3rem;
    }
    .form>p>a{
        font-size: 1.1rem;
        color: rgb(238, 253, 18);
    }
    .submit>a{
        /* border:1px solid rgb(243, 68, 15); */
        height:80%;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(220, 223, 60);
    }
    .submit>a>div{
        font-size: 1.4rem;
        color: rgb(19, 10, 15);
    }
</style>