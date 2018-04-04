<template>
  <div class="pay">
    <div class="order">
      <div class="order-title">
        <span>订单编号:</span>
        <span>{{id}}</span>
      </div>
      <div class="order-info">
        <div>
          <span>订单合计:</span>
          <span>￥{{total}}</span>
        </div>
        <div>
          <span>应付金额:</span>
          <span class="text-red">￥{{total}}</span>
        </div>
      </div>
      <span class="circle-left circle"></span>
      <span class="circle-small-right circle-small"></span>
      <span class="circle-small-left circle-small"></span>
      <span class="circle-right circle"></span>
    </div>
    <div class="pay-way">
      <div class="pay-way-title border-1px-e8">请选择支付方式</div>
      <div class="pay-way-block border-1px-e8">
        <div class="pay-way-block-title">
          <span class="icon-pay-weixin"></span>
          <span>微信支付</span>
        </div>
        <div>
          <span :class="{'icon-check':payWay===0,'icon-uncheck':payWay!==0}" @click="payWay=0"></span>
        </div>
      </div>
      <div class="pay-way-block">
        <div class="pay-way-block-title">
          <span class="icon-pay-zhifubao"></span>
          <span>支付宝支付</span>
        </div>
        <div>
          <span :class="{'icon-check':payWay===1,'icon-uncheck':payWay!==1}" @click="payWay=1"></span>
        </div>
      </div>
    </div>
    <div class="pay-ctrl">
      <div class="pay-ctrl-wrapper">
        <div @click="pay">立即支付</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        id: '',
        total: 0,
        payWay: 0
      }
    },
    methods: {
      pay: function () {
        window.location.href = 'https://mggwx.gzqqs.com/qqs/jsp/pay/jsapi.jsp?openId=' + this.OPENID + '&money=' + this.total
      }
    },
    created: function () {
      this.id = this.$route.query.id
      this.total = this.$route.query.total
    }
  }
</script>

<style lang="less" scoped>
  //noinspection CssUnknownTarget
  @import '~common/less/mixin.less';

  .text-red {
    .dpr-font(15px) !important;
    color: @red !important;
  }

  .circle {
    display: inline-block;
    width: 14/@rem;
    height: 28/@rem;
    background: #f3f5f7;
    position: absolute;
    box-shadow: 0 4/@rem 6/@rem rgba(0, 0, 0, 0.2) inset;
  }

  .circle-left {
    border-radius: 0 14/@rem 14/@rem 0;
    left: 0;
    top: 76/@rem;
  }

  .circle-small {
    display: inline-block;
    width: 10/@rem;
    height: 22/@rem;
    background: #f3f5f7;
    position: absolute;
    z-index: 10001;
  }

  .circle-small-right {
    border-radius: 14/@rem 0 0 14/@rem;
    right: -4/@rem;
    top: 81/@rem;
  }

  .circle-small-left {
    border-radius: 0 14/@rem 14/@rem 0;
    left: -4/@rem;
    top: 81/@rem;
  }

  .circle-right {
    border-radius: 14/@rem 0 0 14/@rem;
    right: 0;
    top: 76/@rem;
  }

  .pay {
    height: 100%;
    width: 100%;
    overflow: scroll;
    .order {
      position: relative;
      margin: 20/@rem;
      background: @white;
      border-radius: 8/@rem;
      box-shadow: 0 4/@rem 6/@rem rgba(0, 0, 0, 0.2);
      .order-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30/@rem;
        height: 90/@rem;
        .dpr-font(14px);
        color: #333333;
        background: url("./order_bg_dotted-line.png") repeat-x bottom;
        background-size: 12/@rem 2/@rem;
      }
      .order-info {
        height: 100/@rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 40/@rem 30/@rem;
        .dpr-font(14px);
        color: #888888;
        div {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
    .pay-way {
      margin: 10/@rem 20/@rem;
      padding: 0 30/@rem;
      background: @white;
      border-radius: 8/@rem;
      border-left: 6/@rem solid @red;
      box-shadow: 0 4/@rem 6/@rem rgba(0, 0, 0, 0.2);
      .dpr-font(14px);
      .pay-way-title {
        height: 90/@rem;
        line-height: 90/@rem;
        color: #888888;
      }
      .pay-way-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100/@rem;
        .pay-way-block-title {
          display: flex;
          align-items: center;
          span:nth-child(2) {
            color: #333333;
            margin-left: 20/@rem;
          }
        }
      }
    }
    .pay-ctrl {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      display: flex;
      align-items: center;
      background: @white;
      .pay-ctrl-wrapper {
        padding: 20/@rem 30/@rem;
        flex-grow: 1;
        div {
          flex-grow: 1;
          .dpr-font(17px);
          display: flex;
          align-items: center;
          justify-content: center;
          height: 80/@rem;
          border-radius: 40/@rem;
          background: linear-gradient(to right, #ff3963, @red);
          color: @white;
        }
      }
    }
  }
</style>
