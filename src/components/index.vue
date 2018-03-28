<template>
  <div id="index">
    <mt-header title="主页">
      <!--<router-link to="/" slot="left">-->
      <!--</router-link>-->
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--头部导航栏开始-->
    <div class="nav">
      <mt-button size="small" @click="getNewsData(channels[0])">{{channels[0]}}</mt-button>
      <mt-button size="small" @click="getNewsData(channels[1])">{{channels[1]}}</mt-button>
      <mt-button size="small" @click="getNewsData(channels[2])">{{channels[2]}}</mt-button>
      <mt-button size="small" @click="getNewsData(channels[3])">{{channels[3]}}</mt-button>
      <mt-button size="small" @click="getNewsData(channels[4])">{{channels[4]}}</mt-button>
      <mt-button size="small" @click="getNewsData(channels[5])">{{channels[5]}}</mt-button>
    </div>
    <!--头部导航栏结束-->


    <!--轮播图组件开始-->
    <div class="swi" v-show="$store.state.showImg">
      <mt-swipe :auto="4000" showIndicators>
        <mt-swipe-item><img src="../assets/news-1.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../assets/news-2.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../assets/news-3.jpg"></mt-swipe-item>
      </mt-swipe>
    </div>
    <!--轮播图组件结束-->

    <!--新闻列表开始-->
      <news-list></news-list>
    <!--新闻列表结束-->

    <!--底部导航-->
    <!--<tabbar :selected="selected" :tabs='tabs'></tabbar>-->
    <footer-nav></footer-nav>
  </div>
</template>

<script>
  import tabbar from './tabbar.vue'
  import store from '../store/store'
  import newsList from '../components/newsList'
  import footerNav from '../components/footer'

export default {
  created(){
    this.getChannelInfo()
    this.getNewsData('头条')
  },
  name: 'Index',
  store,
  data () {
    return {
      active: 'tab-container1',
//      selected:"MainPage",
//      tabs:[require("../assets/news.png"),require("../assets/hotnews.png"),
//        require("../assets/user.png")],
    }
  },
  methods:{
    getChannelInfo(){
      this.$store.dispatch('getChannel')
    },
    getNewsData(index) {
        this.$store.dispatch('getNewsDataList',index)
    }
  },
  computed : {
      channels (){
          return this.$store.state.channels
      },
  },
  components: {
      newsList,
      footerNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/stylus"  lang="stylus">
  .swi
    width: 100%
    height: 150px
    img
      width: 100%
      height: 100%

</style>
