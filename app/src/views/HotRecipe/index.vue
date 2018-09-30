<template>
        <!-- 热门食谱 -->
    <div class="hotrecipe">
        <Header>热门食谱</Header>
        <div class="content">
            <template class='template'>
            <Hotrecipe></Hotrecipe>
                        <Hotrecipe></Hotrecipe>
            <Hotrecipe></Hotrecipe>

            </template>
        </div>
    </div>
</template>

<script>
import Header from "../../components/Header/";
import Hotrecipe from "../../components/Hottemplate/";
export default {
  components: {
    Header,
    Hotrecipe
  }
};
</script>

<style lang='less' scoped>
.hotrecipe {
  background-color: #fff;
  .content {
  }
}
</style>
