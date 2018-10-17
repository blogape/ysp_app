<template>  
 <!-- 食谱详情 -->
    <div class="product">
        <Header>{{this.title}}</Header>
        <!-- banner图 -->
        <div class="banner">
            <img :src="recipedata.coverimg"/>
        </div>
            <!-- 作者 -->
            <div class="author">
                <!-- 头像 -->
                <div class="head-portrait">
                    <img :src="userdata.headimg">
                </div>
                <!-- nikename -->
                <span class="name">{{userdata.nickname}}</span>
                <!-- 收藏 -->
                <div :class="{collection:isActive,'collec':hasError}" @click='handleCollection' collection>
                        <font>{{collecttext}} 
</font>
                </div>
            </div>
            <!-- 描述 -->
            <div class="describle">
                <!-- 标题 -->
                <div class="title">
                    {{recipedata.title}}
                </div>
                <!-- 难度 -->
                <div class="difficulty">
                    难度：{{difficultyView}}<font>制作时间：约{{recipedata.timeCost}}分钟左右</font>  
                </div>
                <!-- 描述 -->
                <div class="content">
                  {{recipedata.description}}
                </div>
            </div>
            <!-- 材料 -->
            <div class="material">
                <!-- 主料 -->
                <div class="main" v-show="ingredients.length>1">
                    <div class="title">
                    主料
                    </div>
                <div class="content">
                    <ul>
                        <li v-for='(items,key) in ingredients' :key='key'>{{items.ingredientName}} <font>{{items.numberUnit}}</font></li>
                    </ul>
                </div>
                </div>
                <!-- 配料 -->
                <div class="ingredients" v-show='material.length>1'>
                     <div class="title">
                    配料
                    </div>
                <div class="content">
                    <ul>
                        <li v-for='(items,key) in material' :key='key'>{{items.ingredientName}} <font>{{items.numberUnit}}</font></li>
                    </ul>
                </div>
                </div>
            </div>
            <!-- 烹饪步骤 -->
            <div class="cookiestep">
                <div class="content" v-for='(items,key) in recipedata.cookingSteps' :key='key'>
                    <div class="title">
                    {{items.title}}          
                     </div>
                    <ul>
                        <li v-for='(item,key) in items.cookingStepByTitle' :key='key'>
                            <div class="name">
                                步骤{{item.stepno}}
                            </div>
                            <div class="img">
                                <img :src="item.images"/>
                            </div>
                            <p>                            {{item.description}}
</p>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 小贴士 -->
            <div class="tips">
                <div class="title">
                小贴士
                </div>
                {{recipedata.tips}}
            </div>
            <!-- 支持设备 -->
            <div class="equipment">
                    <div class="title">
                        支持设备
                    </div>
                    <ul>
                        <li v-for='(item,key) in recipedata.recipeMacModelMids' :key='key'>{{item.macName}} {{item.iotMacModelId}}</li>                       
                    </ul>
            </div>
            <!-- 日期与浏览次数 -->
            <div class="datareading">
                  阅读 {{recipedata.cookiedCount}}      <font>{{recipedata.createTime}}</font>
            </div>
        <!-- 一键烹饪按钮 -->
        <div class="cookie_btn" @click='handleCookieBtn'>
                一键烹饪
        </div>
        <!-- 弹出层设备 -->
<van-popup v-model="show">
  <div class="equipment-popup">
      <div class="header">
请选择烹饪设备
      </div>
      <div class="content">
        <ul>
          <li v-for='(item,key) in equipmentdata' :key='key'>
            <router-link to='/steakcookie/1'>
              <img :src="item.image"/>
              <div class="container">
                   <!-- 名称 -->
                  <span>{{item.name}}</span>
                   <!-- 状态 -->
                  <span class='status'>{{item.status}}</span>
              </div>
          </router-link>
          </li>
         
        </ul>
      </div>
      <!-- 取消 -->
      <div class="footer" @click='handleCancel'>
          取消
      </div>
  </div>
</van-popup>
    </div>
</template>

<script>
import Header from "../../components/Header/";
import { product, recipeCollect, deleteCollect,searchEquipment} from "../../services/api.js";
import { handleUserData } from "../../utils/appapi.js";
import { Toast, Popup } from "vant";
export default {
  data() {
    return {
      title: "",
      recipedata: "",
      show: false,
      isActive: true,
      collecttext: "收藏",
      hasError: false,
      userdata: "",
      ingredients: "",
      material: "",
      difficulty: "",
      recipeId: "",
      iscollect: "",
      equipmentdata:'',
    };
  },
  components: {
    Header
  },
  created() {
    this.getRecipeData();
    this.recipeId = this.$route.params.id;
  },
  methods: {
    // 食谱详情数据
    async getRecipeData() {
      let token;
      // 调用获取用户数据
      let userData = JSON.parse(localStorage.getItem("userData"));
      if (!userData) {
        token == null;
      } else {
        token = userData.token;
      }
      let recipedata = await product(this.$route.params.id, token);
      // 食谱数据绑定
      this.recipedata = recipedata.data;
      this.iscollect = this.recipedata.iscollect;
      console.log(this.recipedata);
      this.title =
        this.recipedata.title.length > 6
          ? this.recipedata.title.substring(0, 16) + "..."
          : this.recipedata.title;
      //绑定用户数据
      this.userdata = recipedata.data.user;
      //获取困难程度的值（还需做判断）
      this.difficulty = recipedata.data.difficultyDegree;
      // 绑定主料
      if (recipedata.data.ingredientInfo[0].ingredients) {
        this.ingredients = recipedata.data.ingredientInfo[0].ingredients;
      }
      // 绑定辅料
      if (recipedata.data.ingredientInfo[1].ingredients) {
        this.material = recipedata.data.ingredientInfo[1].ingredients;
      }
      // 判断是否收藏
      if (this.iscollect == false) {
        this.isActive = true;
        this.hasError = false;
      } else if (this.iscollect == true) {
        this.isActive = false;
        this.hasError = true;
        this.collecttext = "已收藏";
      }
    },

    // 点击收藏
    async handleCollection(e) {
      // 调用获取用户数据
      handleUserData();
      let userData = JSON.parse(localStorage.getItem("userData"));
      if (userData != null) {
        if (this.collecttext == "收藏") {
          let resdata = await recipeCollect(this.recipeId, userData.token);
          if (resdata.code == 0) {
            // Toast("你已经收藏该食谱~");
            Toast("收藏成功~");
            this.collecttext = "已收藏";
            this.isActive = false;
            this.hasError = true;
          }
        } else if ((this.collecttext = "已收藏")) {
          let resdata = await deleteCollect(this.recipeId, userData.token);
          if (resdata.code == 0) {
            Toast("您已取消收藏~");
            this.collecttext = "收藏";
            this.isActive = true;
            this.hasError = false;
          }
        }
      }
    },
    // 点击取消隐藏弹出
    handleCancel(){
      this.show=false
    },
    //点击一键烹饪 弹出
    async handleCookieBtn(){
      this.show=true;
      handleUserData();
      let userData = JSON.parse(localStorage.getItem("userData"));
      if (userData != null) {
        let resdata = await searchEquipment(this.recipeId, userData.token);
        this.equipmentdata= resdata.data;
      }
    }
  },
  mounted() {},
  computed: {
    // 判断食谱困难程度
    difficultyView() {
      switch (this.difficulty) {
        case 0:
          return "初级";
        case 1:
          return "中级";
        case 2:
          return "高级";
        default:
          "未知";
      }
    }
  }
};
</script>

<style lang='less' scoped>
.product {
  background-color: #fff;
  .banner {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .author {
    height: 5rem;
    border-bottom: 0.5px solid #ccc;
    padding: 0 1rem;
    line-height: 5rem;
    display: flex;
    .head-portrait {
      height: 3rem;
      width: 3rem;
      img {
        vertical-align: middle;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    span {
      line-height: 5rem;
      float: left;

      color: #4a4a4a;
      font-size: 1.4rem;
      margin-left: 1rem;
    }
    .collection {
      flex: 1;
      font {
        margin-right: 1rem;
        display: inline-block;
        font-size: 1.4rem;
        line-height: 3rem;
        margin-top: 1rem;
        color: #fff;
        padding: 0 2rem;
        border-radius: 3rem;
        background: #3cadff 100%;
        float: right;
      }
    }
    .collec {
      flex: 1;

      font {
        margin-right: 1rem;
        display: inline-block;
        font-size: 1.4rem;
        background-color: #ccc;
        line-height: 3rem;
        margin-top: 1rem;
        color: #fff;
        padding: 0 2rem;
        border-radius: 3rem;
        border: 0.5px solid #ccc;
        float: right;
      }
    }
  }
  .describle {
    padding: 0 1rem 1rem 1rem;
    border-bottom: 0.5px solid #ccc;
    .title {
      height: 4rem;
      line-height: 4rem;
      font-size: 1.6rem;
    }
    .difficulty {
      font-size: 1.2rem;
      color: #898989;
      font {
        margin-left: 1rem;
      }
    }
    .content {
      line-height: 2.5rem;
      margin-top: 1rem;
      color: #4a4a4a;
      font-size: 1.4rem;
    }
  }
  .material {
    padding: 0 1rem;
    border-bottom: 0.5px solid #ccc;
    .title {
      font-size: 1.6rem;
      height: 4rem;
      line-height: 4rem;
    }
    .content {
      ul {
        li {
          height: 3rem;
          font-size: 1.4rem;
          color: #4a4a4a 100%;
          font {
            float: right;
            margin-right: 3rem;
          }
        }
      }
    }
    .main {
    }
  }
  .cookiestep {
    .content {
      padding: 1rem;
      .title {
        height: 2rem;
        line-height: 2rem;
        font-size: 1.4rem;
      }
      ul {
        border-bottom: 0.5px solid #ccc;
        padding-bottom: 1rem;

        li {
          .name {
            font-size: 1.2rem;
            height: 3rem;
            color: #fe3824;
            line-height: 3rem;
          }
          img {
            width: 100%;
          }
          p {
            font-size: 1.4rem;
            overflow: hidden;
            line-height: 2rem;
          }
        }
      }
    }
  }
  .tips {
    padding: 1rem;
    font-size: 1.4rem;
    color: #4a4a4a;
    line-height: 2rem;
    border-bottom: 0.5px solid #ccc;
    .title {
      font-size: 1.6rem;
      height: 3rem;
      color: #4a4a4a;
      line-height: 3rem;
    }
  }
  .equipment {
    padding: 1rem;
    .title {
      height: 3rem;
      line-height: 3rem;
      font-size: 1.4rem;
      color: #4a4a4a;
      text-align: center;
    }
    ul {
      border-bottom: 0.5px solid #ccc;

      li {
        font-size: 1.2rem;
        height: 3rem;
        line-height: 3rem;
      }
    }
  }
  .datareading {
    height: 3rem;
    color: #898989;
    padding: 0 1rem;
    line-height: 3rem;
    font-size: 1.2rem;
    font {
      font-size: 1.2rem;
      float: right;
    }
  }
  .cookie_btn {
    width: 10rem;
    height: 6.5rem;
    position: fixed;
    bottom: 5rem;
    right: 0;
    color: #feb119;
    line-height: 6.5rem;
    text-align: center;
    font-size: 1.4rem;
    border-radius: 5rem 0 0 5rem;
    background: #4a4a4a;
  }
  .van-popup {
    position: fixed !important;
    border-radius: 1.2rem;
  }
  .equipment-popup {
    width: 30rem;
    height: auto;
    padding: 1rem 0;
    background-color: #fff;
    .header {
      text-align: center;
      font-size: 1.4rem;
      height: 4rem;
      border-bottom: 0.5px solid #e7e2e5;
      font-size: 16px;
      letter-spacing: -0.39px;
      color: #4A4A4A;
      letter-spacing: -0.41px;
      text-align: center;
      line-height: 16px;
      line-height: 4rem;
      width: 100%;
    }
    .footer{
      height: 4rem;
      color: #4A4A4A;
      letter-spacing: -0.41px;
      line-height: 5rem;
      font-size: 1.6rem;
      text-align: center;
    }
    ul {
      li {
        padding: 1rem 0;
        border-bottom: 0.5px solid #e7e2e5;
        a {
          display: flex;
          padding: 0 1rem;
          .container {
            padding-left: 1rem;
            font-size: 1.4rem;
            span {
              color: #4a4a4a;
              display: block;
              line-height: 2.5rem;
              font-size: 1.4rem;
            }
            .status {
              color: #898989;
              letter-spacing: -0.34px;
              font-size: 1.2rem;
            }
          }
          img {
            width: 5rem;
            height: 5rem;
          }
        }
      }
    }
  }
}
</style>
