<template>
  <div class="content">
    <my-nav :position="2"></my-nav>
    <scroll ref="wrapper" class="scroll-content">
      <div class="mine">
        <div class="mine-info">
          <div class="mine-header">
            <span class="icon-set"></span>
            <span class="icon-massage"></span>
          </div>
          <div class="mine-head">
            <img src="./pic.png" alt="">
            <span class="icon-edit"></span>
          </div>
          <div class="mine-info-detail">
            <span>NMSL</span>
            <span>174****1111</span>
          </div>
        </div>
        <div class="block-order">
          <div class="block-order-item">
            <span class="icon-waiting-pay"></span>
            <span>待付款</span>
          </div>
          <div class="block-order-item">
            <span class="icon-waiting-sent"></span>
            <span>待发货</span>
          </div>
          <div class="block-order-item">
            <span class="icon-on-sent"></span>
            <span>已发货</span>
          </div>
          <div class="block-order-item">
            <span class="icon-after-sale"></span>
            <span>售后</span>
          </div>
        </div>
        <div class="mine-ctrl">
          <div class="mine-ctrl-item border-1px-e8" @click="goOrderList">
            <div class="mine-ctrl-item-left">
              <span class="icon-order"></span>
              <span>全部订单</span>
            </div>
            <div class="mine-ctrl-item-right">
              <span class="icon-skip"></span>
            </div>
          </div>
          <div class="mine-ctrl-item">
            <div class="mine-ctrl-item-left">
              <span class="icon-coin"></span>
              <span>美币</span>
            </div>
            <div class="mine-ctrl-item-right">
              <span>200</span>
              <span class="icon-skip"></span>
            </div>
          </div>
          <div class="mine-ctrl-item mt-20">
            <div class="mine-ctrl-item-left">
              <span class="icon-service"></span>
              <span>联系客服</span>
            </div>
            <div class="mine-ctrl-item-right">
              <span class="icon-skip"></span>
            </div>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/Scroll/Scroll'
  import MyNav from 'components/Nav/Nav'

  export default {
    components: {
      Scroll,
      MyNav
    },
    methods: {
      goOrderList: function () {
        this.$router.push({
          path: '/orderList'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  //noinspection CssUnknownTarget
  @import '~common/less/mixin.less';

  .content {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .scroll-content {
    height: 100%;
    overflow: hidden;
  }

  .mine {
    .mine-info {
      height: 440/@rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 30/@rem 30/@rem 67/@rem 30/@rem;
      background: #dbdbdb;
      .mine-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }
      .mine-head {
        width: 170/@rem;
        height: 170/@rem;
        background: url("./head.png") no-repeat center;
        background-size: 170/@rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        img {
          width: 145/@rem;
          height: 145/@rem;
          border-radius: 50%;
        }
        .icon-edit {
          position: absolute;
          bottom: 10/@rem;
          right: -5/@rem;
        }
      }
      .mine-info-detail {
        .dpr-font(16px);
        color: @white;
        span:first-child {
          margin-right: 50/@rem;
        }
      }
    }
    .block-order {
      height: 200/@rem;
      background: @white;
      display: flex;
      align-items: center;
      .block-order-item {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        span:nth-child(2) {
          .dpr-font(13px);
          color: #323232;
          margin-top: 5/@rem;
        }
      }
    }
    .mine-ctrl {
      margin-top: 20/@rem;
      .mine-ctrl-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 25/@rem;
        height: 120/@rem;
        background: @white;
        .mine-ctrl-item-left {
          display: flex;
          align-items: center;
          span:nth-child(2) {
            margin-left: 20/@rem;
            color: #323232;
            .dpr-font(14px);
          }
        }
        .mine-ctrl-item-right {
          display: flex;
          align-items: center;
          .dpr-font(14px);
          color: @red;
          span:nth-child(2) {
            margin-left: 13/@rem;
          }
        }
      }
    }
  }
</style>
