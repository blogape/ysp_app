<template>
<!-- 食谱分类 -->
<div class="category">
<!-- 头部导入 -->
<Header>食谱分类</Header>
<!-- 内容 -->
<div class="main">
<!-- 标题 -->
<div class="title">
肉类
</div>
<div class="content">
<ul>
    <li><a href="">
        <img src="https://image.hongbeibang.com/FsO_OiBFxI8vzhfSt2oeDnH2DgG7?240X240&imageView2/1/w/120/h/120">
        <span>西冷牛扒</span>
        </a></li>
 <li><a href="">
        <img src="https://image.hongbeibang.com/FsO_OiBFxI8vzhfSt2oeDnH2DgG7?240X240&imageView2/1/w/120/h/120">
        <span>西冷牛扒</span>
        </a></li>
         <li><a href="">
        <img src="https://image.hongbeibang.com/FsO_OiBFxI8vzhfSt2oeDnH2DgG7?240X240&imageView2/1/w/120/h/120">
        <span>西冷牛扒</span>
        </a></li>
         <li><a href="">
        <img src="https://image.hongbeibang.com/FsO_OiBFxI8vzhfSt2oeDnH2DgG7?240X240&imageView2/1/w/120/h/120">
        <span>西冷牛扒</span>
        </a></li>
    <li><a href="">
        <img src="https://image.hongbeibang.com/FsO_OiBFxI8vzhfSt2oeDnH2DgG7?240X240&imageView2/1/w/120/h/120">
        <span>西冷牛扒</span>
        </a></li>
 <li><a href="">
        <img src="https://image.hongbeibang.com/FsO_OiBFxI8vzhfSt2oeDnH2DgG7?240X240&imageView2/1/w/120/h/120">
        <span>西冷牛扒</span>
        </a></li>
         <li><a href="">
        <img src="https://image.hongbeibang.com/FsO_OiBFxI8vzhfSt2oeDnH2DgG7?240X240&imageView2/1/w/120/h/120">
        <span>西冷牛扒</span>
        </a></li>
         <li><a href="">
        <img src="https://image.hongbeibang.com/FsO_OiBFxI8vzhfSt2oeDnH2DgG7?240X240&imageView2/1/w/120/h/120">
        <span>西冷牛扒</span>
        </a></li>
</ul>
</div>
</div>
</div>
</template>

<script>
import Header from "../../components/Header/";
export default {
  components: {
    Header
  }
};
</script>

<style lang='less' scoped>
.category {
  width: 100%;
  .title {
    height: 5rem;
    line-height: 5rem;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #4a4a4a;
    letter-spacing: -0.39px;
    text-align: center;
    text-align: center;
  }
  .content {
    background-color: #fff;
    margin-top: -1rem;
    ul {
      li {
        width: 20%;
        float: left;
        overflow: hidden;
        margin-top: 1rem;
        margin-left: 4%;
        span {
          font-size: 1.3rem;
          height: 2rem;
          text-align: center;
          width: 100%;
          color: #4a4a4a;
          line-height: 2rem;
          display: inline-block;
        }
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
