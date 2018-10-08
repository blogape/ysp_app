<template>
    <!-- 食谱软文 -->
    <div class="article">
   <Header>食谱软文</Header>
  <!-- banner图 -->
  <div class="banner">
    <img src="https://image.hongbeibang.com/Fgl2WRNdRvfSojtmAjOG5JOktt7x?1920X1280&imageView2/1/w/600/h/348"/>
  </div>
  <!-- 软文名称 -->
  <div class="name">
这样的蒜，你吃过吗？
<p>一蒜八吃，不止调味那么简单</p>
  </div>
  <!-- 作者 -->
  <div class="author">
    <div class="header">
      <img src="https://image.hongbeibang.com/FlaZoquSa5nybeRy2k162hFLvuvd?700X700&imageView2/1/w/80/h/80"/>
    </div>
    <div class="name">
奶油泡芙
    </div>
  </div>
  <div class="content">
普通蒜瓣儿除了味道冲了点，不管是作为调味品还是单纯的食物，对人体健康都大有裨益。不过现在流行于高档西餐厅的“黑蒜料理”，不仅不会让你的嘴里产生令人尴尬的味道，还有酸甜的果香，甚至
黑蒜保健品也开始抢占脑白金的市场了。
<img src="https://image.hongbeibang.com/Fl-H_qywzg1dnQxoaB1W8sWuJ48Q?1080X810&imageView2/1/w/600/h/348"/>
普通蒜瓣儿除了味道冲了点，不管是作为调味品还是单纯的食物，对人体健康都大有裨益。不过现在流行于高档西餐厅的“黑蒜料理”，不仅不会让你的嘴里产生令人尴尬的味道，还有酸甜的果香，甚至
黑蒜保健品也开始抢占脑白金的市场了。
<img src="https://image.hongbeibang.com/Fl-H_qywzg1dnQxoaB1W8sWuJ48Q?1080X810&imageView2/1/w/600/h/348"/>
  </div>
  <!-- 阅读与日期 -->
  <div class="readdata">
阅读 87006 <span>2017-12-19  11:06:27</span>
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
.article {
  .banner {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .name {
    padding: 1rem;
    font-size: 1.6rem;
    color: #4a4a4a;
    border-bottom: 0.5px solid #ccc;
    p {
      font-size: 1.2rem;
      margin-top: 1rem;
      color: #898989;
    }
  }
  .author {
    padding: 1rem;
    display: flex;
    .header {
      height: 3rem;
      line-height: 3rem;
      overflow: hidden;
      width: 3rem;
      border-radius: 50%;
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
    .name{
      font-size: 1.2rem;
      color: #4A4945;
      border: none;
    }
  }
  .content{
    padding:0 1rem;
    color: #4A4A4A;
    line-height: 3rem;
    font-size: 1.4rem;
    img{
      max-width: 100%;
    }
  }
  .readdata{
    font-size: 1.4rem;
    padding:  1rem;
    color: #898989;
    span{
      float: right;
          font-size: 1.4rem;

    }
  }
}
</style>
