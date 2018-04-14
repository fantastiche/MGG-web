import apiConfig from '../configs/api-config'
import $http from '../util/api-util'

const GoodsModel = {
  // 商品详情
  categoryList: function (params, successCallback, failCallback, token) {
    let api = apiConfig.categoryList
    $http(api, params, function (res) {
      successCallback(res.data)
    }, token)
  },
  // 商品详情
  goods: function (params, successCallback, failCallback, token) {
    let api = apiConfig.goods
    $http(api, params, function (res) {
      successCallback(res.data)
    }, token)
  },
  // 加入购物车
  cartAdd: function (params, successCallback, failCallback, token) {
    let api = apiConfig.cartAdd
    $http(api, params, function (res) {
      successCallback(res.data)
    }, token)
  },
  // 购物车编辑
  cartUpdate: function (params, successCallback, failCallback, token) {
    let api = apiConfig.cartUpdate
    $http(api, params, function (res) {
      successCallback(res.data)
    }, token)
  },
  // 购物车列表
  cartList: function (params, successCallback, failCallback, token) {
    let api = apiConfig.cartList
    $http(api, params, function (res) {
      successCallback(res.data)
    }, token)
  },
  // 购物车编辑
  cartDelete: function (params, successCallback, failCallback, token) {
    let api = apiConfig.cartDelete
    $http(api, params, function (res) {
      successCallback(res.data)
    }, token)
  },
  // 获取预支付信息
  beforeOrder: function (params, successCallback, failCallback, token) {
    let api = apiConfig.beforeOrder
    $http(api, params, function (res) {
      successCallback(res.data)
    }, token)
  },
  // 提交订单
  orderAdd: function (params, successCallback, failCallback, token) {
    let api = apiConfig.orderAdd
    $http(api, params, function (res) {
      successCallback(res.data)
    }, token)
  },
  // 提交订单
  orderList: function (params, successCallback, failCallback, token) {
    let api = apiConfig.orderList
    $http(api, params, function (res) {
      successCallback(res.data)
    }, token)
  },
  // 添加地址
  addressAdd: function (params, successCallback, failCallback, token) {
    let api = apiConfig.addressAdd
    $http(api, params, function (res) {
      successCallback(res.data)
    }, token)
  },
  // 店主信息
  shopInfo: function (params, successCallback, failCallback, token) {
    let api = apiConfig.shopInfo
    $http(api, params, function (res) {
      successCallback(res.data)
    }, token)
  },
  // 获取验证码
  sms: function (params, successCallback, failCallback, token) {
    let api = apiConfig.sms
    $http(api, params, function (res) {
      successCallback(res.data)
    }, token)
  }
}

export default GoodsModel
