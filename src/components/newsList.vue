<template>
  <div id="newsList">
    <div class="newsList">
      <div class="news-content">
        <div class="section" v-for="(item,index) in newsData" @click="toNewsDetail(item)">
          <div class="news">
            <div  class="news-left">
              <img  :src="item.pic" alt="">
            </div>
            <div class="news-right">
              <div class="newsTitle">{{item.title}}</div>
              <div class="newsMessage">
                <span class="news-time">{{item.time}}</span>
                <span class="news-source">{{item.src}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '../store/store'
  export default {
    store,
    computed :{
      newsData () {
        return this.$store.state.newsData
      }
    },
    methods: {
        toNewsDetail(item){
            this.$store.commit('getNewsDetail',item)
            this.$router.push({path:'/newsDetail'})
        }
    }
  }
</script>

<style type="text/stylus" scoped lang="stylus">
  .news-content
    padding-bottom : 56px
    .section
      width: 100%
      border-bottom: 1px solid #ccc
      .news
        box-sizing: border-box
        margin: 10px
        height: 75px
        .news-left
          height: 70px
          width: 30%
          float: left
          display: inline-block
          img
            display : inline-block
            width: 100%
            height: 100%
        .news-right
          padding-left :10px
          width: 70%
          float: right
          box-sizing : border-box
          .newsTitle
            width: 100%
            color: #404040
            font-size: 18px
            overflow: hidden
          .newsMessage
            margin-top : 10px
            span
              font-size : 6px
              color: darkgrey
              &.news-source
                float: right
</style>
