<template>
        <!-- 食谱软文展示 -->
    <div class="articletemplate">
        <div class="main">
            <div class="left">
                <div class="title">
                    小黄人蛋挞
                </div>
                <div class="describle">
                    春寒料峭，食之有方
                </div>
            </div>
            <div class="right">
                <img src="https://image.hongbeibang.com/FsGVb-bFubhGdLk7LrXPyqdl3gZ4?1280X958&imageView2/1/w/600/h/348"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.articletemplate {
  width: 100%;
  border-radius: 3px;
  margin-top: 1rem;
  background-color: #fff;
  height: 12rem;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  .main {
    display: flex;
    height: 12rem;
    overflow: hidden;
    .left {
      width: 15rem;
      .title {
        height: 3rem;
        color: #4a4a4a;
        margin-top: 3rem;
        line-height: 3rem;
        text-align: center;
        font-size: 1.4rem;
      }
      .describle {
        color: #4a4a4a;
        text-align: center;
        font-size: 1.2rem;
      }
    }
    .right {
      flex: 1;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
