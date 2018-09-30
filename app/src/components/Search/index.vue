<template>
    <!-- 搜索 -->
        <van-popup v-model="show" position="bottom" :overlay="false" class="searchpopup">
        <div class="search">
        <div class="header">
            <span class="icon iconfont icon-fanhui" @click='handleback'></span>
            <div class="input">
                <i class="icon iconfont icon-search_001"></i>
                <input type="text" placeholder="搜索食谱/食材/问题" autofocus="autofocus" v-focus />
            </div>
            <span  >搜索</span>
        </div>
        <!-- 最近搜索 -->
        <div class="recentsearch">
            <div class="title">
            最近搜索 <i class="icon iconfont icon-shanchu"></i>
            </div>
            <div class="content">
                    <ul>
                        <li ><a href=''>牛肉</a></li>
                        <li><a href=''>猪肉</a></li>
                        <li><a href=''>牛排</a></li>
                        <li><a href=''>鸡肉</a></li>
                        <li><a href=''>羊肉</a></li>
                        <li><a href=''>狗欧</a></li>
                    </ul>
            </div>
        </div>
        <!-- 热门搜索 -->
        <div class="recentsearch hotsearch">
            <div class="title">
            热门搜索
            </div>
            <div class="content">
                    <ul>
                        <li><a href=''>牛肉</a></li>
                        <li><a href=''>猪肉</a></li>
                        <li><a href=''>牛排</a></li>
                        <li><a href=''>鸡肉</a></li>
                        <li><a href=''>猪肉</a></li>
                        <li><a href=''>牛排</a></li>
                        <li><a href=''>鸡肉</a></li>
                        <li><a href=''>羊肉</a></li>
                        <li><a href=''>狗欧</a></li>
                    </ul>
            </div>
        </div>
    </div>
        </van-popup>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      focusState: false
    };
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    }
  },
  methods: {
    // 返回点击关闭搜索
    handleback() {
      this.show = false;
    },
    handleClick() {
      // this.inserted();
    }
  },
  computed: {}
};
</script>

<style lang='less' scoped>
.search {
  position: fixed;
  top: 0;
  height: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  .header {
    display: flex;
    width: 100%;
    height: 4.5rem;
    span {
      height: 4.5rem;
      text-align: center;
      line-height: 4.5rem;
      color: #4a4945;
      width: 5rem;
      font-size: 1.5rem;
      display: inline-block;
    }
    .icon {
      font-size: 3rem;
    }
    .input {
      flex: 1;
      position: relative;
      padding: 0 0.8rem;
      input {
        width: 100%;
        margin-top: 0.75rem;
        background-color: #f5f6f8;
        font-size: 1.2rem;
        height: 3rem;
        line-height: 3rem;
        text-indent: 4rem;
        color: #4a4a4a;
        outline: none;
      }
      i {
        position: absolute;
        top: 1.5rem;
        vertical-align: middle;
        left: 2rem;
        color: #9d9d9d;
        font-size: 1.8rem;
      }
    }
  }
  .hotsearch {
    margin-top: 5rem !important;
  }
  .recentsearch {
    width: 100%;
    margin-top: 1rem;
    color: #999999;
    line-height: 3rem;
    .title {
      font-size: 1.2rem;
      text-align: left;
      height: 3rem;
      text-indent: 1.5rem;
      width: 100%;
      i {
        margin-right: 1.5rem;
        float: right;
        font-size: 2rem;
      }
    }
    .content {
      overflow: hidden;
      ul {
        li {
          float: left;
          overflow: hidden;
          margin-top: 1rem;
          margin-left: 1.2rem;
          a {
            border-radius: 5px;
            padding: 0.5rem 1.2rem;
            background-color: #f5f6f8;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
}
</style>
