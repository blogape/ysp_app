<template>
<!-- 烹饪记录 -->
    <div class="cookiehistory">
    <Header>烹饪记录</Header>
    <div class="content">
        <div class="list" v-for='(item,key) in recipedata.list' :key='key' >
        <Recipetemplate :data='item'></Recipetemplate>
        <!-- 删除 -->
        <div class="delete">
            <span @click='handleDelete(item.primaryId)'>删除</span>
        </div>
    </div>
    </div>
      <NotFind v-if='isnot'>收藏夹空空一片 o(╥﹏╥)o </NotFind>
    </div>
</template>

<script>
import Header from "../../components/Header/";
import Recipetemplate from "../../components/Recipetemplate/";
import { getCookieHistory, deletCookieData } from "../../services/api.js";
import { Dialog, Toast } from "vant";
import NotFind from "../../components/NotFind/";
import { handleUserData } from "../../utils/appapi.js";

export default {
  data() {
    return {
      recipedata: "",
      userToken: "",
      isnot: false
    };
  },
  created(){
    
    handleUserData();
    setTimeout(()=>{
  this.userToken = JSON.parse(localStorage.getItem("userData"));
    this.getcolledata();
    },100)
  
  },
  components: {
    Header,
    Recipetemplate,
    NotFind
  },
  mounted() {
  
  },
  methods: {
    //   获取烹饪记录
    async getcolledata() {
      let colldata = await getCookieHistory(this.userToken.token);
      this.recipedata = colldata.data;
      if (this.recipedata.list.length < 1) {
        this.isnot = true;
      }
    },
    // 删除收藏记录
    handleDelete(id) {
      Dialog.confirm({
        title: "提示",
        message: "你确定要删除该烹饪记录吗？"
      })
        .then(async () => {
          let deletecolldata = await deletCookieData(id, this.userToken.token);
          if (deletecolldata.code == 0) {
            Toast("您删除成功了哟 o(╥﹏╥)o~");
            this.getcolledata();
          }else if(deletecolldata.code == 9501){
            Toast("该食谱正在烹饪中，不能删除喔！(¯﹃¯)");

          }else if(deletecolldata.code == 1){
            Toast("您删除失败了哟 o(╥﹏╥)o~");
          }
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<style lang='less' scoped>
.cookiehistory {
  .content {
    padding: 0 1rem;
  }
  .list {
    background-color: #fff;
    margin-top: 1rem;
    .delete {
      height: 5rem;
      margin-top: -0.2rem;
      border-top: 0.5px solid #ccc;
      width: 100%;
      span {
        border-radius: 2rem;
        height: 3rem;
        line-height: 3rem;
        font-size: 1.4rem;
        margin-top: 1rem;
        float: right;
        color: #fe3824;
        margin-right: 1rem;
        display: inline-block;
        width: 8rem;
        border: 1px solid #fe3824;
        text-align: center;
      }
    }
  }
}
</style>
