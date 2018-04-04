// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import store from './store'
import VueLazyload from 'vue-lazyload'
// import {AlertPlugin, ToastPlugin, LoadingPlugin, ConfirmPlugin} from 'vux'
import 'babel-polyfill'
import 'lib-flexible'
import VuxI18n from 'vuex-i18n'
import {AlertPlugin, ToastPlugin, ConfirmPlugin} from 'vux'

Vue.use(VuxI18n)
FastClick.attach(document.body)
Vue.use(VueLazyload)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.prototype.USERID = '0340d49a98ea4017b5523433d8627212'
// if (sessionStorage.getItem('openId')) {
//   Vue.prototype.OPENID = sessionStorage.getItem('openId')
// } else {
//   Vue.prototype.OPENID = location.href.split('?')[1].split('&')[0].split('=')[1]
//   sessionStorage.setItem('openId', location.href.split('?')[1].split('&')[0].split('=')[1])
// }

Vue.prototype.GOODSID = location.href.split('?')[1].split('=')[1]
sessionStorage.setItem('goodsId', location.href.split('?')[1].split('=')[1])

Vue.config.productionTip = false

// Vue.use(AlertPlugin)
// Vue.use(ToastPlugin)
// Vue.use(LoadingPlugin)
// Vue.use(ConfirmPlugin)

/* eslint-disable no-new */
new Vue({
  router: router,
  store: store,
  render: h => h(App)
}).$mount('#app-box')
