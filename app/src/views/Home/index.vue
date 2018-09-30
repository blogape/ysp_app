<template>
  <div class="home">
    <!-- home 头部 -->
    <div class="header">
    <div class="scan-icon">
      <i class="icon iconfont icon-saoyisao"></i>
    </div>
    <div class="search-input" @click='handleSearch'>
      <span><i class="icon iconfont icon-search_001"></i>搜索食谱/食材/问题</span>
    </div>
    <div class="scan-icon">
      <i class="icon iconfont icon-more"></i>
    </div>
    </div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <!-- banner图 -->
    <div class="banner">
  <van-swipe :autoplay="3000" :touchable="true">
    <van-swipe-item><img src="http://m.360buyimg.com/mobilecms/jfs/t1/2149/7/8648/101849/5ba9e070E518446eb/d51a88c0636b0ee2.jpg!cr_1125x549_0_72"/></van-swipe-item>
    <van-swipe-item><img src="http://m.360buyimg.com/mobilecms/jfs/t1/4748/14/9314/97451/5bac587eE329a9b48/cbb6c07075c3e7da.jpg!cr_1125x549_0_72"/></van-swipe-item>
    <van-swipe-item><img src="http://m.360buyimg.com/mobilecms/s1125x690_jfs/t1/5028/15/6817/158872/5ba4a352E6b8bee61/b89df411d63b5c72.jpg!cr_1125x549_0_72!q70.jpg.dpg"/></van-swipe-item>
    <van-swipe-item><img src="http://m.360buyimg.com/mobilecms/s1125x690_jfs/t1/4378/40/2293/98297/5b963ac9E0432a7a3/0a560cdba5b6498d.jpg!cr_1125x549_0_72!q70.jpg.dpg"/></van-swipe-item>
  </van-swipe>
    </div>
    <!-- 导航 -->
    <div class="nav">
      <ul>
        <li>
            <router-link to='/category'>
          <img src="../../assets/images/icon_classify.png"/>
          <span>食谱分类</span>
          </router-link>       
        </li>
        <li>
            <router-link to='/hotrecipe'>
          <img src="../../assets/images/icon_hot.png"/>
           <span>热门食谱</span>
          </router-link>       
        </li>
        <li>
            <router-link to='/steakrecipe'>
            <img src="../../assets/images/icon_recipe_niupa.png"/>
          <span>牛排机食谱</span>
          </router-link>       
            </li>
         <li>
         <router-link to='/breadrecipe'>
          <img src="../../assets/images/icon_recipe_mianbao.png"/>
            <span>面包机食谱</span>
          </router-link>       
        </li>
      </ul>
    </div>
    <!--食谱内容 -->
    <div class="content">
      <!-- 食谱软文 -->
      <template>
      <Article></Article>
      </template>
      <!-- 食谱详情 -->
       <template>
       <Recipetemplate></Recipetemplate>
      </template>
        <!-- 食谱主题 -->
      <template>
       <Theme></Theme>
      </template>
    </div>
    </van-pull-refresh>
    <Loading v-if='myisloading'></Loading>
    <!-- 弹出搜索页面-->
      <Search  ref='isSearch'></Search>
  </div>
</template>

<script>
import Article from "../../components/Article/";
import Theme from "../../components/Theme/";
import Loading from "../../components/Loading/";
import Recipetemplate from "../../components/Recipetemplate/";
import Search from "../../components/Search/";
import { homebanner } from "../../services/api.js";
export default {
  components: {
    Article,
    Search,
    Theme,
    Loading,
    Recipetemplate
  },
  data() {
    return {
      isSearch: false,
      isLoading: false,
      myisloading: true
    };
  },
  mounted() {
    this.onloading();
    this.getBannerData();
  },
  methods: {
    onloading() {
      setTimeout(() => {
        this.myisloading = false;
      }, 500);
    },

    // 获取轮播图数据
    async getBannerData() {
      let dataRes = await homebanner();
      console.log(dataRes);
    },
    // 点击隐藏
    handleSearchHide() {
      this.isSearch = true;
      },
    // 弹出搜索页面
    handleSearch() {
      this.$refs.isSearch.show = true;
    },
    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        window.location.reload();
        this.isLoading = false;
      }, 500);
    }
  }
};
</script>

<style lang='less' scoped>
.home {
  width: 100%;
  position: relative;
  max-width: 640px;
  margin: 0 auto;
  padding-top: 4.5rem;
  .header {
    background-color: #fff;
    width: 100%;
    z-index: 999;
    max-width: 640px;
    position: fixed;
    top: 0;
    height: 4.5rem;
    display: flex;
    .scan-icon {
      width: 4.5rem;
      text-align: center;
      height: 4.5rem;
      i {
        line-height: 4.5rem;
        color: #3c3c3c;
        display: inline-block;
        font-size: 2.6rem;
      }
    }
    .search-input {
      flex: 1;
      padding: 0 1rem;
      height: 4.5rem;
      span {
        display: inline-block;
        height: 3rem;
        border-radius: 3px;
        line-height: 3rem;
        font-size: 1.2rem;
        margin-top: 0.75rem;
        color: #a1a1a1;
        width: 100%;
        background-color: #f5f6f8;
        i {
          display: inline-block;
          margin-right: 1rem;
          margin-left: 1rem;
          float: left;
          color: #a1a1a1;
          font-size: 1.8rem;
        }
      }
    }
  }
  .banner {
    padding: 0 1rem 0.5rem 1rem;
    background-color: #fff;
    img {
      border-radius: 5px;
      width: 100%;
    }
  }
  .nav {
    margin-top: 0.5rem;
    background-color: #fff;
    padding: 1rem 0;
    ul {
      display: flex;
      width: 100%;
      li {
        flex: 1;
        text-align: center;
        a {
          display: inline-block;
          img {
            height: 5rem;
          }
          span {
            height: 2rem;
            line-height: 1.6rem;
            display: block;
            color: #4a4a4a;
            letter-spacing: 0;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
  .content {
    padding: 0 1rem;
  }
  .searchpopup {
    height: 100%;
  }
}
</style>
