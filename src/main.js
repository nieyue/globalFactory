import Vue from 'vue'
import App from './App'
import router from './router/router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Qs from 'qs'


Vue.config.productionTip = false
//初始化axios的请求域名
axios.defaults.baseURL="https://wx.51bushou.com";
//初始化axios的请求头类型
axios.defaults.headers["Content-Type"]="application/x-www-form-urlencoded";
//使用qs的格式化数据
Vue.prototype.Qs=Qs
//把sxios注入vue
Vue.use(VueAxios, axios)
//mintUI注入vue
Vue.use(MintUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
