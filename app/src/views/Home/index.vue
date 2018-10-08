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
    <van-swipe-item v-for='(item,key) in bannerdata' :key='key'><img :src="item.image"/></van-swipe-item>
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
      <div class="main" v-for='(item,key) in elementdata' :key='key'>
      <!-- 食谱软文 -->
      <template v-if='item.type===1'>
      <Article :data='item.data'></Article>
      </template>
      <!-- 食谱详情 -->
       <template v-if='item.type===0'>
       <Recipetemplate :data='item.data'></Recipetemplate>
      </template>
        <!-- 食谱主题 -->
      <template v-if='item.type===2'>
       <Theme :data='item.data'></Theme>
      </template>
      </div>
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
import { homebanner, getElement } from "../../services/api.js";
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
      myisloading: true,
      bannerdata: "",
      elementdata: ""
    };
  },
  mounted() {
    this.onloading();
    this.getBannerData();
    this.getElement();
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
      this.bannerdata = dataRes.data.list;
    },
    // 获取食谱视图内容
    async getElement() {
      let elementData = await getElement();
      console.log(elementData);
      this.elementdata = elementData.data;
    },
    // 点击隐藏
    handleSearchHide() {
      this.isSearch = true;
    },
    // 弹出搜索页面
    handleSearch() {
      document.body.scrollTop = 0;
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
    border-radius: 3px;
    overflow: hidden;
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
