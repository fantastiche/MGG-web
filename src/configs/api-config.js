/**
 * 接口地址与请求方法
 * @type {{ name : {path: string, method: string} }}
 */
const common = {
  goods: {
    path: 'goods/goods/:id',
    method: 'GET',
    port: '8002'
  },
  cartAdd: {
    path: 'order/order/cart/add',
    method: 'POST',
    port: '8004'
  },
  cartList: {
    path: 'order/order/cart/list',
    method: 'POST',
    port: '8004'
  },
  cartUpdate: {
    path: 'order/order/cart/update',
    method: 'POST',
    port: '8004'
  },
  cartDelete: {
    path: 'order/order/cart/cartDeleteAll',
    method: 'POST',
    port: '8004'
  },
  beforeOrder: {
    path: 'order/order/order/toorder',
    method: 'POST',
    port: '8004'
  },
  orderAdd: {
    path: 'order/order/order/addorder',
    method: 'POST',
    port: '8004'
  },
  orderList: {
    path: 'order/order/order/orderlist',
    method: 'POST',
    port: '8004'
  },
  addressAdd: {
    path: 'order/order/address/add',
    method: 'POST',
    port: '8004'
  }
}

export default common
