<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">
      <em @click="back" class="back"></em>数据请求
      <!-- <input type="button" class="cardSender" id="btn3" value='设备'> -->
    </div>
    <!-- content -->
    <div class="content">
      <ul class="election">
        <li @click="onElectionClick(0)" :class="['J_sidebar_menu',this.$store.getters.agree == 0 ? 'active' : '']">数据</li>
        <li @click="onElectionClick(1)" :class="['J_sidebar_menu',this.$store.getters.agree == 1 ? 'active' : '']">文件上传</li>
        <li @click="onElectionClick(2)" :class="['J_sidebar_menu',this.$store.getters.agree == 2 ? 'active' : '']">文件下载</li>
      </ul>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function(){
    return {

    }
  },
  created: function () {
    var _this = this ;
    //  进来先刷新页面
    _this.$store.dispatch('setAgree', 0);
    _this.$router.push('/dataRequest/data');
  },
  mounted: function () {

  },
  methods: {
    // 返回首页插件
    back: function() {
      var _this = this;
      _this.$router.push('/plugIn');
      _this.$store.dispatch('setSlide', 0);
    },
    onElectionClick: function(index) {
      var _this = this
      switch(index) {
        case 0:
          _this.$store.dispatch('setAgree', 0);
          _this.$router.push('/dataRequest/data');
          break;
        case 1:
          _this.$store.dispatch('setAgree', 1);
          _this.$router.push('/dataRequest/upload');
          break;
        case 2:
          _this.$store.dispatch('setAgree', 2);
          _this.$router.push('/dataRequest/download');
          break;
      }
    }
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
      padding: px2rem(40px) 0 0 0;
      margin-top: px2rem(114px);
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      width: 100%;
      height: 100%;
      background: #f6f6f6;
      padding-bottom: px2rem(15px);
      font-size: px2rem(28px);
      .election{
        width: px2rem(400px);
        height: px2rem(73px);
        box-sizing: border-box;
        overflow: hidden; // 触发bfc布局
        // background: #f6f6f6;
        margin: 0 auto;
        .J_sidebar_menu{
          float: left;
          width: px2rem(127px);
          height: px2rem(70px);
          line-height: px2rem(70px);
          font-size: px2rem(26px);
          text-align: center;
          border: 1px #999 solid;
          background: #fff;
          color: #000;
          border-radius: px2rem(10px);
          &.active{
            background: #199ed8;
            color: #fff;
          }
        }
      }
    }

  }
</style>
