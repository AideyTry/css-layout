<template>
  <div class="community">
    <div class="note-tab">
      <a href="javascript:;" :class="{'tab-active':activeIndex===index}" class="tab-item" v-for="(item, index) in tabItems" :key="index" @click="changeTab(item, index)">{{item.title}}</a>
    </div>
    <recommend v-if="activeTab==='recommend' || !activeTab"></recommend>
    <fasion v-if="activeTab==='fasion'"></fasion>
  </div>
</template>

<script>
import Recommend from './recommend'
import Fasion from './fasion'
export default {
  components: {
    Recommend,
    Fasion
  },
  data () {
    return {
      tabItems: [
        { title: '推荐', name: 'recommend' },
        { title: '时尚', name: 'fasion' },
        { title: '美妆', name: 'cosmetics' },
        { title: '美食', name: 'food' },
        { title: '运动', name: 'sport' },
        { title: '影音', name: 'media' },
        { title: '旅行', name: 'travel' },
        { title: '居家', name: 'home' },
        { title: '母婴', name: 'babycare' },
        { title: '读书', name: 'books' },
        { title: '数码', name: 'digital' },
        { title: '时尚男士', name: 'mens_fasion' },
        { title: '医药', name: 'medicine' }
      ],
      activeIndex: 0
    }
  },
  computed: {
    activeTab () {
      return this.$route.query.tab
    }
  },
  mounted () {
    this.tabItems.forEach((item, index) => {
      if (this.activeTab === item.name) {
        this.activeIndex = index
      }
    })
  },
  methods: {
    changeTab (item, index) {
      this.activeIndex = index
      this.$router.push({ name: 'community', query: { tab: item.name } })
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/index";
@import "./index";
</style>
