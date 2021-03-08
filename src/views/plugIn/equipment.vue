<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">
      <em @click="back" class="back"></em>设备信息
    </div>
    <!-- content -->
    <div class="content">
        <ul class="list">
            <li class="technology">操作系统 <span class="information">{{equipmentList.sysType}}</span></li>
            <li class="technology">设备名称 <span class="information">{{equipmentList.deviceName}}</span></li>
            <li class="technology">设备UUID <span class="information">{{equipmentList.uuid}}</span></li>
            <li class="technology">设备序列号 <span class="information">{{equipmentList.sysVersion}}</span></li>
            <li class="technology">设备类型 <span class="information">{{equipmentList.deviceType}}</span></li>
            <li class="technology" @click="onShockClick">震动</li>
            <li class="technology">屏幕尺寸 <span class="information">{{equipmentList.screenWidth}}</span></li>
            <li class="technology" @click="onSetting">状态栏设置<em class="arrow"></em></li>
        </ul>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function(){
    return {
      equipmentList:{
          // 操作系统
          sysType:'',
          // 设备名称
          deviceName:'',
          // 设备UUID
          uuid:'',
          // 设备序列号
          sysVersion:'',
          // 设备类型
          deviceType:'',
          // 屏幕尺寸
          screenWidth:'',
      }
    }
  },
  created: function () {
    // 获取设备信息
    var _this = this;
    try {
      cordova.plugins.AresDevice.info(success, error);
      function success(res){
          _this.equipmentList.sysType = res.sysType;
          _this.equipmentList.deviceName = res.deviceName;
          _this.equipmentList.uuid = res.uuid;
          _this.equipmentList.sysVersion = res.sysVersion;
          _this.equipmentList.deviceType = res.deviceType;
          _this.equipmentList.screenWidth = res.screenWidth + '*' + res.screenHeight;
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
    // 让设备震动
    onShockClick: function () {
      // 获取设备信息
      var _this = this;
      try {
        cordova.plugins.AresDevice.vibrate(success, error);
        function success(res){
          //  cordova.plugins.WebToolCommon.alertMessage(res,function(){},function(){});
        }
        function error(msg){
          cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
        }
      }
      catch(err) {
          console.log(err);
      }
    },
    // 跳转到状态栏设置
    onSetting:function(){
      var _this = this;
      _this.$router.push('/setting');
      _this.$store.dispatch('setSlide', 1);
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
