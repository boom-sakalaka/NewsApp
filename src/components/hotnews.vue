<template>
  <div class="hot-news">
    <div class="top-nav">
      <mt-header title="热点新闻">
        <!--<router-link to="/" slot="left">-->
        <mt-button icon="back" @click="changeIn" slot="left">返回</mt-button>
        <!--</router-link>-->
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    </div>
    <news-list></news-list>
    <!--<tabbar :selected="selected" :tabs='tabs'></tabbar>-->
    <footer-nav></footer-nav>
  </div>
</template>

<script>
//  import tabbar from './tabbar.vue'
  import newsList from '../components/newsList'
  import footerNav from '../components/footer'
  import { Indicator } from 'mint-ui';

export default {
    name: 'hotNews',
    beforeCreate() {
      Indicator.open()
      setTimeout(()=> {
        Indicator.close()
      },2000)
    },
    data () {
      return {
//        selected:"hotList",
//        tabs:[require("../assets/news.png"),require("../assets/hotnews.png"),
//          require("../assets/user.png")],
      }
    },
    methods: {
      changeIn() {
        window.history.go(-1);
      }
    },
    components: {
      newsList,
      footerNav
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/stylus" scoped lang="stylus">
  .top-nav
    position: fixed
    z-index: 100
    width: 100%
    top: 0
    left: 0
</style>
