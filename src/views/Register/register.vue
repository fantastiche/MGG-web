<template>
  <div class="content">
    <div class="register">
      <img src="./logo.png" alt="">
      <div class="register-item">
        <span class="icon-person"></span>
        <input type="text" placeholder="请输入手机号">
        <span class="icon-clean"></span>
      </div>
      <div class="register-item">
        <span class="icon-code"></span>
        <input type="text" placeholder="请输入手机号">
        <span class="btn">获取验证码</span>
      </div>
      <div class="sub-wrapper">
        <div class="sub">注册</div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  //noinspection CssUnknownTarget
  @import '~common/less/mixin.less';

  .content {
    background: #ffffff;
    height: 100%;
    width: 100%;
    .register {
      height: 100%;
      width: 100%;
      background: url("./bg.png") no-repeat top right;
      background-size: 444/@rem 330/@rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        margin-top: 200/@rem;
        width: 396/@rem;
        height: 204/@rem;
        margin-bottom: 224/@rem;
      }
      .register-item {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 40/@rem;
        input {
          flex-grow: 1;
          margin: 0 40/@rem;
          height: 86/@rem;
          border: 1px solid #cccccc;
          border-radius: 100/@rem;
          padding: 0 92/@rem;
          .dpr-font(15px);
          color: #333333;
        }
        input::placeholder {
          color: #cccccc;
        }
        span {
          position: absolute;
        }
        span:first-child {
          left: 70/@rem;
        }
        .icon-clean {
          right: 70/@rem;
        }
        .btn {
          right: 40/@rem;
          width: 232/@rem;
          height: 86/@rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid @red;
          border-radius: 100/@rem;
          color: @red;
          font-size: 30/@rem;
        }
      }
      .sub-wrapper {
        width: 100%;
        margin-top: 88/@rem;
        .sub {
          margin: 0 40/@rem;
          height: 90/@rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #cccccc;
          border-radius: 50/@rem;
          .dpr-font(17px);
          color: #ffffff;
        }
      }
    }
  }

  .active {
    background: linear-gradient(to right, #ff3963, @red) !important;
  }

</style>
