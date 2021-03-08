<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">
      <em @click="back" class="back"></em>状态栏设置
    </div>
    <!-- content -->
    <div class="content">
        <ul class="list">
            <li class="technology">
              <span>是否显示状态栏</span>

              <div :class="['J_sidebar_menu', this.show == 1 ? 'active' : '']">
                  <input type="button" :class="['clickLeft', this.show == 1 ? 'clickRight' : '']" id="data2" @click="onShowClick">
              </div>
            </li>
            <li class="technology">
              <span>显示类型</span>
              <div :class="['J_sidebar_menu', this.type == 1 ? 'active' : '']">
                  <input type="button" :class="['clickLeft', this.type == 1 ? 'clickRight' : '']" id="data2" @click="onTypeClick">
              </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function(){
    return {
      // 是否显示状态栏
        show : 0,
      // 显示类型
        type : 0
    }
  },
  created: function () {

  },
  mounted: function () {

  },
  methods: {
    // 返回
    back: function() {
      var _this = this;
      _this.$router.push('/equipment');
      _this.$store.dispatch('setSlide', 0);
    },
    // 是否显示状态啦
    onShowClick:function(){
      var _this = this;
      if(_this.show == 0){
          _this.show = 1
          try {
            cordova.plugins.AresDevice.statusBar(_this.show, _this.type, success, error);
            function success(res){
                ordova.plugins.WebToolCommon.alertMessage(res,function(){},function(){});
            }
            function error(msg){
              cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
            }
          }
          catch(err) {
              console.log(err);
          }
      }else{
        _this.show = 0
        try {
          cordova.plugins.AresDevice.statusBar(_this.show, _this.type, success, error);
          function success(res){
                ordova.plugins.WebToolCommon.alertMessage(res,function(){},function(){});
          }
          function error(msg){
            cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
          }
        }
        catch(err) {
            console.log(err);
        }
      }

    },
    // 显示类型
    onTypeClick:function(){
      var _this = this;
      if(_this.type == 0){
          _this.type = 1;
          try {
            cordova.plugins.AresDevice.statusBar(_this.show, _this.type, success, error);
            function success(res){
                ordova.plugins.WebToolCommon.alertMessage(res,function(){},function(){});
            }
            function error(msg){
              cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
            }
          }
          catch(err) {
              console.log(err);
          }
      }else{
        _this.type = 0;
        try {
            cordova.plugins.AresDevice.statusBar(_this.show, _this.type, success, error);
            function success(res){
                ordova.plugins.WebToolCommon.alertMessage(res,function(){},function(){});
            }
            function error(msg){
              cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
            }
          }
          catch(err) {
              console.log(err);
          }
      }

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
          padding:0 px2rem(30px);
          background: #fff;
          border-bottom: 2px #f2f2f2 solid;
          // 进度条
          span{
            display: inline-block;
            width:px2rem(200px);
            height: px2rem(80px);
            line-height: px2rem(80px);
          }
          .J_sidebar_menu{
              display: inline-block;
              margin: px2rem(20px) 0 0 px2rem(280px);
              width: px2rem(75px);
              height: px2rem(40px);
              border: px2rem(1px) #ccc solid;
              background: #fff;
              border-radius: px2rem(40px);
              &.active{
                background: #4cd663;
                // background: #199ed8
              }
              .clickLeft{
                width: px2rem(45px);
                height: px2rem(40px);
                border: 1px #ccc solid;
                border-radius: px2rem(40px);
                background: #fff;
                &.clickRight{
                  margin-left: px2rem(30px);
                }
              }

          }
        }
      }
    }

  }
</style>
