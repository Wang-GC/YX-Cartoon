<template>
  <div id="nav_header">
    <div id="nav_main">
      <div id="nav_main_left">
        <div class="main_left_logo" style="width:10%">
          <!-- <img src="../../static/images/LOGO.jpg" alt /> -->
          <p>LOGO</p>
        </div>
        <div
          v-for="(menu,index) in menus "
          :key="index"
          @mousemove="over(index)"
          @mouseout="out(index)"
        >
          <p>
            <router-link :class="menu.show ?  'after' :'active'" :to="menu.path">{{menu.text}}</router-link>
          </p>
        </div>
        <span class="main_search">
          <input type="text" v-model="val" />
          <button @click="get_val()">
            <i class="el-icon-search"></i>
          </button>
        </span>
      </div>
      <div id="nav_main_right" ref="not_login" style="display:block">
        <div class="login_box">
          <div
            id="login_bar"
            v-for="(login,index) in logins "
            :key="index"
            @mousemove="over_1(index)"
            @mouseout="out_1(index)"
          >
            <div></div>
            <a :class="login.show ?  'before_1' :'after_1'" :href="login.path">
              <router-link target="_blank" :to="login.path">{{login.text}}</router-link>
            </a>
          </div>
        </div>
      </div>

      <div class="login_success_box" ref="isLogin" style="display:none">
        <div class="login_success">
          <div class="author">
            <p>{{nickname}}</p>
          </div>
          <div class="bookcase">
            <el-button class="directory" @click="drawer_1 = true" type="primary">书架</el-button>
          </div>
          <div class="reading_record">
            <el-button class="directory" @click="drawer_2 = true" type="primary">阅读记录</el-button>
          </div>

          <el-drawer title="书架" :visible.sync="drawer_1" :direction="direction_1">
            <div class="bookcase_box">
              <div class="bookcase_menu">
                <span></span>
              </div>
              <div class="bookcase_main" ref="bookcase">
                <div v-for="(main,index) in mains" :key="index" class="main_box">
                  <router-link
                    target="_blank"
                    :to="{name:'Catalogue',query:{title:main.title,author:main.title,text:main.text}}"
                  >
                    <div class="main_">
                      <div
                        class="main_img"
                        :style="{'backgroundImage':'url('+main.img+')','background-size':'100%'}"
                      ></div>
                      <div class="main_text">
                        <span class="main_title">
                          <p>{{index+1}}</p>
                          {{main.title}}
                        </span>
                        <span class="author">{{main.author}}</span>
                        <p>{{main.text}}</p>
                      </div>
                    </div>
                  </router-link>
                  <span>×</span>
                </div>
              </div>
            </div>
          </el-drawer>

          <el-drawer title="浏览记录" :visible.sync="drawer_2" :direction="direction_2">
            <div class="reading_record_box">
              <div class="reading_record_main">
                <div class="cartoon_img">
                  <img src alt />
                </div>
                <div class="cartoon_title"></div>
              </div>
            </div>
          </el-drawer>
        </div>
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
      drawer_1: false,
      drawer_2: false,
      direction_1: "ltr",
      direction_2: "rtl",
      Dates: "",
      username: "",
      password: "",
      nickname: "",
      isLogin: "",
      height:"",
      val:"",
      menus: [
        {
          path: "/Home",
          text: "首页",
          show: true
        },
        {
          path: "/Classify",
          text: "分类",
          show: true
        },
        {
          path: "/Ranking",
          text: "排行榜",
          show: true
        },
        {
          path: "/Contribute",
          text: "我要投稿",
          show: true
        }
      ],

      logins: [
        {
          path: "/Login",
          text: "登录",
          show: true
        },
        {
          path: "/Register",
          text: "注册",
          show: true
        }
      ],
      mains: [
        {
          img: "../../../static/images/ranking_1.jpg",
          title: "谷围南亭",
          author: "墨飞",
          text:
            "少年高影无意间入住一破落城中村的旅店，却意外卷入了一场百年浩劫的神秘纷争，" +
            "世界的真相第一次在他眼前揭开。龙脉风水一说，古已有之，山河化形为龙，还需点睛之笔，诡异的风水秘术，神秘的镇龙神钉，奇人异事层出不穷，高影的人生也随之改写！！"
        },
        {
          img: "../../../static/images/ranking_2.jpg",
          title: "谷围南亭",
          author: "墨飞",
          text:
            "少年高影无意间入住一破落城中村的旅店，却意外卷入了一场百年浩劫的神秘纷争，" +
            "世界的真相第一次在他眼前揭开。龙脉风水一说，古已有之，山河化形为龙，还需点睛之笔，诡异的风水秘术，神秘的镇龙神钉，奇人异事层出不穷，高影的人生也随之改写！！"
        },
        {
          img: "../../../static/images/ranking_3.jpg",
          title: "谷围南亭",
          author: "墨飞",
          text:
            "少年高影无意间入住一破落城中村的旅店，却意外卷入了一场百年浩劫的神秘纷争，" +
            "世界的真相第一次在他眼前揭开。龙脉风水一说，古已有之，山河化形为龙，还需点睛之笔，诡异的风水秘术，神秘的镇龙神钉，奇人异事层出不穷，高影的人生也随之改写！！"
        },
        {
          img: "../../../static/images/ranking_4.jpg",
          title: "谷围南亭",
          author: "墨飞",
          text:
            "少年高影无意间入住一破落城中村的旅店，却意外卷入了一场百年浩劫的神秘纷争，" +
            "世界的真相第一次在他眼前揭开。龙脉风水一说，古已有之，山河化形为龙，还需点睛之笔，诡异的风水秘术，神秘的镇龙神钉，奇人异事层出不穷，高影的人生也随之改写！！"
        },
        {
          img: "../../../static/images/ranking_5.jpg",
          title: "谷围南亭",
          author: "墨飞",
          text:
            "少年高影无意间入住一破落城中村的旅店，却意外卷入了一场百年浩劫的神秘纷争，" +
            "世界的真相第一次在他眼前揭开。龙脉风水一说，古已有之，山河化形为龙，还需点睛之笔，诡异的风水秘术，神秘的镇龙神钉，奇人异事层出不穷，高影的人生也随之改写！！"
        }
      ]
    };
  },
  created() {
    this.getDate();
    
  },
  mounted() {
    this.if_login();
    this.bookcase();
  },
  methods: {
    over(index) {
      this.menus[index].show = false;
    },
    out(index) {
      this.menus[index].show = true;
    },

    over_1(index) {
      this.logins[index].show = false;
    },
    out_1(index) {
      this.logins[index].show = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    getDate() {
      this.Dates = JSON.parse(sessionStorage.getItem("Date"));
      console.log(this.Dates);
      this.username = this.Dates.username;
      this.password = this.Dates.password;
      this.nickname = this.Dates.nickname;
      this.isLogin = this.Dates.isLogin;
    },
    if_login() {
      console.log("ok?");
      if (this.isLogin == 1) {
        console.log(this.$refs.isLogin);
        this.$refs.isLogin.style.display = "block";
        this.$refs.not_login.style.display = "none";
      }
    },
    bookcase(){
      let height_=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      this.height=height_+"px";
      window.onresize = ()=>{
                let height_=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                this.height=height_+"px";
                console.log(this.height)
            }
      console.log(this.height,"?");
      this.$refs.bookcase.style.width = this.height;
      console.log("this.$refs.bookcase.style.height");
    },
    get_val(){
      axios({
        method: "post",
        url: "/ap_2/solr-jd/list2.action",
        data: qs.stringify({
          queryString: this.val,
          catalog_name:"",
          price:"",
        }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style scoped>
.active {
  color: #00b7ee;
}
.after {
  color: black;
}
#nav_header {
  width: 100%;
  height: 4rem;
  background: transparent;
  background-color: rgb(255, 255, 255, 0.8);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
#nav_main {
  width: 85%;
  height: 100%;
  /* border:1px solid blue; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  z-index: 2;
}
#nav_main_left {
  /* border:1px solid red; */
  width: 83%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
#nav_main_left > div {
  width: 14%;
  /* border:1px solid blue; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#nav_main_left > div > p {
  font-size: 1.4rem;
  display: block;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
/* #nav_main_left>div>p>a{
        color: black;
    } */
#nav_main_right {
  /* border:1px solid rgb(88, 67, 67); */
  width: 17%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.login_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.login_success_box {
  width: 17%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.login_success {
  border: 1px solid rgb(88, 67, 67);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.login_success > div {
  border: 1px solid red;
  width: 30%;
  height: 80%;
  overflow: hidden;
}
.directory {
  background-color: rgb(255, 255, 255, 0.3);
  border: none;
}
.el-button--primary {
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.main_search {
  /* border: 1px solid #42c1e7; */
  width: 34%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.main_search > input {
  border: 1px solid #00b7ee;
  border-radius: 2rem 0 0 2rem;
  border-right: none;
  width: 85%;
  height: 70%;
  padding-left: 4%;
  outline: none;
  box-sizing: border-box;
}
.main_search > button {
  border: 1px solid #00b7ee;
  border-radius: 0 2rem 2rem 0;
  background-color: white;
  border-left: none;
  width: 10%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
}
.el-icon-search {
  color: #00b7ee;
  font-size: 2rem;
}
#login_bar {
  /* border:1px solid #7e3232; */
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
#login_bar > div {
  /* width:1px; */
  height: 30%;
  border: 1px solid rgb(59, 59, 59);
  opacity: 0.8;
  margin-left: 5%;
  margin-right: 5%;
}
.before_1 {
  border: none;
  background-color: rgb(255, 255, 255, 0.2);
  font-size: 1.4rem;
  width: 100%;
  height: 70%;
  margin-left: 5%;
}
.after_1 {
  border: 1px solid black;
  border-radius: 2rem;
  background-color: rgb(255, 255, 255);
  font-size: 1.4rem;
  width: 80%;
  height: 70%;
  margin-left: 5%;
}
#login_bar > a {
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
#login_bar > a > a {
  color: black;
}
.main_left_logo {
  font-size: 2rem;
  width: 2rem;
  overflow: hidden;
}
.main_left_logo >p {
  color: black;
  font-size: 3rem;
  /* font-weight: bold; */
}

/* *****书架**** */
.bookcase_main {
  width: 100%;
  height:700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* border:1px solid red; */
  overflow: scroll;
}
.bookcase_main > div {
  width: 80%;
  height: 36rem;
  margin-bottom: 5%;
  /* border:1px solid red; */
}
.main_box {
  display: flex;
}
.main_box > span {
  cursor: pointer;
}
.main_ {
  width: 100%;
  height: 100%;
  /* border:1px solid red; */
  display: flex;
  justify-content: space-between;
}
.main_ > div {
  width: 48%;
  /* border:1px solid red; */
}
.main_img {
  border-radius: 10px;
}
.main_text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main_title {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: black;
}
.author {
  font-size: 1.5rem;
  color: rgb(14, 6, 3);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
}
.main_text > span > p {
  color: rgb(251, 10, 10);
  font-size: 1.4rem;
  width: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: rgb(255, 252, 87);
  display: flex;
  justify-content: center;
  align-items: center;
}
.main_text > p {
  color: rgb(134, 134, 133);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
}
</style>