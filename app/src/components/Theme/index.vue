<template>
    <!-- 主题模板 -->
    <div class="themetemplate">
    <div class="main">
    <!-- 标题 -->
    <div class='title'>
        在家只能吃冷冻牛排？这样吃好像去了趟澳洲…
    </div>
    <!-- 描述 -->
    <div class="describe">
        无需解冻，简单调味，轻松做出西餐厅的美味牛排
    </div>
    <!-- 图片 -->
    <div class="img">
        <img src='https://image.hongbeibang.com/FqxWw1V361ITZqb3r0ibewUm4Z4_?640X490&imageView2/1/w/600/h/348'/>
    </div>
    </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.themetemplate {
  width: 100%;
  padding-top: 1rem;
  border-radius: 3px;
  margin-top: 1rem;
  background-color: #fff;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  .main {
    width: 100%;
    .title {
      height: 3rem;
      padding: 0 1rem;
      width: 100%;
      overflow: hidden;
      line-height: 3rem;
      font-size: 1.4rem;
    }
    .describe {
      height: 3rem;
      padding: 0 1rem;
      width: 100%;
      color: #898989;
      font-size: 1.2rem;
    }
    .img {
      img {
        width: 100%;
      }
    }
  }
}
</style>
