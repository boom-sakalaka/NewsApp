<template>
  <div id="register">
    <mt-header title="登录">
      <!--<router-link to="/" slot="left">-->
      <mt-button icon="back" @click="changeIn" slot="left">返回</mt-button>
      <!--</router-link>-->
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="register-info">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
      <!--<mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>-->
      <!--<mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>-->
      <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
      <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-model="introduction"></mt-field>
      <div class="ensure">
        <mt-button size="large" type="danger" @click="apply">申请账号</mt-button>
      </div>
    </div>
    <!--<footer-nav></footer-nav>-->
  </div>
</template>

<script>
//  import footerNav from '../components/footer'
    import { Indicator } from 'mint-ui';
  export default {
      data() {
          return {
              username: '',
              email: '',
              password: '',
              phone: '',
              website: '',
              number: '',
              birthday: '',
              introduction: ''
          }
      },
      components: {

      },
    methods: {
      changeIn() {
        window.history.go(-1)
      },
      apply() {
        Indicator.open('正在验证...')
          setTimeout(()=>{
              Indicator.close()
              this.$router.push('./index')
          },3000)

      }
    },
  }
</script>

<style type="text/stylus" scoped lang="stylus">
  #register
    height: 100%
    width: 100%
    .register-info
      margin-top: 30px
      opacity: 0.7
      .ensure
        width: 80%
        margin: 0 auto

</style>
