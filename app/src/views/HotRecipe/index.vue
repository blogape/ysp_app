<template>
        <!-- 热门食谱 -->
    <div class="hotrecipe">
        <Header>热门食谱</Header>
        <div class="content">
          <van-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
          >
            <template class='template' >
            <!-- <Hotrecipe ></Hotrecipe> -->
            </template>
            </van-list>

        </div>
    </div>
</template>

<script>
import Header from "../../components/Header/";
import Hotrecipe from "../../components/Hottemplate/";
import { getHotData } from "../../services/api.js";
export default {
  data() {
    return {
      hotdata: "",
       loading: false,
      finished: false
    };
  },
  components: {
    Header,
    Hotrecipe
  },
  methods: {
    // 拿到热门食谱数据
    async getHotdata() {
      let gethotdata = await getHotData();
      // 绑定热门食谱数据
      this.hotdata = gethotdata.data;
      console.log(this.hotdata);
    },
    
  },
  mounted() {
    this.getHotdata();
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
