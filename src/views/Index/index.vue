<template>
  <div class="content">
    <div class="header">
      <div class="header-search">
        <span class="icon-search"></span>
        <input type="text" placeholder="请输入搜索商品">
        <span class="icon-massage"></span>
      </div>
      <scroll style="width: 100%;overflow: hidden" :direction="'horizontal'">
        <div class="goods-type-wrapper">
          <div class="goods-type" ref="types">
            <div class="type-name">
              <span :class="{'active':active===0}" @click="changeType(0)">大牌秒杀</span>
            </div><div class="type-name">
              <span :class="{'active':active===1}" @click="changeType(1)">美妆个护</span>
            </div><div class="type-name">
              <span :class="{'active':active===2}" @click="changeType(2)">家居日用</span>
            </div><div class="type-name">
              <span :class="{'active':active===3}" @click="changeType(3)">生活服务</span>
            </div><div class="type-name">
              <span :class="{'active':active===4}" @click="changeType(4)">生活服务</span>
            </div>
            <span class="line" ref="line"></span>
          </div>
        </div>
      </scroll>
    </div>
    <my-nav :position="0"></my-nav>
    <scroll class="scroll-content">
      <div class="index-body">
        <swiper ref="swiper" :list="picList" style="width:100%;margin:0 auto;" :aspect-ratio="339/750"
                dots-position="center" :show-dots="true" @on-index-change="change" :dots-class="'dots'"
                :show-desc-mask="false" :auto="true" :loop="true" :interval="3000"></swiper>
        <div class="activity">
          <div class="activity-one">
            <span class="icon-go"></span>
          </div>
          <div class="activity-wrapper">
            <div class="activity-two">
              <span class="icon-go"></span>
            </div>
            <div class="activity-three">
              <span class="icon-go"></span>
            </div>
          </div>
        </div>
        <div class="hot-list">
          <div class="hot-list-title">
            <div class="hot-list-title-text">热卖商品</div>
            <div class="hot-list-title-change">
              <span class="icon-refresh"></span>
              <span>换一批</span>
            </div>
          </div>
          <div class="hot-list-item border-1px-e8" v-for="(item, index) in itemList">
            <div class="item-img">
              <img src="./item1.png" alt="">
            </div>
            <div class="item-title">SKII神仙水面部精华套装 保湿收缩毛孔</div>
            <div class="item-info">
              <div class="item-info-left">
                <div class="item-info-left-inventory">
                  <span>仅剩258件</span>
                  <span></span>
                </div>
                <div class="item-info-left-price">
                  <span>￥102.80</span>
                  <span>￥120.00</span>
                </div>
              </div>
              <div class="item-info-right">
                <span>收藏</span>
                <span>购买</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/Scroll/Scroll'
  import {Swiper} from 'vux'
  import MyNav from 'components/Nav/Nav'
  import GoodsModel from '../../models/goods-model'

  export default {
    components: {
      Scroll,
      Swiper,
      MyNav
    },
    data: function () {
      return {
        active: 0,
        picList: [],
        current: 0,
        itemList: [0, 0, 0],
        position: 0
      }
    },
    methods: {
      changeType: function (index) {
        this.active = index
        let width = 0
        for (let i = 0; i < index; i++) {
          width += this.$refs.types.children[i].offsetWidth
        }
        this.$refs.line.style.left = `${width + (this.$refs.types.children[index].offsetWidth - this.$refs.types.children[index].children[0].offsetWidth) / 2}px`
        console.log(this.$refs.line.style.left)
      },
      change: function (index) {
        this.current = index
      },
      init: function () {
        for (let i = 0; i < 4; i++) {
          this.picList.push({
            url: 'javascript:',
            img: 'https://cs1.gzqqs.com/Order_New/banner.png'
          })
        }
        GoodsModel.categoryList({}, (res) => {
          console.log(res)
        })
      }
    },
    created: function () {
      this.init()
      this.$nextTick(() => {
        console.log(this.$refs.types.children)
        this.$refs.line.style.left = `${(this.$refs.types.children[0].offsetWidth - this.$refs.types.children[0].children[0].offsetWidth) / 2}px`
      })
    }
  }
</script>

<style lang="less" scoped>
  //noinspection CssUnknownTarget
  @import '~common/less/mixin.less';

  .scroll-content {
    height: 100%;
    overflow: hidden;
  }

  .goods-type-wrapper {
    width: 100%;
    overflow: scroll;
  }

  .line {
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 120/@rem;
    background: @red;
    height: 6/@rem;
    border-radius: 3/@rem;
    transition: left 0.4s;
  }

  .active {
    color: @red !important;
  }

  .content {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1001;
  }

  .header {
    position: fixed;
    left: 0;
    top: 0;
    background: @white;
    width: 100%;
    z-index: 999;
    .header-search {
      padding: 20/@rem 26/@rem 0 30/@rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      .icon-search {
        position: absolute;
        left: 56/@rem;
      }
      input {
        margin-right: 38/@rem;
        background: #f7f7f7;
        border-radius: 28/@rem;
        height: 56/@rem;
        .dpr-font(13px);
        padding: 0 26/@rem 0 76/@rem;
        flex-grow: 1;
        color: #333333;
      }
      input::placeholder {
        color: #a1a1a1;
        .dpr-font(13px);
      }
    }
    .goods-type {
      white-space: nowrap;
      height: 84/@rem;
      position: relative;
      .type-name {
        flex: 1;
        display: inline-block;
        text-align: center;
        height: 84/@rem;
        width: 180/@rem;
        line-height: 84/@rem;
        color: #535353;
        .dpr-font(15px);
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .index-body {
    padding-top: 161/@rem;
    padding-bottom: 95/@rem;
    .activity {
      display: flex;
      .activity-one {
        position: relative;
        width: 345/@rem;
        height: 380/@rem;
        background: url("./1.png") no-repeat center;
        background-size: 345/@rem 380/@rem;
        border: 1/@rem solid #e8e8e8;
        border-top: none;
        border-left: none;
        border-bottom: none;
        .icon-go {
          position: absolute;
          left: 21/@rem;
          top: 149/@rem;
        }
      }
      .activity-wrapper {
        display: flex;
        flex-direction: column;
        width: 404/@rem;
        .activity-two {
          position: relative;
          height: 189/@rem;
          background: url("./2.png") no-repeat center;
          background-size: 404/@rem 189/@rem;
          border-bottom: 1/@rem solid #e8e8e8;
          .icon-go {
            position: absolute;
            left: 22/@rem;
            top: 105/@rem;
          }
        }
        .activity-three {
          position: relative;
          height: 189/@rem;
          background: url("./3.png") no-repeat center;
          background-size: 404/@rem 189/@rem;
          .icon-go {
            position: absolute;
            left: 22/@rem;
            top: 105/@rem;
          }
        }
      }
    }
    .hot-list {
      background: @white;
      margin-top: 20/@rem;
      .hot-list-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10/@rem;
        padding: 40/@rem;
        .hot-list-title-text {
          .dpr-font(17px);
          background: linear-gradient(to right, #ff7700, #e70312);
          -webkit-background-clip: text;
          color: transparent;
          font-weight: bold;
        }
        .hot-list-title-change {
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            color: #666666;
            .dpr-font(13px);
          }
          span:nth-child(2) {
            margin-left: 10/@rem;
          }
        }
      }
      .hot-list-item {
        padding: 30/@rem 0;
        &:first-child {
          padding-top: 0;
        }
        .item-img {
          padding: 0 40/@rem;
          img {
            width: 670/@rem;
            height: 300/@rem;
          }
        }
        .item-title {
          padding: 20/@rem 40/@rem;
          display: flex;
          align-items: center;
          .dpr-font(15px);
          color: #323232;
        }
        .item-info {
          padding: 0 40/@rem;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-top: 10/@rem;
          padding-bottom: 30/@rem;
          .item-info-left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            .item-info-left-inventory {
              position: relative;
              width: 278/@rem;
              height: 30/@rem;
              span {
                display: inline-block;
                width: 278/@rem;
                height: 30/@rem;
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              span:first-child {
                border-radius: 15/@rem;
                border: 2/@rem solid @red;
                color: @red;
                z-index: 999;
              }
              span:nth-child(2) {
                background: #fddcde;
                border-radius: 15/@rem;
                top: 2/@rem;
                left: 2/@rem;
                width: 50%;
              }
            }
            .item-info-left-price {
              margin-top: 30/@rem;
              span:first-child {
                .dpr-font(17px);
                color: @red;
              }
              span:nth-child(2) {
                .dpr-font(11px);
                color: #666666;
                text-decoration: line-through;
                margin-left: 40/@rem;
              }
            }
          }
          .item-info-right {
            span {
              display: inline-block;
              .dpr-font(14px);
              width: 118/@rem;
              height: 62/@rem;
              line-height: 62/@rem;
              background: none;
              border-radius: 8/@rem;
              text-align: center;
            }
            span:first-child {
              color: @red;
              border: 2/@rem solid @red;
            }
            span:last-child {
              color: @white;
              border: 2/@rem solid @red;
              background: @red;
              margin-left: 15/@rem;
            }
          }
        }
      }
    }
  }
</style>
<style lang="less">
  //noinspection CssUnknownTarget
  @import '~common/less/mixin.less';

  .dots {
    .vux-icon-dot {
      width: 10/@rem !important;
      height: 10/@rem !important;
      background: @white !important;
    }
    .active {
      width: 50/@rem !important;
      transition: width 0.3s;
    }
  }
</style>
