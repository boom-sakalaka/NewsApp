<template>
  <div id="user-Content">
    <mt-header title="个人中心">
      <!--<router-link to="/" slot="left">-->
      <mt-button icon="back" @click="changeIn" slot="left">返回</mt-button>
      <!--</router-link>-->
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="user-img">
      <div class="head-img"></div>
      <div class="user-name">V仔兽</div>
    </div>
    <div class="user-opration-list">
      <mt-cell title="我的收藏"  is-link>
        <img slot="icon" src="../assets/star.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="我的信息"  is-link>
        <img slot="icon" src="../assets/change.png" width="24" height="24">
      </mt-cell>
      <split></split>
      <mt-cell title="钱包"  is-link>
        <img slot="icon" src="../assets/pMoney.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="红包/活动"  is-link>
        <img slot="icon" src="../assets/redPk.png" width="24" height="24">
      </mt-cell>
      <split></split>
      <mt-cell title="游戏"  is-link>
        <img slot="icon" src="../assets/game.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="设置"  is-link>
        <img slot="icon" src="../assets/setting.png" width="24" height="24">
      </mt-cell>
    </div>
    <!--<tabbar :selected="selected" :tabs='tabs'></tabbar>-->
    <footer-nav></footer-nav>
  </div>
</template>

<script>
//  import tabbar from './tabbar'
  import split from './split'
  import footerNav from '../components/footer'
  export default {
    name: 'userContent',
    data () {
      return {
//        selected:"UserCenter",
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
      split,
      footerNav
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/stylus" scoped lang="stylus">

  .user-img
    width: 100%
    height: 150px
    position: relative
    background: url('../assets/background.jpg') no-repeat bottom
    background-size: cover
    .head-img
      position: absolute
      background: black
      width: 85px
      height: 85px
      border-radius: 42px
      margin-left: -42px
      margin-top: -42px
      background: url('../assets/userImg2.jpg') center no-repeat
      background-size: cover
      left: 50%
      top: 50%
    .user-name
      position: absolute
      color: #fff
      width: 100px
      text-align: center
      bottom : 0
      left: 50%
      margin-left: -50px
  .user-opration-list
      /*margin: 30px 30px 0  30px*/
      margin-top: 30px
</style>
