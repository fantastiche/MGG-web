<template>
  <scroll ref="wrapper" class="scroll-content" @scroll="scroll" :probeType="3">
    <div class="content" ref="content">
      <div class="content-warpper" ref="contentWrapper">
        <div class="swiper-wrapper">
          <swiper ref="swiper" :list="picList" style="width:100%;margin:0 auto;" :aspect-ratio="750/750"
                  dots-position="center" :show-dots="false" @on-index-change="change"
                  :show-desc-mask="false" :auto="true" :loop="true" :interval="3000"></swiper>
          <div class="swiper-num">
            <span>{{current+1}}/{{picLegth}}</span>
          </div>
        </div>
        <div class="goods-title">
          <div class="goods-title-name">{{goods.goodsName}}</div>
          <div class="goods-title-intro">{{goods.goodsTitle}}</div>
          <div class="goods-title-price">
            <span>￥{{goods.salesPrice}}</span>
            <span>￥{{goods.goodsPrice}}</span>
          </div>
        </div>
        <!--<div class="goods-activity">-->
        <!--<span>活动</span>-->
        <!--<span>买赠</span>-->
        <!--<span>赠兰蔻香水小样 仅限前5000名</span>-->
        <!--</div>-->
        <div class="goods-spec" @click="buy">
          <span>规格选择</span>
          <span class="arrow-right"></span>
        </div>
      </div>
      <div class="goods-detail" ref="detail">
        <div class="goods-detail-title" ref="detailTitle">
          <span :class="{'detail-active':detailActive===0}" @click="goodsIntro">商品介绍</span>
          <span :class="{'detail-active':detailActive===1}" @click="goodsSize">规格参数</span>
          <span :class="{'detail-active':detailActive===2}" @click="goodsInfo">购买须知</span>
        </div>
        <router-view></router-view>
      </div>
    </div>
    <div class="content-header border-1px" ref="header">
      <span :class="{'active':active===0}" ref="titleGoods" @click="goGoods(true)">商品</span>
      <span :class="{'active':active===1}" @click="goDetail(true)">详情</span>
      <span class="active-line" ref="line"></span>
    </div>
    <div class="goods-detail-title goods-detail-active" v-if="detailShow">
      <span :class="{'detail-active':detailActive===0}" @click="goodsIntro">商品介绍</span>
      <span :class="{'detail-active':detailActive===1}" @click="goodsSize">规格参数</span>
      <span :class="{'detail-active':detailActive===2}" @click="goodsInfo">购买须知</span>
    </div>
    <div class="goods-ctrl">
      <div class="goods-ctrl-icon vux-1px-r" @click="shoppingCart">
        <span class="icon-shopping-cart"></span>
        <span>购物车</span>
        <div class="cartNum vux-1px" v-if="cartNum>0">{{cartNum}}</div>
      </div>
      <div class="goods-ctrl-icon vux-1px-r" @click="goMine">
        <span class="icon-personal"></span>
        <span>我的</span>
      </div>
      <div class="goods-ctrl-add" @click="addCart">加入购物车</div>
      <div class="goods-ctrl-buy" @click="buy">立即购买</div>
    </div>
    <spec-choose :goodsId="goodsId" @enable="enable" ref="spec" :goods="goods" :attrs="goods.attrs"
                 :specs="goods.specs" @cartCount="cartCount" @sub="sub" @addIntoCart="addIntoCart"></spec-choose>
  </scroll>
</template>

<script>
  import {Swiper} from 'vux'
  import Scroll from 'components/Scroll/Scroll'
  import {mapGetters, mapActions} from 'vuex'
  import SpecChoose from 'components/SpecChoose/SpecChoose'
  import GoodsModel from '../../models/goods-model'

  export default {
    name: 'index',
    components: {
      Scroll,
      Swiper,
      SpecChoose
    },
    data: function () {
      return {
        picList: [],
        picLegth: 0,
        current: 0,
        active: 0,
        detailActive: 0,
        detailShow: false,
        specShow: false,
        goods: {},
        goodsId: this.GOODSID,
        cartNum: 0
      }
    },
    methods: {
      init: function () {
        let params = {
          id: this.GOODSID
        }
        GoodsModel.goods(params, (res) => {
          console.log(res)
          this.goods = res.data
          this.picLegth = this.goods.goodsPic.length
          for (let i = 0; i < this.goods.goodsPic.length; i++) {
            this.picList.push({
              url: 'javascript:',
              img: 'http://119.23.27.158:8070' + this.goods.goodsPic[i]
            })
          }
          params = {
            'user_id': '0340d49a98ea4017b5523433d8627212'
          }
          GoodsModel.cartList(params, (res) => {
            this.cartNum = res.data.cart_count
          })
          this.goods.goodsPrice = this.goods.goodsPrice.toFixed(2)
          this.goods.salesPrice = this.goods.salesPrice.toFixed(2)
        })
      },
      buy: function () {
        this.$refs.spec.ation = true
        this.$refs.spec.show = true
        this.$refs.wrapper.disable()
        this.$nextTick(() => {
        })
      },
      shoppingCart: function () {
        this.$router.push({
          path: '/shoppingCart'
        })
      },
      addCart: function () {
        this.$refs.spec.ation = false
        this.$refs.spec.show = true
        this.$refs.wrapper.disable()
        this.$nextTick(() => {
        })
      },
      cartCount: function (cartNum) {
        this.cartNum = cartNum
      },
      enable: function () {
        this.$refs.wrapper.enable()
      },
      scroll: function (pos) {
        if (pos.y > 0) {
          this.$refs.wrapper.scrollToElement(this.$refs.content)
        }
        this.$refs.header.style.opacity = -(pos.y) / 250
        if ((-pos.y) > (this.$refs.contentWrapper.offsetHeight - this.$refs.detailTitle.offsetHeight + 10)) {
          this.detailShow = true
          this.goDetail(false)
        } else {
          this.detailShow = false
          this.goGoods(false)
        }
      },
      change: function (index) {
        this.current = index
      },
      goMine: function () {
        this.$router.push({
          path: '/mine'
        })
      },
      goDetail: function (click) {
        this.active = 1
        this.$refs.line.style.left = ((this.$refs.header.offsetWidth - 70) / 2 + 36) + 'px'
        if (click) {
          this.detailShow = true
          this.$refs.header.style.opacity = 1
          this.$refs.wrapper.scrollToElement(this.$refs.detail)
        }
      },
      goGoods: function (click) {
        this.active = 0
        this.$refs.line.style.left = ((this.$refs.header.offsetWidth - 70 - 6) / 2) + 'px'
        if (click) {
          this.detailShow = false
          this.$refs.header.style.opacity = 0
          this.$refs.wrapper.scrollToElement(this.$refs.content)
        }
      },
      goodsIntro: function () {
        this.detailActive = 0
        this.$router.replace({
          path: '/index/goodsDetail'
        })
      },
      goodsSize: function () {
        this.detailActive = 1
        this.$router.replace({
          path: '/index/goodsType'
        })
      },
      goodsInfo: function () {
        this.detailActive = 2
        this.$router.replace({
          path: '/index/goodsInfo'
        })
      },
      sub: function () {
        let params = {
          'user_id': '0340d49a98ea4017b5523433d8627212',
          'spec_id': this.specId,
          'goods_count': this.num,
          'goods_id': this.goodsId
        }
        this.$router.push({
          path: '/orderConfirm',
          query: {
            userId: params.user_id,
            specId: params.spec_id,
            goodsCount: params.goods_count,
            goodsId: params.goods_id
          }
        })
      },
      addIntoCart: function () {
        let params = {
          'user_id': '0340d49a98ea4017b5523433d8627212',
          'spec_id': this.specId,
          'goods_count': this.num,
          'goods_id': this.goodsId
        }
        GoodsModel.cartAdd(params, (res) => {
          if (res.data.result === 1) {
            this.$emit('cartCount', res.data.cart_count)
            this.hide()
          }
        })
      },
      ...mapActions([
        'showMask',
        'hideMask'
      ])
    },
    created: function () {
      this.init()
      let src = location.href.split('/')[location.href.split('/').length - 1]
      switch (src) {
        case 'goodsDetail': {
          this.detailActive = 0
          break
        }
        case 'goodsType': {
          this.detailActive = 1
          break
        }
        case 'goodsInfo': {
          this.detailActive = 2
          break
        }
      }
    },
    mounted: function () {
      this.$nextTick(() => {
        this.$refs.line.style.left = ((this.$refs.header.offsetWidth - 70 - 6) / 2) + 'px'
      })
    },
    computed: {
      ...mapGetters([
        'mask'
      ])
    },
    watch: {}
  }
</script>

<style lang="less" scoped>
  //noinspection CssUnknownTarget
  @import '~common/less/mixin.less';

  .active {
    color: @red;
  }

  .detail-active {
    background: @h1 !important;
    color: @white !important;
  }

  .active-line {
    display: inline-block;
    width: 75/@rem;
    height: 2/@rem;
    background: @red;
    position: absolute;
    bottom: 3/@rem;
    transition: left 0.3s;
  }

  .scroll-content {
    height: 100%;
    overflow: hidden;
  }

  .content-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    height: 88/@rem;
    background: @white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    .dpr-font(15px);
    color: @grey;
    span {
      display: inline-block;
      text-align: center;
    }
    span:first-child {
      margin-right: 10px;
    }
  }

  .content {
    position: relative;
    min-height: 100%;
    padding-bottom: 120/@rem;
    .content-warpper {
      padding-bottom: 20/@rem;
      .swiper-wrapper {
        position: relative;
        .swiper-num {
          position: absolute;
          right: 0;
          bottom: 40/@rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 66/@rem;
          height: 36/@rem;
          border-radius: 18/@rem 0 0 18/@rem;
          background: rgba(0, 0, 0, 0.15);
          color: #ffffff;
          text-align: center;
          .dpr-font(10px);
          span {
            line-height: 16/@rem;
          }
        }
      }
      .goods-title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        background: @white;
        padding: 28/@rem 40/@rem;
        .goods-title-name {
          .dpr-font(15px);
          color: @h1;
        }
        .goods-title-intro {
          .dpr-font(12px);
          color: @intro;
        }
        .goods-title-price {
          span:first-child {
            .dpr-font(14px);
            color: @red;
          }
          span:nth-child(2) {
            .dpr-font(12px);
            color: @grey;
            text-decoration: line-through;
            margin-left: 40/@rem;
          }
        }
      }
      .goods-activity {
        margin-top: 20/@rem;
        height: 92/@rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: @white;
        padding: 0 40/@rem;
        span:first-child {
          .dpr-font(14px);
          color: @grey;
        }
        span:nth-child(2) {
          .dpr-font(8px);
          border: 1px solid @red;
          color: @red;
          margin-left: 20/@rem;
          margin-right: 10/@rem;
        }
        span:nth-child(3) {
          .dpr-font(12px);
          color: @intro;
        }
      }
      .goods-spec {
        background: @white;
        height: 92/@rem;
        padding: 0 40/@rem;
        margin-top: 20/@rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span:first-child {
          .dpr-font(14px);
          color: @grey;
        }
      }
    }
  }

  .goods-detail {
    position: relative;
  }

  .goods-detail-title {
    z-index: 999;
    width: 100%;
    padding: 20/@rem 0;
    background: @white;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      display: inline-block;
      width: 217/@rem;
      height: 60/@rem;
      line-height: 60/@rem;
      .dpr-font(12px);
      border: 1px solid @h1;
      color: @h1;
      text-align: center;
    }
    span:first-child {
      border-right: none;
      border-radius: 12/@rem 0 0 12/@rem;
    }
    span:nth-child(3) {
      border-left: none;
      border-radius: 0 12/@rem 12/@rem 0;
    }
  }

  .goods-detail-active {
    position: absolute;
    top: 88/@rem;
    left: 0;
  }

  .goods-ctrl {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 99/@rem;
    display: flex;
    align-items: center;
    background: @white;
    box-shadow: 0 0 13/@rem rgba(0, 0, 0, 0.2);
    .goods-ctrl-icon {
      width: 124/@rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      position: relative;
      .cartNum {
        position: absolute;
        top: 5/@rem;
        left: 70/@rem;
        height: 22/@rem;
        padding: 0 4/@rem;
        border-color: @red;
        color: @red;
        background: @white;
        display: flex;
        align-items: center;
        justify-content: center;
        .dpr-font(9px);
        &:before {
          border-color: @red !important;
          border-radius: 22/@rem;
        }
      }
    }
    .goods-ctrl-add {
      flex-grow: 1;
      text-align: center;
      .dpr-font(16px);
      color: #333333;
      height: 100%;
      line-height: 99/@rem;
    }
    .goods-ctrl-buy {
      text-align: center;
      .dpr-font(16px);
      color: @white;
      background: linear-gradient(to right, #ff3963, @red);
      height: 100%;
      line-height: 99/@rem;
      width: 250/@rem;
    }
  }

</style>
