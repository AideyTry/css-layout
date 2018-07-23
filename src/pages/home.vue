<template>
  <div class="framework">
    <heads></heads>
    <h1>仿小红书官网练习</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import Heads from './head'
export default {
  components: {
    Heads
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/index.css";
.framework h1{
 position:absolute;
 top:140px;
 left: 30%;
 color:#f00;
}
</style>
