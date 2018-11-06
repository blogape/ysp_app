<template>
<div class="loading">
    <div class="main">
<img src="../../assets/images/loading.gif"/>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.loading {
  z-index: 99999;
  position: fixed;
  top: 0;
  width: 100%;
  text-align: center;
  height: 100%;
  background-color: #fff;
  left: 0;
  .main {
    position: relative;
    width: 100%;
    text-align: center;
    img {
      margin-top: 15rem;
      height: 30rem;
      width: auto;
    }
  }
}
</style>
