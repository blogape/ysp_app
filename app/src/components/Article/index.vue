<template>
        <!-- 食谱软文展示 -->
    <router-link :to="({name:'Article',params:{id:data.id}})" class="articletemplate">
        <div class="main">
            <div class="left">
                <div class="title">
                    {{data.title}}
                </div>
                <div class="describle">
                    {{data.description}}
                  </div>
            </div>
            <div class="right">
                <img :src="data.image"/>
            </div>
        </div>
</router-link>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  }
};
</script>

<style lang='less' scoped>
.articletemplate {
  width: 100%;
  border-radius: 3px;
  display: inline-block;
  margin-top: 1rem;
  background-color: #fff;
  height: 12rem;
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
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        font-size: 1.4rem;
      }
      .describle {
        color: #4a4a4a;
        text-align: center;
        font-size: 1.2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
