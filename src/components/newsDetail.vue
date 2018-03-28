<template>
  <div id="newsDetail">
    <mt-header title="新闻详情">
      <!--<router-link to="/" slot="left">-->
      <mt-button icon="back" @click="changeIn" slot="left">返回</mt-button>
      <!--</router-link>-->
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
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
  export default {
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
  .content
    margin: 20px
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
