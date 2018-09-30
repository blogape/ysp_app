<template>
<!-- 热门食谱 -->
    <div class="hotrecipe">
        <div class="main">
            <div class="recipename">
                    经典牛排
            </div>
              <!-- 作者 -->
            <div class="author">
                <span>
                <img src="https://image.hongbeibang.com/FjkoQD4vxHs-n7ZejZHi8fZWVvBU?400X225&imageView2/1/w/80/h/80"/>
                </span>
                    <!-- nikename -->
                <div class="name">
                    imCc_v5
                </div>
                <div class="right">
                    <ul>
                        <li>
                    <i class="icon iconfont icon-chakan"></i>23
                        </li>
                        <li>
                        <i class="icon iconfont icon-wujiaoxingkong"></i>23
                        </li>
                    </ul>
                </div>
            </div>
            <div class="img">
                <img src="https://image.hongbeibang.com/Fsv0y3X1ggxLmMiXM-wV1cKM7Dgm?1280X853&imageView2/1/w/600/h/348"/>
            </div>
          
        </div>
    </div>
</template>

<script>
export default {};
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
