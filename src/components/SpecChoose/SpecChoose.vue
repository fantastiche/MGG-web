<template>
  <div v-if="show" class="spec-mask-wrapper">
    <div class="mask" @click="hide"></div>
    <scroll class="scroll-content">
      <div class="spec-choose" ref="spec">
        <div class="spec-choose-wrapper">
          <span class="icon-close" @click="hide"></span>
          <div class="goods-pic">
            <img src="./pic.png" alt="">
          </div>
          <div class="goods-info border-1px-e5">
            <span>￥299.00</span>
            <span>库存 88</span>
            <span>请选择规格</span>
          </div>
          <div class="goods-spec border-1px-e5">
            <div class="goods-spec-title">规格</div>
            <div class="goods-spec-detail">
          <span v-for="(item, index) in spec" :class="{'active':item.active}"
                @click="choose(item, index)">{{item.title}}</span>
            </div>
            <div class="goods-spec-title">规格</div>
            <div class="goods-spec-detail">
          <span v-for="(item, index) in spec" :class="{'active':item.active}"
                @click="choose(item, index)">{{item.title}}</span>
            </div>
            <div class="goods-spec-title">规格</div>
            <div class="goods-spec-detail">
          <span v-for="(item, index) in spec" :class="{'active':item.active}"
                @click="choose(item, index)">{{item.title}}</span>
            </div>
          </div>
          <div class="goods-num">
            <span class="goods-num-title">数量</span>
            <div class="goods-num-ctrl">
              <span @click="sub">－</span>
              <input type="text" v-model="num">
              <span @click="add">＋</span>
            </div>
          </div>
          <div class="goods-ctrl">
            <div class="goods-ctrl-add">加入购物车</div>
            <div class="goods-ctrl-buy" @click="buy">立即购买</div>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/Scroll/Scroll'

  const map = [{
    title: '30ml',
    active: false
  }, {
    title: '50ml',
    active: false
  }, {
    title: '100ml',
    active: false
  }]

  export default {
    components: {
      Scroll
    },
    data: function () {
      return {
        spec: map,
        num: 1,
        show: false
      }
    },
    methods: {
      choose: function (item, index) {
        this.spec.forEach((item, index, array) => {
          item.active = false
        })
        item.active = true
        this.$set(this.spec, index, item)
      },
      add: function () {
        this.num++
      },
      sub: function () {
        if (this.num > 1) {
          this.num--
        }
      },
      hide: function () {
        this.$nextTick(() => {
          this.$refs.spec.style.top = `100%`
        })
        setTimeout(() => {
          this.show = false
        }, 300)
      },
      buy: function () {
        this.$router.push({
          path: '/orderConfirm'
        })
      }
    },
    created: function () {
    },
    watch: {
      show: function (val, oldVal) {
        if (val) {
          this.$nextTick(() => {
            this.$refs.spec.style.top = `${(document.documentElement.clientHeight - this.$refs.spec.offsetHeight)}px`
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  //noinspection CssUnknownTarget
  @import '~common/less/mixin.less';

  .scroll-content {

  }

  .spec-mask-wrapper {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed
  }

  .spec-choose {
    position: absolute;
    top: 100%;
    left: 0;
    height: 560/@rem;
    width: 100%;
    background: @white;
    z-index: 1001;
    transition: top 0.4s;
    .spec-choose-wrapper {
      position: relative;
      padding: 0 30/@rem;
      height: 100%;
      .icon-close {
        position: absolute;
        top: 30/@rem;
        right: 30/@rem;
        z-index: 1000;
      }
      .goods-pic {
        position: absolute;
        top: -40/@rem;
        left: 30/@rem;
        width: 202/@rem;
        height: 202/@rem;
        img {
          width: 200/@rem;
          height: 200/@rem;
          border: 2/@rem solid #e5e5e5;
          border-radius: 6/@rem;
        }
      }
      .goods-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 40/@rem 0 40/@rem 270/@rem;
        color: #999999;
        .dpr-font(12px);
        span:first-child {
          .dpr-font(15px);
          color: #e60012;
        }
      }
      .goods-spec {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        .goods-spec-title {
          color: #666666;
          .dpr-font(14px);
        }
        .goods-spec-detail {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          span {
            margin-right: 20/@rem;
            width: 120/@rem;
            height: 48/@rem;
            background: #f7f7f7;
            color: #333333;
            .dpr-font(12px);
            border-radius: 24/@rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          span:last-child {
            margin-right: 0;
          }
        }
      }
      .goods-num {
        height: 138/@rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .goods-num-title {
          .dpr-font(14px);
          color: #666666;
        }
        .goods-num-ctrl {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          span {
            width: 60/@rem;
            height: 60/@rem;
            line-height: 60/@rem;
            border: 2/@rem solid #cccccc;
          }
          span:first-child {
            border-right: none;
            border-radius: 6/@rem 0 0 6/@rem;
          }
          span:last-child {
            border-left: none;
            border-radius: 0 6/@rem 6/@rem 0;
          }
          input {
            width: 92/@rem;
            height: 60/@rem;
            text-align: center;
            border: 2/@rem solid #cccccc;
            .dpr-font(14px);
            color: #333333;
          }
        }
      }
      .goods-ctrl {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 98/@rem;
        display: flex;
        align-items: center;
        div {
          flex-grow: 1;
          .dpr-font(17px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .goods-ctrl-add {
          height: 100%;
          background: @white;
          color: @red;
          border-top: 1/@rem solid #e5e5e5;
        }
        .goods-ctrl-buy {
          height: 100%;
          background: @red;
          color: @white;
        }
      }
    }
  }

  .active {
    background: @red !important;
    color: @white !important;
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #4a4a4a;
    opacity: 0.5;
  }
</style>
