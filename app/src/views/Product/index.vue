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
                <div class="collection">
                        <font>收藏 
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
        <div class="cookie_btn">
                一键烹饪
        </div>
    </div>
</template>

<script>
import Header from "../../components/Header/";
import { product } from "../../services/api.js";
export default {
  data() {
    return {
      title: "",
      recipedata: "",
      userdata: "",
      ingredients: "",
      material: "",
      difficulty:'',
    };
  },
  components: {
    Header
  },
  created() {
    this.getRecipeData();
  },
  methods: {
    // 食谱详情数据
    async getRecipeData() {
      let recipedata = await product(this.$route.params.id);
      // 食谱数据绑定
      this.recipedata = recipedata.data;
      this.title =
        this.recipedata.title.length > 6
          ? this.recipedata.title.substring(0, 16) + "..."
          : this.recipedata.title;
      //绑定用户数据
      this.userdata = recipedata.data.user;
      //获取困难程度的值（还需做判断）
      this.difficulty=recipedata.data.difficultyDegree;
      // 绑定主料
      if (recipedata.data.ingredientInfo[0].ingredients) {
        this.ingredients = recipedata.data.ingredientInfo[0].ingredients;
      }
      // 绑定辅料
      if (recipedata.data.ingredientInfo[1].ingredients) {
        this.material = recipedata.data.ingredientInfo[1].ingredients;
      }
    }
  },
  mounted() {},
  computed: {
    // 判断食谱困难程度
    difficultyView() {
      switch(this.difficulty){
        case 0:
        return '初级';
        case 1:
        return '中级';
        case 2:
        return '高级';
        default:'未知'
      }
}
  }
};
</script>

<style lang='less' scoped>
.product {
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
}
</style>
