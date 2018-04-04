<template>
  <div class="nav">
    <div class="nav-wrapper">
      <div class="nav-home" @click="goHome">
        <span class="icon-home" :class="{'icon-home-active':position===0}"></span>
        <span :class="{'red':position===0}">首页</span>
      </div>
      <div class="nav-shopping-cart" @click="goCart">
        <span class="icon-shopping-cart" :class="{'icon-shopping-cart-active':position===1}"></span>
        <span :class="{'red':position===1}">购物车</span>
        <div class="cartNum vux-1px" v-if="cartNum>0">{{cartNum}}</div>
      </div>
      <div class="nav-personal" @click="goMine">
        <span class="icon-personal" :class="{'icon-personal-active':position===2}"></span>
        <span :class="{'red':position===2}">我的</span>
      </div>
    </div>
  </div>
</template>

<script>
  import GoodsModel from '../../models/goods-model'

  const userId = '0340d49a98ea4017b5523433d8627212'

  export default {
    props: {
      position: {
        type: Number,
        default: 0
      }
    },
    data: function () {
      return {
        cartNum: 0
      }
    },
    methods: {
      goHome: function () {
        this.$router.push({
          path: '/index'
        })
      },
      goCart: function () {
        this.$router.push({
          path: '/shoppingCart'
        })
      },
      goMine: function () {
        this.$router.push({
          path: '/mine'
        })
      },
      init: function () {
        let params = {
          'user_id': userId
        }
        GoodsModel.cartList(params, (res) => {
          this.cartNum = res.data.cart_count
        })
      }
    },
    created: function () {
      this.init()
    }
  }
</script>

<style lang="less">
  //noinspection CssUnknownTarget
  @import '~common/less/mixin.less';

  .nav-shopping-cart {
    position: relative;
  }

  .cartNum {
    position: absolute;
    top: 0/@rem;
    left: 142/@rem;
    height: 22/@rem;
    min-width: 22/@rem;
    padding: 0 4/@rem;
    border-color: @red;
    border-radius: 11/@rem;
    color: @red;
    background: @white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1003;
    .dpr-font(9px);
    &:before {
      border-color: @red !important;
      border-radius: 44/@rem;
    }
  }

  .nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 97/@rem;
    z-index: 999;
    background: @white;
    box-shadow: 0 0 13/@rem rgba(0, 0, 0, 0.2);
    .nav-wrapper {
      display: flex;
      align-items: center;
      width: 100%;
      height: 97/@rem;
      position: relative;
      div {
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-top: 5/@rem;
        .dpr-font(10px);
        span {
          .dpr-font(10px);
          color: #999999;
        }
        span:nth-child(2) {
        }
      }
    }
  }

  .red {
    color: @red !important;
  }
</style>
