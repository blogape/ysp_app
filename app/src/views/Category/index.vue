<template>
<!-- 食谱分类 -->
<div class="category">
<!-- 头部导入 -->
<Header :isHideSearch='true'>食谱分类</Header>
<!-- 内容 -->
<div class="main" v-for='(item,key) in  catrgorydata' :key='key'>
<!-- 标题 -->
<div class="title">
{{item.recipeCategory.categoryName}}
</div>
<div class="content">
<ul>
    <li v-for="(item,key) in item.recipeCategorys" :key='key'><router-link :to="({name:'Search',params:{id:item.categoryName}})" >
        <img :src="item.img">
        <span>{{item.categoryName}}</span>
        </router-link>
        </li>
</ul>
</div>
</div>
</div>
</template>

<script>
import Header from "../../components/Header/";
import { getCatrgoryData } from "../../services/api.js";
export default {
  data() {
    return {
      catrgorydata: ""
    };
  },
  methods: {
    // 获取分类数据
    async getData() {
      let data = await getCatrgoryData();
      this.catrgorydata = data.data;
    }
  },
  mounted() {
    this.getData();
  },
  components: {
    Header
  }
};
</script>

<style lang='less' scoped>
.category {
  .title {
    height: 5rem;
    line-height: 5rem;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #4a4a4a;
    letter-spacing: -0.39px;
    text-align: center;
    text-align: center;
  }
  .main {
    padding: 1rem;
  }
  .content {
    overflow: hidden;
    padding: 1rem 0;
    background-color: #fff;
    margin-top: -1rem;
    ul {
      li {
        width: 20%;
        float: left;
        overflow: hidden;
        margin-top: 1rem;
        margin-left: 4%;
        span {
          font-size: 1.3rem;
          height: 2rem;
          text-align: center;
          width: 100%;
          color: #4a4a4a;
          line-height: 2rem;
          display: inline-block;
        }
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
