<template>
  <scroll>
    <div class="content">
      <div class="warning">
        <span class="icon-warning"></span>
        <span>请填写真实姓名与登入手机号，否则将影响您的提现</span>
      </div>
      <div class="info-main">
        <div class="info-item">
          <span><span class="red">*</span>真实姓名:</span>
          <input type="text" v-model="name" placeholder="请输入真实姓名">
        </div>
        <div class="info-item">
          <span><span class="red">*</span>手机号码:</span>
          <input type="text" v-model="phone" placeholder="请输入手机号码">
        </div>
        <div class="info-item-code">
          <input type="text" placeholder="请输入验证码" v-model="code">
          <span @click="getSms" :class="{'red':status}">{{msg}}</span>
        </div>
      </div>
      <div class="warning">
        <span class="icon-warning"></span>
        <span>请填写您的收货地址，确保您能及时收到商品</span>
      </div>
      <div class="info-address">
        <div class="address-item">
          <input type="text" placeholder="收件人姓名" v-model="revName">
        </div>
        <div class="address-item">
          <input type="text" placeholder="收件人号码" v-model="revPhone">
        </div>
        <div class="address-item">
          <input type="text" placeholder="所在地区" readonly v-model="area" @click="show">
          <span class="icon-next"></span>
        </div>
        <group>
          <x-address style="display:none;" :popup-title="'请选择地址'" :title="'title'" v-model="value"
                     :list="addressData" placeholder="请选择地址" :show.sync="showAddress" :show-name="true"
                     @on-hide="onHide"></x-address>
        </group>
        <div class="address-item">
          <textarea placeholder="详细地址" v-model="address"></textarea>
        </div>
      </div>
      <div class="info-btn" :class="{'btn-active':name&&phone&&code&&revName&&revPhone&&area&&address}" @click="sub">
        提交
      </div>
    </div>
  </scroll>
</template>

<script>
  import Scroll from 'components/Scroll/Scroll'
  import {XAddress, Group, ChinaAddressV4Data} from 'vux'
  import GoodsModel from '../../models/goods-model'

  const USERID = '0340d49a98ea4017b5523433d8627212'

  export default {
    components: {
      Scroll,
      XAddress,
      Group
    },
    data: function () {
      return {
        area: '',
        showAddress: false,
        value: [['1']],
        addressData: ChinaAddressV4Data,
        status: false,
        phone: '',
        name: '',
        revName: '',
        revPhone: '',
        address: '',
        code: '',
        city: [],
        msg: '获取验证码'
      }
    },
    methods: {
      show: function () {
        this.showAddress = true
      },
      onHide: function (type) {
        if (type) {
          for (let i = 0; i < this.addressData.length; i++) {
            if (this.addressData[i].value === this.value[0]) {
              this.city[0] = (this.addressData[i].name)
            } else if (this.addressData[i].value === this.value[1]) {
              this.city[1] = (this.addressData[i].name)
            } else if (this.addressData[i].value === this.value[2]) {
              this.city[2] = (this.addressData[i].name)
            }
          }
          this.area = this.city.join('')
        }
      },
      sub: function () {
        if (this.name && this.phone && this.code && this.revName && this.revPhone && this.area && this.address) {
          // this.$vux.loading.show({
          //   text: '提交中'
          // })
          let params = {
            'user_id': USERID,
            'IS_DEFAULT': 1,
            'ADDR_REALNAME': this.name,
            'ADDR_PHONE': this.phone,
            'ADDR_CITY': this.area,
            'ADDRESS': this.address
          }
          GoodsModel.addressAdd(params, (res) => {
            // let params = {
            //   'user_id': USERID,
            //   'spec_id': sessionStorage.getItem('specId'),
            //   'goods_count': 1,
            //   'goods_id': sessionStorage.getItem('goodsId'),
            //   'address_id': this.address.address_id,
            //   'usercoupon_id': '',
            //   'usercoin_id': '',
            //   'shopCode': '012345',
            //   'payAmount': 0
            // }
            // GoodsModel.orderAdd(params, (res) => {
            //   console.log(res)
            //   this.$vux.toast.show({
            //     text: '订单创建成功！',
            //     time: 3000,
            //     type: 'success'
            //   })
            //   if (res.data.result === 1) {
            //     this.$router.push({
            //       path: '/orderPay',
            //       query: {
            //         id: res.data.order_id,
            //         total: res.data.order_total
            //       }
            //     })
            //   }
            // })
          })
        }
      },
      getSms: function () {
        if (!this.status) {
          if (!this.phone) {
            this.$vux.toast.show({
              text: '请输入您的手机号',
              type: 'cancel'
            })
            return
          }
          if (!(/^1[0-9][0-9]\d{4,8}$/.test(this.phone))) {
            this.$vux.toast.show({
              text: '请输入正确的手机号',
              type: 'cancel',
              width: '4rem'
            })
            return
          }
          let params = {
            mobile: this.phone
          }
          let timestamp = parseInt(Date.parse(new Date()))
          let current = timestamp + 60000
          localStorage.setItem('currentTime', current)
          GoodsModel.sms(params, (res) => {
            this.status = true
            let time = (localStorage.getItem('currentTime') - parseInt(Date.parse(new Date()))) / 1000
            sessionStorage.setItem('status', this.status)
            this.msg = time + '秒'
            setInterval(() => {
              time = (localStorage.getItem('currentTime') - parseInt(Date.parse(new Date()))) / 1000
              this.msg = time + '秒'
              if (time < 0 || time === 0) {
                sessionStorage.removeItem('status')
                this.status = false
                this.msg = '获取验证码'
              }
            }, 1000)
          })
        }
      }
    },
    created: function () {
      let time = (localStorage.getItem('currentTime') - parseInt(Date.parse(new Date()))) / 1000
      if (time > 0) {
        this.status = true
        localStorage.setItem('status', this.status)
        this.msg = time + '秒'
        setInterval(() => {
          time = (localStorage.getItem('currentTime') - parseInt(Date.parse(new Date()))) / 1000
          this.msg = time + '秒'
          if (time < 0 || time === 0) {
            localStorage.removeItem('status')
            this.status = false
            this.msg = '获取验证码'
          }
        }, 1000)
      }
    }
  }
</script>

<style lang="less" scoped>
  //noinspection CssUnknownTarget
  @import '~common/less/mixin.less';

  input {
    height: 60/@rem;
    .dpr-font(13px);
    color: #333333;
    border: 1px solid #cccccc;
    padding-left: 16/@rem;
    border-radius: 8/@rem;
  }

  input::placeholder {
    color: #cccccc;
  }

  textarea {
    resize: none;
    .dpr-font(13px);
    color: #333333;
    border: 1px solid #cccccc;
    padding: 20/@rem 16/@rem;
    border-radius: 8/@rem;
  }

  textarea::placeholder {
    color: #cccccc;
  }

  .content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #ffffff;
    .warning {
      height: 40/@rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(230, 0, 18, 0.3);
      span {
        font-size: 24/@rem;
        color: #ffffff;
        margin-right: 10/@rem;
      }
    }
    .info-main {
      padding: 34/@rem 30/@rem;
      background: #ffffff;
      .info-item {
        display: flex;
        align-items: center;
        .dpr-font(14px);
        color: #333333;
        margin-bottom: 24/@rem;
        input {
          flex-grow: 1;
          margin-left: 28/@rem;
        }
      }
      .info-item-code {
        padding-left: 160/@rem;
        display: flex;
        align-items: center;
        position: relative;
        input {
          flex-grow: 1;
        }
        span {
          position: absolute;
          right: 0;
          height: 60/@rem;
          width: 200/@rem;
          font-size: 26/@rem;
          border: 1px solid #cccccc;
          color: #333333;
          border-radius: 8/@rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .info-address {
      padding: 34/@rem 30/@rem;
      .address-item {
        display: flex;
        align-items: center;
        position: relative;
        margin-bottom: 40/@rem;
        input, textarea {
          flex-grow: 1;
        }
        textarea {
          height: 120/@rem;
        }
        .icon-next {
          position: absolute;
          right: 20/@rem;
        }
      }
    }
    .info-btn {
      margin: 30/@rem;
      text-align: center;
      height: 90/@rem;
      .dpr-font(17px);
      color: #ffffff;
      background: #cccccc;
      border-radius: 45/@rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .btn-active {
    background: linear-gradient(to right, #ff3963, @red) !important;
  }

  .red {
    color: @red !important;
  }
</style>
