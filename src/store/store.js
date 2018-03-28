import Vue from 'vue'
import  Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  channels: '',
  newsData: '',
  showImg: '',
  newsDetail: ''
}
const mutations ={
  getChannelList(state,data){
    state.channels = data
  },
  getNewsDataInfo (state,data) {
    state.newsData = data
  },
  showImg(state,jec) {
    state.showImg = jec
  },
  getNewsDetail(state,data){
    state.newsDetail =data
  }
}

var actions = {
  getChannel ({commit}) {
    axios.get("/api/news/channel?appkey=3ee822003d99a601").then((res) => {
      commit('getChannelList',res.data.result)
    })
  },
  getNewsDataList ({commit},channel) {
      let url ='/api/news/get?channel='+channel+'&start=0&num=10&appkey=3ee822003d99a601'
      axios.get(url).then((res) => {
        commit('getNewsDataInfo',res.data.result.list)
        if(channel == "头条"){
          commit('showImg',true)
        }else {
          commit('showImg',false)
        }
      })
  }
}
var vuexStore =new Vuex.Store({
  state,
  mutations,
  actions
})


export  default vuexStore
