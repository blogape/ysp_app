<template>
    <!-- 主题食谱 -->
    <div class="themrecipe">
   <Header>主题食谱</Header>
   <div class="name">
       吃货不容错过
   </div>
   <!-- 作者 -->
   <div class="author">
       <img src="https://image.hongbeibang.com/FlH_fO_u1OzNS9zGadlw5zO3h_iA?1080X810&imageView2/1/w/80/h/80"/>小小哨兵
   </div>
   <!-- 描述 -->
   <div class="describle">
        对于吃货来说，广州的名字都带着令人垂延的光环！作为吃货的天堂，广州美食中隆重的正菜，精巧的小食点心都深得人心，广博奇杂，口味独特。
   </div>
    <!-- 线条 数量 -->
   <div class="line">
       <font>15道美味</font>
       <span class="left"></span>
       <span class="right"></span>
   </div>
   <!-- 内容 -->
   <div class="content">
       <HotRecipe></HotRecipe>
       <HotRecipe></HotRecipe>
   </div>
    </div>
</template>

<script>
import Header from "../../components/Header/";
import HotRecipe from "../../components/Hottemplate/";
export default {
  components: {
    Header,
    HotRecipe
  }
};
</script>

<style lang='less' scoped>
.themrecipe {
  background-color: #fff;
  .name {
    padding: 0 1rem;
    font-size: 1.6rem;
    height: 4rem;
    line-height: 4rem;
  }
  .author {
    padding: 0 1rem;
    height: 5rem;
    font-size: 1.4rem;
    line-height: 5rem;
    vertical-align: middle;
    img {
      float: left;
      height: 3rem;
      margin-top: 1rem;
      margin-right: 1rem;
      width: 3rem;
      border-radius: 50%;
    }
  }
  .describle {
    line-height: 3rem;
    padding: 0 1rem;
    color: #4a4a4a;
    font-size: 1.4rem;
  }
  .line {
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    font {
      display: inline-block;
      position: absolute;
      left: 50%;
      color: #3cadff;
      line-height: 4rem;
      width: 10rem;
      margin-left: -5rem;
      font-size: 1.3rem;
    }
    .left {
      margin-top: 2rem;
      width: 35%;
      height: 1px;
      float: left;
      display: inline-block;
      background-image: linear-gradient(
        90deg,
        rgba(204, 204, 204, 0) 0%,
        #cccccc 98%
      );
    }
    .right {
      width: 35%;
      margin-top: 2rem;
      margin-left: 5rem;
      float: right;
      height: 1px;
      display: inline-block;
      background-image: linear-gradient(
        -90deg,
        rgba(204, 204, 204, 0) 0%,
        #cccccc 98%
      );
    }
  }
  .content {
    padding: 1rem 0;
  }
}
</style>
