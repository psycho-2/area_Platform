<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">
      <em @click="back" class="back"></em>发盾机
      <input type="button" class="cardSender" id="btn3" value='设备' @click="onPeripheralClick">
    </div>
    <!-- content -->
    <div class="content">
      <input type="text"  disabled class="cardNumber" id="cardNumber" v-model="aresKeyBox.shieldNumber">
      <input type="button" class="cardSender" id="btn3" value='发盾并读取盾信息' @click="hairShield">
      <input type="button" class="cardSender" id="btn3" value='弹出盾' @click="projectileShield">
      <input type="button" class="cardSender" id="btn3" value='复位-不做任何操作' @click="shieldReset(1)">
      <input type="button" class="cardSender" id="btn3" value='复位并吞盾' @click="shieldReset(2)">
      <input type="button" class="cardSender" id="btn3" value='复位并弹盾' @click="shieldReset(3)">
      <input type="button" class="cardSender" id="btn3" value='吞盾' @click="swallowingShield">
    </div>

    <!-- 点击设备 弹出蓝牙搜索框 -->
        <!-- 遮罩层 -->
    <!-- <div v-if="this.mask" class="mask">
      <div v-if="this.mask" class ='fdetails'>
          <em @click="maskBack" class="maskBack">&times;</em>
          <ul class="list">
            <li @click="onManufaClick(item.name,index)" v-for="(item,index) in peripheralList" :key="index" :class="['technology', activeStatus == index ? 'active' : '']">{{item.name}}</li>
          </ul>
          <ul class="bluetooth">
            <li @click="onBluetoothClick(item)" v-for="(item,index) in bluetoothList" :key="index"  class="bluetooth">{{item}}</li>
          </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
module.exports = {
  data: function(){
    return {
        // mask:false,
        activeStatus:null,
        // 蓝牙连接成功返回标识
        connectionSuccess:false,
        // // 厂商
        // peripheralList:[
        //   {"name":"恒银","value":"0"},
        //   {"name":"长城","value":"1"},
        //   {"name":"南天","value":"2"},
        // ],
        // // 蓝牙设备
        // bluetoothList:[

        // ],
        // 读取盾信息
        aresKeyBox: {
          // 盾号
          shieldNumber:''
        }
    }
  },
  computed: {

  },
  created: function () {

  },
  mounted: function () {

  },
  methods: {
    // 返回首页插件
    back: function() {
      var _this = this;
      _this.$router.push('/external');
      _this.$store.dispatch('setSlide', 0);
    },
    // 连接设备
    onPeripheralClick: function() {
        var _this = this;
        try {
            cordova.plugins.WebToolCommon.deviceManager(success, error);
            function success(res){
                cordova.plugins.WebToolCommon.alertMessage(res,function(){},function(){});
                // 蓝牙连接成功返回标识
                _this.connectionSuccess = true;
            }
            function error(msg){
              cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
            }
        } catch (error) {
          console.log(error)
        }
    },
    // // 返回连接设备
    // maskBack: function() {
    //   this.mask = false;
    // },
    // // 选择厂商
    // onManufaClick: function(name,index) {
    //   var _this = this;
    //   switch(name){
    //     case "恒银":
    //         _this.activeStatus = index;
    //         //调用插件搜索蓝牙
    //         try {
    //             cordova.plugins.AresKeyBox.scanBluetooth(_this.activeStatus, success, error);
    //             function success(res){
    //               _this.bluetoothList += res;
    //             }
    //             function error(msg){
    //               cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
    //             }
    //         } catch (error) {
    //           console.log(error)
    //         }
    //     break;
    //     case "长城":
    //         _this.activeStatus = index;
    //         //调用插件搜索蓝牙
    //         try {
    //             cordova.plugins.AresKeyBox.scanBluetooth(_this.activeStatus, success, error);
    //             function success(res){
    //               _this.bluetoothList += res;
    //             }
    //             function error(msg){
    //               cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
    //             }
    //         } catch (error) {
    //           console.log(error)
    //         }
    //     break;
    //     case "南天":
    //         _this.activeStatus = index;
    //         //调用插件搜索蓝牙
    //         try {
    //             cordova.plugins.AresKeyBox.scanBluetooth(_this.activeStatus, success, error);
    //             function success(res){
    //               _this.bluetoothList += res;
    //             }
    //             function error(msg){
    //               cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
    //             }
    //         } catch (error) {
    //           console.log(error)
    //         }
    //     break;
    //   }
    // },
    // // 选择连接蓝牙设备
    // onBluetoothClick: function(name){
    //   var _this = this;
    //     try {
    //         cordova.plugins.AresKeyBox.connectBluetooth(name, success, error);
    //         function success(res){
    //             cordova.plugins.WebToolCommon.alertMessage(res,function(){},function(){});
    //             // 蓝牙连接成功返回标识
    //             _this.connectionSuccess = true;
    //             //连接完关闭
    //             _this.mask = false;
    //         }
    //         function error(msg){
    //           cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
    //         }
    //     } catch (error) {
    //       console.log(error)
    //     }
    // },
    // 发盾并且读取盾信息
    hairShield: function() {
        var _this = this;
        // 判断是否连接了设备
        if(_this.connectionSuccess){
            try {
                cordova.plugins.AresKeyBox.dispenseKey(_this.activeStatus, success, error);
                function success(res){
                    _this.aresKeyBox.shieldNumber = res.number;
                }
                function error(msg){
                    cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
                }
            } catch (error) {
              console.log(error)
            }
        }else{
            cordova.plugins.WebToolCommon.alertMessage("请连接设备后再操作",function(){},function(){});
        }
    },
    // 弹盾
    projectileShield:function(){
        var _this = this;
        // 判断是否连接了设备
        if(_this.connectionSuccess){
            try {
                cordova.plugins.AresKeyBox.enjectKey(_this.activeStatus, success, error);
                function success(res){
                    cordova.plugins.WebToolCommon.alertMessage(res,function(){},function(){});
                }
                function error(msg){
                    cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
                }
            } catch (error) {
              console.log(error)
            }
        }else{
            cordova.plugins.WebToolCommon.alertMessage("请连接设备后再操作",function(){},function(){});
        }
    },
    // 吞盾
    swallowingShield:function(){
        var _this = this;
        // 判断是否连接了设备
        if(_this.connectionSuccess){
            try {
                cordova.plugins.AresKeyBox.retainKey(_this.activeStatus, success, error);
                function success(res){
                    cordova.plugins.WebToolCommon.alertMessage(res,function(){},function(){});
                }
                function error(msg){
                  cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
                }
            } catch (error) {
              console.log(error)
            }
        }else{
            cordova.plugins.WebToolCommon.alertMessage("请连接设备后再操作",function(){},function(){});
        }
    },
    // 复位
    shieldReset:function(index) {
        var _this = this;
        // 判断是否连接了设备
        if(_this.connectionSuccess){
          // 分别是哪一种操作
          //1:复位-不做任何操作 2:复位-弹出盾 3:复位-吞盾
          try {
              cordova.plugins.AresKeyBox.reset(_this.activeStatus, index, success, error);
              function success(res){
                  cordova.plugins.WebToolCommon.alertMessage(res,function(){},function(){});
              }
              function error(msg){
                cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
              }
          } catch (error) {
            console.log(error)
          }
        }else{
            cordova.plugins.WebToolCommon.alertMessage("请连接设备后再操作",function(){},function(){});
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
      .cardSender{
        position: absolute;
        right: 0;
        top: 0;
        width: px2rem(120px);
        height: px2rem(60px);
        line-height: px2rem(60px);
        box-sizing: border-box;
        // padding: px2rem(15px);
        margin-top: px2rem(49px);
        font-size: px2rem(28px);
        float: right;
        background: #fff;
        color: #57aafd;
      }
    }
    .content{
      box-sizing: border-box;
      // padding: px2rem(40px) 0 0 px2rem(40px);
      margin-top: px2rem(114px);
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      width: 100%;
      height: 100%;
      background: #f6f6f6;
      padding-bottom: px2rem(15px);
      font-size: px2rem(28px);
      .cardNumber{
        margin-top: px2rem(40px);
        margin-left: px2rem(45px);
        width: px2rem(540px);
        height: px2rem(60px);
        background: #fff;
        border: 2px #ccc solid;
        padding-left: px2rem(15px);
      }
      .cardSender{
        margin: px2rem(30px) 0 0 px2rem(40px);
        width: px2rem(555px);
        height: px2rem(65px);
        background: #fff;
        border: 2px #797979 solid;
        text-align: center;
        border-radius: px2rem(10px)
      }
    }
    // // 遮罩层
    // .mask{
    //   position: absolute;
    //   z-index: 9998;
    //   left: 0;
    //   top: 0;
    //   margin-top:px2rem(114px);
    //   width: 100%;
    //   height: px2rem(1022px);
    //   background: rgba(0,0,0,.3);
    //   box-sizing: border-box;
    //   padding: px2rem(100px) px2rem(85px);
    //   // .fdetails{
    //   //   background: #fff;
    //   //   width: 100%;
    //   //   height: 100%;
    //   //   box-sizing: border-box;
    //   //   padding: px2rem(30px);
    //   //   // // 返回
    //   //   // .maskBack{
    //   //   //     display: inline-block;
    //   //   //     box-sizing: border-box;
    //   //   //     width: px2rem(26px);
    //   //   //     height: px2rem(26px);
    //   //   //     text-align: top;
    //   //   //     margin:  0 0 px2rem(40px) px2rem(380px);
    //   //   //     font-size: px2rem(50px);
    //   //   //     // background: url('../../../assets/back.png') no-repeat;
    //   //   //     // background-size: cover;
    //   //   // }
    //   //   .list{
    //   //     width: 100%;
    //   //     height: px2rem(70px);
    //   //     .technology{
    //   //       float: left;
    //   //       box-sizing: border-box;
    //   //       width: px2rem(133px);
    //   //       text-align: center;
    //   //       height: px2rem(60px);
    //   //       line-height: px2rem(60px);
    //   //       background: #fff;
    //   //       border: 1px #999 solid;
    //   //       // border-radius: px2rem(10px);
    //   //       font-weight: 600;
    //   //       &.active{
    //   //         background: #199ed8;
    //   //         color: #fff;
    //   //       }
    //   //     }
    //   //   }
    //   //   .bluetooth{
    //   //     width: 100%;
    //   //     height: px2rem(690px);
    //   //     overflow: auto;
    //   //     -webkit-overflow-scrolling: touch;
    //   //     li{
    //   //       box-sizing: border-box;
    //   //       width: 100%;
    //   //       height: px2rem(80px);
    //   //       line-height: px2rem(80px);
    //   //       padding:0 px2rem(30px);
    //   //       background: #fff;
    //   //       border-bottom: 2px #ccc solid;
    //   //     }
    //   //   }
    //   // }
    // }
  }
</style>
