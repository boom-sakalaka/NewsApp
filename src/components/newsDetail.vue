<template>
  <div id="newsDetail">
    <div class="top-nav">
        <mt-header title="新闻详情">
          <!--<router-link to="/" slot="left">-->
          <mt-button icon="back" @click="changeIn" slot="left">返回</mt-button>
          <!--</router-link>-->
          <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    </div>
    <div class="content">
      <div class="title">{{newsDetail.title}}</div>
      <div class="message">
        <span>{{newsDetail.time}}</span>
        <span>{{newsDetail.src}}</span>
      </div>
      <img :src="newsDetail.pic" alt="新闻图片">
      <div class="news-content" v-html="newsDetail.content"></div>
    </div>
  </div>
</template>

<script>
  import store from '../store/store'
  import { Indicator } from 'mint-ui';
  export default {
    beforeCreate() {
      Indicator.open()
      setTimeout(()=> {
        Indicator.close()
      },2000)
    },
      store,
    computed :{
          newsDetailInfo (){
              return this.$store.state.newsDetail
          }
    },
    methods: {
      changeIn() {
        window.history.go(-1);
      }
    },
    computed: {
          newsDetail () {
              return this.$store.state.newsDetail
          }
    }
  }
</script>

<style type="text/stylus" scoped lang="stylus">
  .top-nav
    position: fixed
    z-index: 100
    width: 100%
    top: 0
    left: 0
  .content
    margin: 50px
    .title
      font-size: 24px;
      font-weight: 700;
      text-align: center;
    .message
      text-align: center;
      margin: 20px 0;
      color: #888;
      &,span
        margin-left: 10px
    img
      width: 100%
      height: 150px
      margin-bottom: 10px
    .news-content
      font-size: 18px;
      line-height: 30px;
      img
        display: block
        width: 100%


</style>
