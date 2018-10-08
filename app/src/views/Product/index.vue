<template>  
 <!-- 食谱详情 -->
    <div class="product">
      <!-- {{recipedata.title.length> 6 ? recipedata.title.substring(0,16) + "..." : recipedata.title}} -->
        <Header></Header>
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
                        <font>收藏</font>
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
                    难度：{{difficultyDegree}}<font>制作时间：1小时以上</font>  
                </div>
                <!-- 描述 -->
                <div class="content">
                    所有人都会追求美好的东西，对于食物更应如此。所以很多热爱生活的人，对待食物也是很用心的，比如这道小食物，不论是颜值，还是口味，简直让全家人都喜欢的不得了，其实它就是用到我们日常生活中最常见的食材，进行组合搭配，再用心去设计一下，就成就了高颜值的美味，而且制作简单，每个人都能轻松完成。
                </div>
            </div>
            <!-- 材料 -->
            <div class="material">
                <!-- 主料 -->
                <div class="main">
                    <div class="title">
                    主料
                    </div>
                <div class="content">
                    <ul>
                        <li>高粉 <font>380g</font></li>
                        <li>高粉 <font>380g</font></li>
                        <li>高粉 <font>380g</font></li>
                        <li>高粉 <font>380g</font></li>
                        <li>高粉 <font>380g</font></li>
                        <li>高粉 <font>380g</font></li>
                    </ul>
                </div>
                </div>
                <!-- 配料 -->
                <div class="ingredients">
                     <div class="title">
                    配料
                    </div>
                <div class="content">
                    <ul>
                        <li>高粉 <font>380g</font></li>
                        <li>高粉 <font>380g</font></li>
                        <li>高粉 <font>380g</font></li>
                        <li>高粉 <font>380g</font></li>
                        <li>高粉 <font>380g</font></li>
                        <li>高粉 <font>380g</font></li>
                    </ul>
                </div>
                </div>
            </div>
            <!-- 烹饪步骤 -->
            <div class="cookiestep">
                <div class="content">
                    <div class="title">
                    烹饪步骤          
                     </div>
                    <ul>
                        <li>
                            <div class="name">
                                准备步骤
                            </div>
                            <div class="img">
                                <img src="https://image.hongbeibang.com/FiU01MIqgErXGE9UZmJiSyi34OBA?1280X853&imageView2/1/w/600/h/360|watermark/1/image/aHR0cDovL2ltYWdlLmhvbmdiZWliYW5nLmNvbS9GaXZ3UkFMS3ZpVG9XM3V2SmxmSnZvV0UtNjh2/dissolve/50/gravity/SouthEast/dx/25/dy/25/ws/0.09322033898305083"/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="content">
                    <div class="title">
                    烹饪步骤          
                     </div>
                    <ul>
                        <li>
                            <div class="name">
                                准备步骤
                            </div>
                            <div class="img">
                                <img src="https://image.hongbeibang.com/FiU01MIqgErXGE9UZmJiSyi34OBA?1280X853&imageView2/1/w/600/h/360|watermark/1/image/aHR0cDovL2ltYWdlLmhvbmdiZWliYW5nLmNvbS9GaXZ3UkFMS3ZpVG9XM3V2SmxmSnZvV0UtNjh2/dissolve/50/gravity/SouthEast/dx/25/dy/25/ws/0.09322033898305083"/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 小贴士 -->
            <div class="tips">
                <div class="title">
小贴士
                </div>
因为不同面粉吸水量是不同的，因此液体不要一次加完，可以先预留一些，最后根据实际情况再加。我的高粉吸水量很一般，如果觉得面团偏干可以多加10克左右的水！
            </div>
            <!-- 支持设备 -->
            <div class="equipment">
                    <div class="title">
                        支持设备
                    </div>
                    <ul>
                        <li>宜居云牛扒机 EG-SM1701-3C</li>
                        <li>宜居云牛扒机 EG-SM1701-3C</li>
                       
                    </ul>
            </div>
            <!-- 日期与浏览次数 -->
            <div class="datareading">
阅读 87006      <font>2017-12-19  11:06:27</font>
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
      recipedata: "",
      userdata:'',
    };
  },
  components: {
    Header
  },
  methods: {
    // 食谱详情数据
    async getRecipeData() {
      let recipedata = await product(this.$route.params.id);
      // 食谱数据绑定
      this.recipedata = recipedata.data;
      //绑定用户数据
      this.userdata=recipedata.data.user;
      console.log(this.recipedata);
    }
  },
  mounted() {
    this.getRecipeData();
  },
  watch: {
    // 控制标题长度
    difficultyDegree() {
      return '1';
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
