
<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">
      <em @click="back" class="back"></em>加载提示框
    </div>
    <!-- content -->
    <div class="content">
      <input type="button" value="正常加载" @click="indicator1">
      <input type="button" value="文字提示加载" @click="indicator2">
      <input type="button" value="其它图标加载" @click="indicator3">
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
  data: function(){
    return {

    }
  },
  created: function () {

  },
  mounted: function () {

  },
  methods: {
    indicator1:function(){
      Indicator.open();
      setTimeout(() => {
        Indicator.close();
      }, 2000);
    },
    indicator2:function(){
      Indicator.open('加载中...');
      setTimeout(() => {
        Indicator.close();
      }, 2000);
    },
    indicator3:function(){
      Indicator.open({
        text: '加载中...',
        spinnerType: 'triple-bounce'
      });
      setTimeout(() => {
        Indicator.close();
      }, 2000);
    },
    // 返回首页插件
    back: function() {
      var _this = this;
      _this.$router.push('/ui');
      _this.$store.dispatch('setSlide', 0);
    },

  },
  components: {

  }
};
</script>
<style lang="scss" scoped>
  @import '../../common/sass/util.scss';
  .wrapper{
    width: px2rem(640);
    height: 100%;
    background: #f6f6f6;
    font-family:'HelveticaNeue-Light', 'HelveticaNeue', Helvetica, Arial, sans-serif;
    color: #000;
    position: relative;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    // 头部
    .title{
      position: fixed;
      left: 0;
      top: 0;
      z-index: 10001;
      width: 100%;
      height: px2rem(114px);
      line-height: px2rem(154px);
      background: #fff;
      text-align: center;
      font-weight: 500;
      font-size: px2rem(32px);
      .back{
        position: absolute;
        left: 0;
        top: 0;
        box-sizing: border-box;
        padding: px2rem(15px);
        width: px2rem(26px);
        height: px2rem(26px);
        margin: px2rem(66px) 0 0 px2rem(16px);
        float: left;
        background: url('../../assets/back.png') no-repeat;
        background-size: cover;
      }
    }
    .content{
      box-sizing: border-box;
      // padding: px2rem(40px) 0 0 px2rem(40px);
      margin-top: px2rem(150px);
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      width: 100%;
      height: 100%;
      background: #f6f6f6;
      padding-bottom: px2rem(15px);
      // padding-top: px2rem(50px);
      font-size: px2rem(28px);
      input{
        display: inline-block;
        margin:px2rem(30px) 0 0 px2rem(50px);
        border-radius: px2rem(20px);
        background: #ccc;
        color: #000;
        width: px2rem(550px);
        height: px2rem(80px);
      }
    }
  }
</style>
