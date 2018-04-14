/**
 * 接口地址与请求方法
 * @type {{ name : {path: string, method: string} }}
 */
const common = {
  categoryList: {
    path: 'goods/category/list',
    method: 'GET',
    port: '8002'
  },
  goods: {
    path: 'goods/:id',
    method: 'GET',
    port: '8002'
  },
  cartAdd: {
    path: 'order/cart/add',
    method: 'POST',
    port: '8004'
  },
  shopInfo: {
    path: 'user/shop/info/:id',
    method: 'GET',
    port: '8004'
  },
  cartList: {
    path: 'order/cart/list',
    method: 'POST',
    port: '8004'
  },
  cartUpdate: {
    path: 'order/cart/update',
    method: 'POST',
    port: '8004'
  },
  cartDelete: {
    path: 'order/cart/cartDeleteAll',
    method: 'POST',
    port: '8004'
  },
  beforeOrder: {
    path: 'order/order/toorder',
    method: 'POST',
    port: '8004'
  },
  orderAdd: {
    path: 'order/order/addorder',
    method: 'POST',
    port: '8004'
  },
  orderList: {
    path: 'order/order/orderlist',
    method: 'POST',
    port: '8004'
  },
  addressAdd: {
    path: 'order/address/add',
    method: 'POST',
    port: '8004'
  },
  sms: {
    path: 'sso/code/sms',
    method: 'GET'
  },
  pay: {
    path: 'qqs/appwx/toPay',
    method: 'POST'
  }
}

export default common
