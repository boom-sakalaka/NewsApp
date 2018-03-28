import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import hotList from '../components/hotnews'
import user from  '../components/user'
import newsDetail from '../components/newsDetail'
import footer  from '../components/footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/hostList',
      name: 'hostList',
      component: hotList
    },
    {
      path: '/UserCenter',
      name: 'userCenter',
      component: user
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: newsDetail
    }
  ]
})
