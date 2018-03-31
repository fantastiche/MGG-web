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
import {AlertPlugin, ToastPlugin} from 'vux'

Vue.use(VuxI18n)
FastClick.attach(document.body)
Vue.use(VueLazyload)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

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
