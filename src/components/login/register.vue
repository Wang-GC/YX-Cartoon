<template>
  <div class="register_box">
    <div class="register">
      <div class="logo">
        <div>{{img}}</div>
        <div>{{name}}</div>
      </div>
      <div class="title">注册</div>
      <div class="main_box">
        <form action style="margin-top:2%">
          <div>{{mains[0].text_1}}</div>
          <input
            type="text"
            v-model="username"
            @blur="switch_email()"
            :placeholder="mains[0].text_2"
          />
        </form>
        <p v-bind:class="check_email">{{email_}}</p>
        <span>{{validation}}</span>
        <form action class="validation">
          <input type="text" v-model="qqcode" :placeholder="mains[1].text_2" />
          <div>
            <a href="javascript:;" @click="email()">{{mains[1].text_1}}</a>
          </div>
        </form>
        <form action>
          <div>{{mains[2].text_1}}</div>
          <input
            type="password"
            maxlength="15"
            minlength="8"
            @blur="switch_psw()"
            :placeholder="mains[2].text_2"
            v-model="password"
          />
        </form>
        <p v-bind:class="check_psw">{{password_}}</p>
        <form action>
          <input
            type="password"
            maxlength="15"
            minlength="8"
            @blur="switch_repsw()"
            :placeholder="mains[3].text"
            v-model="re_password"
          />
        </form>
        <p v-bind:class="check_repsw">{{repassword_}}</p>
        <form action>
          <div>{{mains[4].text_1}}</div>
          <input
            type="text"
            @blur="switch_name()"
            :placeholder="mains[4].text_2"
            v-model="nickname"
          />
        </form>
        <p v-bind:class="check_name">{{nickname_}}</p>
        <span class="submit">
          <a href="javascript:;" @click="register()">注册</a>
        </span>
        <span class="login" style="margin-bottom:2%">
          <div>{{mains[5].text_1}}</div>
          <a href="javascript:;">{{mains[5].text_2}}</a>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      img: "LOGO",
      name: "余心漫画",
      validation: "验证条",
      username: "",
      password: "",
      re_password: "",
      nickname: "",
      email_: "",
      qqcode: "",
      password_: "",
      repassword_: "",
      nickname_: "",
      check_email: "check_true",
      check_psw: "check_true",
      check_repsw: "check_true",
      check_name: "check_true",
      qqcode: "",
      isLogin: "",
      Date:"",
      mains: [
        {
          text_1: "账号:",
          text_2: "请输入邮箱"
        },
        {
          text_1: "免费获取验证码",
          text_2: "请输入验证码"
        },
        {
          text_1: "密码:",
          text_2: "8-15位数字字母组成"
        },
        {
          text: "请重新输入密码"
        },
        {
          text_1: "昵称:",
          text_2: "请输入名字"
        },
        {
          text_1: "已有账号？",
          text_2: "立即登录"
        }
      ]
    };
  },
  created() {
  },
  methods: {
    router_login() {
      console.log("sfasf");
      if (this.isLogin == 1) {
        alert("注册成功");
        setTimeout(() => {
          this.$router.push({
            name: "Login",
            params: {
              username: this.username,
              password: this.password,
              nickname: this.nickname,
            }
          });
        }, 2000);
      }
    },
    register() {
      axios({
        method: "post",
        url: "/api/user/register",
        data: qs.stringify({
          email: this.username,
          password: this.password,
          name: this.nickname,
          qqcode: this.qqcode
        }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }).then(res => {
        console.log(res);
      });
      this.isLogin = "1";
      console.log(this.isLogin);
      if(this.isLogin == 1){
          this.router_login();
      }
      this.Date={
        username: this.username,
        password: this.password,
        nickname: this.nickname,
        isLogin:  this.isLogin,
      };
      sessionStorage.setItem('Date',JSON.stringify(this.Date))
    },
    email() {
      axios({
        method: "post",
        url: "/api/cartoon/public/register",
        data: qs.stringify({
          email: this.username
        }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }).then(res => {
        console.log(res);
      });
    },
    switch_email() {
      let email_standard = /^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT)$/;
      let username = this.username;
      if (email_standard.test(username)) {
        this.email_ = "邮箱地址可用";
        this.check_email = "check_true";
      } else {
        this.email_ = "请输入合法邮箱地址";
        this.check_email = "check_false";
      }
    },
    switch_psw() {
      let password_standard = /^(?!\d+$)(?![a-zA-Z]+$)[\da-zA-Z]+$/;
      let password = this.password;
      if (password_standard.test(password) && password.length >= 8) {
        console.log("sfafa");
        this.password_ = "密码可用";
        this.check_psw = "check_true";
      } else {
        this.password_ = "请输入8-15位数字字母密码";
        this.check_psw = "check_false";
      }
    },
    switch_repsw() {
      let password = this.password;
      let re_password = this.re_password;
      if (password === re_password && re_password !== " ") {
        console.log("sfafa");
        this.repassword_ = "√";
        this.check_repsw = "check_true";
      } else {
        this.repassword_ = "密码输入不一致";
        this.check_repsw = "check_false";
      }
    },
    switch_name() {
      // let password = this.password;
      // let re_password = this.re_password;
      // if(password === re_password ){
      //     console.log("sfafa")
      //     this.repassword_='√';
      //     this.check_repsw="check_true";
      // }else{
      //     this.repassword_='密码输入不一致';
      //     this.check_repsw="check_false";
      // }
    }
  }
};
</script>
<style scoped>
.register_box {
  width: 100%;
  height: 830px;
  background-image: url("../../../static/images/login.jpg");
  background-attachment: fixed;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register {
  /* border:1px solid red; */
  width: 30rem;
  height: 45rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 2%;
}
.title {
  font-size: 2rem;
  color: rgb(252, 241, 97);
  margin-bottom: 2%;
}
.logo {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo > div {
  width: 30%;
  font-size: 2rem;
  color: white;
}
.main_box {
  width: 100%;
  height: 88%;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.main_box > form {
  width: 80%;
  height: 10%;
  border-bottom: 1px solid rgb(207, 207, 207);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2%;
}
.check_true {
  color: green;
}
.check_false {
  color: red;
}
.main_box > span {
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main_box > form {
  font-size: 1.5rem;
}
.main_box > form > input {
  width: 80%;
  height: 80%;
  outline: none;
  border: none;
}
.main_box > span {
  width: 80%;
  height: 10%;
  /* border: 1px solid rgb(226, 50, 50); */
}
.validation > div {
  width: 60%;
}
.validation > div > a {
  font-size: 1.3rem;
  color: rgb(41, 188, 247);
}
.submit {
  display: flex;
  align-items: center;
  justify-content: center;
}
.submit > a {
  border-radius: 1.5rem;
  height: 80%;
  width: 100%;
  background-color: rgb(252, 241, 97);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #000;
}
.login > div {
  font-size: 1.2rem;
}
.login > a {
  font-size: 1.2rem;
  color: rgb(250, 99, 79);
}
</style>