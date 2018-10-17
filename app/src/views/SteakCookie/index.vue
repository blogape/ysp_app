<template>
   <!-- 牛排机烹饪页面 -->
    <div class="steakCokkie">
        <Header>牛排机</Header>
        <div class="header">

        </div>
    </div>
</template>

<script>
import Header from '../../components/Header/index.vue';
export default {
    components:{
        Header
    }
}
</script>

<style lang='less' scoped>
.steakCokkie{
    .header{
        width: 100%;
        height: 5rem;
        border: 1px solid red;
    }
}
</style>
