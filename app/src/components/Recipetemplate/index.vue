<template>
    <!-- 食谱详情 -->
    <router-link :to="({name:'Product',params:{id:data.id}})" class="recipemplate">
    <div class="main">
        <div class="left">
        <img :src="data.coverimg"/>
        </div>
        <div class="right">
            <!-- 标题 -->
            <div class="title">
                {{data.title}}
            </div>
            <!-- 标签 -->
            <div class="label">
                <ul>
                    <li>菲力</li>
                    <li>全熟</li>
                    <li>1.8cm</li>
                </ul>
            </div>
            <!-- 作者 -->
            <div class="author">
                {{data.nickname}} <span>已有{{data.cookiedCount}}人做过</span>
            </div>
            <!-- 收藏与浏览 -->
            <div class="collection">
                <ul>
                    <li><i class='icon iconfont icon-chakan'></i>{{data.readCount}}</li>
                    <li><i class='icon iconfont icon-wujiaoxingkong'></i>{{data.collectCount}}</li>
                </ul>
            </div>
        </div>
    </div>
   
</router-link></template>

<script>
export default {
  props:{
    data:{
      type:Object
    }
  }
};
</script>

<style lang='less' scoped>
.recipemplate {
  width: 100%;
  margin-top: 1rem;
  display: inline-block;
  overflow: hidden;
  background-color: #fff;
  height: 12rem;
  border-radius: 3px;
  // box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  .main {
    display: flex;
    width: 100%;
    height: 12rem;
    .left {
      width: 15rem;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .right {
      padding: 1rem 2rem;
      flex: 1;
      .title {
        height: 3rem;
        overflow: hidden;
        line-height: 3rem;
        font-size: 1.5rem;
        color: #4a4a4a;
      }
      .label {
        font-size: 1rem;
        height: 1.5rem;
        display: block;
        width: 100%;
        ul {
          li {
            overflow: hidden;
            float: left;
            color: #898989;
            margin-right: 1rem;
            font-size: 1.2rem;
          }
        }
      }
      .author {
        height: 2rem;
        line-height: 2rem;
        display: block;
        margin-top: 0.3rem;
        color: #4a4a4a;
        font-size: 1.3rem;
        span {
          color: #898989;
          margin-left: 0.5rem;
          font-size: 1rem;
        }
      }
      .collection {
        margin-top: 0.3rem;
        ul {
          display: flex;
          li {
            height: 2rem;
            font-size: 1rem;
            line-height: 2rem;
            margin-right: 1.5rem;
            color: #898989;
            i {
              font-size: 1.6rem;
              margin-right: 0.5rem;
              color: #898989;
              float: left;
            }
          }
          li:last-child i {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
}
</style>
