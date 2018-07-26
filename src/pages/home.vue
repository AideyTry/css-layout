<template>
  <div class="framework">
    <heads></heads>
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
@import "../assets/styles/index.css"
</style>
