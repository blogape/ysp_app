<template>
<!-- 面包机食谱 -->
    <div class="brandrecipe">
        <!-- 头部导入 -->
        <Header>面包机食谱</Header>
     <!-- 选项卡 -->
    <van-tabs v-model="active">
    <van-tab title="综合最多">
        <Recipetemplate></Recipetemplate>
        <Recipetemplate></Recipetemplate>
        <Recipetemplate></Recipetemplate>
    </van-tab>
    <van-tab title="收藏最多">收藏最多</van-tab>
    <van-tab title="做过最多">做过最多</van-tab>
    </van-tabs>
    </div>
</template>

<script>
import Header from "../../components/Header/";
import Recipetemplate from "../../components/Recipetemplate/";
export default {
  data() {
    return {
    // 选项卡进入的值
      active: 0
    };
  },
  components: {
    Header,
    Recipetemplate
  }
};
</script>

<style lang='less' scoped>
</style>
