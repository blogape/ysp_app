<template>
<!-- 热门食谱 -->
    <div class="hotrecipe">
        <router-link :to="({name:'Product',params:{id:data.id}})" class="main">
            <div class="recipename">
                    {{data.title}}
            </div>
              <!-- 作者 -->
            <div class="author">
                <span>
                <img :src="data.headimg"/>
                </span>
                    <!-- nikename -->
                <div class="name">
                    {{data.nickname}}
                </div>
                <div class="right">
                    <ul>
                        <li>
                    <i class="icon iconfont icon-chakan"></i>{{data.readCount}}
                        </li>
                        <li>
                        <i class="icon iconfont icon-wujiaoxingkong"></i>{{data.collectCount}}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="img">
                <img :src="data.coverimg"/>
            </div>
          
 </router-link>    </div>
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
.hotrecipe {
  padding: 1rem;
  border-radius: 3px;
  overflow: hidden;
  border-bottom: 0.5px solid #eaeaea;
  padding-bottom: 1rem;
  .main {
    width: 100%;
    display: inline-block;
    .recipename {
      color: #4a4a4a;
      font-size: 1.6rem;
      margin-top: 1rem;
    }
    .img {
      overflow: hidden;
      height: 20rem;
      img {
        width: 100%;
      }
    }
    .author {
      height: 4rem;
      width: 100%;
      line-height: 4rem;
      margin-top: 1rem;
      overflow: hidden;
      img {
        height: 2.5rem;
        margin-top: 0.5rem;
        vertical-align: middle;
        float: left;
        border-radius: 50%;
      }
      .name {
        float: left;
        color: #4a4945;
        margin-left: 1rem;
        font-size: 1.2rem;
      }
      .van-tag {
        font-size: 1rem;
        margin-left: 1rem;
      }
      .right {
        float: right;
        ul {
          li {
            float: left;
            height: 2rem;
            color: #898989;

            //   line-height: 2rem;
            font-size: 1rem;
            vertical-align: middle;
            margin-left: 2rem;
            i {
              float: left;
              vertical-align: middle;
              margin-right: 0.5rem;
              margin-top: 0rem;

              display: inline-block;
              font-size: 1.2rem;
            }
            .icon-chakan {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
}
</style>
