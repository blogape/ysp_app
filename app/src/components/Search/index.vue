<template>
    <!-- 搜索 -->
        <van-popup v-model="isshow" position="bottom" :overlay="false" class="searchpopup">
        <div class="search">
        <div class="header">
            <span class="icon iconfont icon-fanhui" @click='handleback'></span>
            <div class="input">
                <i class="icon iconfont icon-search_001"></i>
                <input type="text"/>
            </div>
            <span>搜索</span>
        </div>
        <!-- 最近搜索 -->
        <div class="recentsearch">
            <div class="title">
            
            </div>
        </div>
    </div>
        </van-popup>
</template>

<script>
export default {
  props: {
    isshow: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    handleback() {
      this.isshow = false;
    },
    handleShow() {
      this.isshow = true;
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
      // border: 1px solid red;
      input {
        width: 100%;
        margin-top: 0.75rem;
        background-color: #f5f6f8;
        font-size: 1.4rem;
        height: 3rem;
        text-indent: 4rem;
        color: #4a4a4a;
        outline: none;
        // border: 1px solid red;
      }
      i {
        position: absolute;
        top: 1.5rem;
        left: 2rem;
        color: #9d9d9d;
        font-size: 1.8rem;
      }
    }
  }
}
</style>
