<template>
  <div id="userLogin">
    <mt-header title="登录">
      <!--<router-link to="/" slot="left">-->
      <!--</router-link>-->
      <!--<mt-button icon="more" slot="right"></mt-button>-->
    </mt-header>
    <div class="user-login-box">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-button type="danger" size="large" @click="logging">登录</mt-button>
      <div class="login-options">
        <span class="register" @click="register">注册账号</span>
        <span class="forget-passworld">忘记密码</span>
      </div>
    </div>
    <p class="reading">登录表示阅读并同意<span>服务条款</span></p>
    <!--<footer-nav></footer-nav>-->
  </div>
</template>

<script>
//  import footerNav from '../components/footer'
import { Indicator } from 'mint-ui';
export default {
  data() {
      return {
          username:'',
          password: ''
      }
  },
  methods: {
    changeIn() {
      window.history.go(-1);
    },
    logging() {
      Indicator.open('登录中...')
      setTimeout(() => {
          Indicator.close()
          this.$router.push('/index')
      },3000)
    },
    register() {
        this.$router.push('/register')
    }
  },
  components : {

  }
}
</script>

<style type="text/stylus" scoped lang="stylus">
  #userLogin
    width: 100%
    height: 100%
    position:relative
    background: url('../assets/dancer.jpg')  no-repeat
    background-size: cover
    .user-login-box
      width: 100%
      padding: 0 20px
      box-sizing: border-box
      position: absolute
      top: 45%
      transform: translateY(-50%)
      opacity: 0.7
      .login-options
        width: 100%
        display: flex
        margin-top: 10px
        font-size: 16px
        color: #26a2ff
        .register
          flex: 1
          text-align: left
          padding-left: 10px
        .forget-passworld
          flex: 1
          padding-right: 10px
          text-align: right


    p
      width: 100%
      text-align: center
      position: absolute
      font-size: 16px
      bottom: 60px
      color: #fff
      span
        color: #26a2ff
</style>
