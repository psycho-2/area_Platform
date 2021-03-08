<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">
      <em @click="back" class="back"></em>应用信息
    </div>
    <!-- content -->
    <div class="content">
        <ul class="list">
            <li class="technology">程序版本号 <span class="information">{{applicationList.appVersion}}</span></li>
            <li class="technology">包名 <span class="information">{{applicationList.bundleID}}</span></li>
            <li class="technology">构建版本号 <span class="information">{{applicationList.buildVersion}}</span></li>
        </ul>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function(){
    return {
      applicationList:{
        // 程序版本号
        appVersion:'',
        // 包名
        bundleID:'',
        // 构建版本号
        buildVersion:''
      }
    }
  },
  created: function () {
      // 获取版本信息
    var _this = this;
    try {
      cordova.plugins.AresApp.info(success, error);
      function success(res){
          _this.applicationList.bundleID = res.bundleID;
          _this.applicationList.appVersion = res.appVersion;
          _this.applicationList.buildVersion = res.buildVersion;
      }
      function error(msg){
        cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
      }
    }
    catch(err) {
        console.log(err);
    }
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
      background: #f6f6f6;
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
      margin-top: px2rem(114px);
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      width: 100%;
      height: 100%;
      background: #f6f6f6;
      padding-bottom: px2rem(15px);
      font-size: px2rem(28px);
      .list{
        width: 100%;
        height: 100%;
        li{
          box-sizing: border-box;
          width: 100%;
          height: px2rem(80px);
          line-height: px2rem(80px);
          padding:0 px2rem(30px);
          background: #fff;
          border-bottom: 2px #f2f2f2 solid;
          .arrow{
            width: px2rem(22px);
            height: px2rem(22px);
            margin-top: px2rem(30px);
            float: right;
            background: url('../../assets/right.png') no-repeat;
            background-size: cover;
          }
          .information{
            display: inline-block;
            width: px2rem(380px);
            margin-left: px2rem(50px);
            line-height: px2rem(80px);
            text-align: right;
          }
        }
      }
    }

  }
</style>
