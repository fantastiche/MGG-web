import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '../components/PageTransition/PageTransition'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageTransition',
      component: PageTransition,
      children: [{
        path: '/',
        redirect: '/index'
      }, {
        path: '/index',
        name: 'index',
        component: resolve => require(['../views/Index/index.vue'], resolve)
      }, {
        path: '/mine',
        name: 'mine',
        component: resolve => require(['../views/Mine/mine.vue'], resolve)
      }, {
        path: '/shoppingCart',
        name: 'shoppingCart',
        component: resolve => require(['../views/ShoppingCart/shopping-cart-list.vue'], resolve)
      }, {
        path: '/orderConfirm',
        name: 'orderConfirm',
        component: resolve => require(['../views/Order/order-confirm.vue'], resolve)
      }, {
        path: '/orderList',
        name: 'orderList',
        component: resolve => require(['../views/Order/order-list.vue'], resolve)
      }, {
        path: '/orderPay',
        name: 'orderPay',
        component: resolve => require(['../views/Order/order-pay.vue'], resolve)
      }, {
        path: '/addressEdit',
        name: 'addressEdit',
        component: resolve => require(['../views/Address/address-edit.vue'], resolve)
      }, {
        path: '/goodsIndex',
        name: 'goodsIndex',
        component: resolve => require(['../views/Goods/goods-index.vue'], resolve),
        children: [{
          path: '/goodsIndex/goodsDetail',
          name: 'goodsDetail',
          component: resolve => require(['../views/Goods/goods-detail.vue'], resolve)
        }, {
          path: '/goodsIndex/goodsType',
          name: 'goodsType',
          component: resolve => require(['../views/Goods/goods-type.vue'], resolve)
        }, {
          path: '/goodsIndex/goodsInfo',
          name: 'goodsInfo',
          component: resolve => require(['../views/Goods/goods-info.vue'], resolve)
        }]
      }]
    }
  ]
})
