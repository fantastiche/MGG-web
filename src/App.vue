<template>
  <div id="app">
    <router-view></router-view>
    <v-mask v-if="mask"></v-mask>
  </div>
</template>

<script>
  import Mask from 'components/Mask/Mask'
  import {mapGetters} from 'vuex'

  export default {
    name: 'app',
    components: {
      'VMask': Mask
    },
    data: function () {
      return {
        show: true
      }
    },
    computed: {
      ...mapGetters([
        'mask'
      ])
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import "./common/less/mixin";
  @import '~vux/src/styles/1px.less';

  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    background-color: #f3f5f7;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  input, textarea {
    -webkit-appearance: none;
    border-radius: 0;
    border: none;
    outline: none;
  }

  input:focus, textarea:focus {
    border: none;
  }
</style>
