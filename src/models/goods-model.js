import apiConfig from '../configs/api-config'
import $http from '../util/api-util'

const GoodsModel = {
  // 商品详情
  goods: function (params, successCallback, failCallback, token) {
    let api = apiConfig.goods
    $http(api, params, function (res) {
      successCallback(res.data)
    }, token)
  }
}

export default GoodsModel
