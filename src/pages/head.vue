<template>
  <div>
    <header class="head-wraper">
      <nav class="head clearfix">
        <img src="../assets/images/logo.png" alt="" class="logo fl">
        <div class="menu-nav fl clearfix">
          <a href="javascript:;" :class="{'active':activeIndex===index}" v-for="(item, index) in navList" :key="index" @click="changeHighlighted(item, index)">
            <span>{{item.text}}</span>
          </a>
        </div>
        <div class="search-box fl">
          <input type="text">
          <a href="#" target="_blank" class="serch-icon"></a>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        {
          name: 'main',
          text: '首页'
        },
        {
          name: 'community',
          text: '社区精选'
        },
        {
          name: 'about',
          text: '关于我们'
        },
        {
          name: 'join',
          text: '加入我们'
        },
        {
          name: 'cooperation',
          text: '招商合作'
        }
      ],
      activeIndex: 0
    }
  },
  computed: {
    activeRoute () {
      return this.$route.name
    }
  },
  methods: {
    changeHighlighted (item, index) {
      this.activeIndex = index
      this.$router.push({ name: item.name })
    }
  },
  mounted () {
    this.navList.forEach((item, index) => {
      if (this.activeRoute === item.name) {
        this.activeIndex = index
      }
    })
  }
}
</script>

<style scoped>
@import "../assets/styles/index.css";
</style>
