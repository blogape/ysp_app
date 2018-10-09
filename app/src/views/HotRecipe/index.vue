<template>
        <!-- 热门食谱 -->
    <div class="hotrecipe">
        <Header>热门食谱</Header>
        <div class="content">
          <van-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
          :offset='20'
          >
            <template class='template' >
            <!-- <Hotrecipe v-for="(item,key) in list" :key='key' :data='item'></Hotrecipe> -->
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
      list: [],
      pagenumber: 0,
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
    // async getHotdata() {
    //   let gethotdata = await getHotData(1);
    //   // 绑定热门食谱数据
    //   this.hotdata = gethotdata.data;
    //   this.list=this.hotdata.list;
    //   console.log(this.hotdata);
    // },
    async onLoad() {
      // 绑定热门食谱数据
      this.pagenumber++;
      let gethotdata = await getHotData(this.pagenumber);
      this.hotdata = gethotdata.data;
      this.list.push(this.hotdata.list);
      let newArr = [].concat(this.list[0], this.list[1]);
            this.list=newArr;
        console.log(newArr);
      console.log(this.list);
    }
  },
  mounted() {
    this.onLoad();
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
