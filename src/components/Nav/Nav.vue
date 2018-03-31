<template>
  <div class="nav">
    <div class="nav-wrapper">
      <div class="nav-home">
        <span class="icon-home" :class="{'icon-home-active':position===0}"></span>
        <span :class="{'red':position===0}">首页</span>
      </div>
      <div class="nav-shopping-cart">
        <span class="icon-shopping-cart" :class="{'shopping-cart-active':position===1}"></span>
        <span :class="{'red':position===1}">购物车</span>
      </div>
      <div class="nav-personal">
        <span class="icon-personal" :class="{'personal-active':position===2}"></span>
        <span :class="{'red':position===2}">我的</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      position: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="less">
  //noinspection CssUnknownTarget
  @import '~common/less/mixin.less';

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
