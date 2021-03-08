<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">
      <em @click="back" class="back"></em>发卡机
      <input type="button" class="cardSender" id="btn3" value='设备' @click="onPeripheralClick">
    </div>
    <!-- content -->
    <div class="content">
      <div class="form-group">
            <label for="get_cardtype" class="control-label">发卡类型</label>
            <div class="col-sm-4">
                <select :value="bankCard.issuingCardType" @change="onCardTypeClick"  class="input-sm form-control" id="get_cardtype">
                  <option value="2">NFC 非接触式</option>
                  <option value="1">IC 接触式</option>
                  <option value="0">磁条卡</option>
                </select>
            </div>
      </div>
      <input type="text"  disabled class="cardNumber" id="cardNumber" v-model="bankCard.cardNumber">
      <input type="button" class="Sender" id="btn3" value='发卡并读取卡号' @click="issuingCards">
      <input type="button" class="Sender" id="btn3" value='弹出卡片' @click="popUpCard">
      <input type="button" class="Sender" id="btn3" value='复位-不做任何操作' @click="resetCard(1)">
      <input type="button" class="Sender" id="btn3" value='复位并吞卡' @click="resetCard(3)">
      <input type="button" class="Sender" id="btn3" value='复位并弹卡' @click="resetCard(2)">
      <input type="button" class="Sender" id="btn3" value='吞卡' @click="swallowCard">
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
        // 厂商
        // peripheralList:[
        //   {"name":"恒银","value":"0"},
        //   {"name":"长城","value":"1"},
        //   {"name":"南天","value":"2"},
        // ],
        // // 蓝牙设备
        // bluetoothList:[

        // ],
        // 卡机读取银行卡信息
        bankCard: {
          // 发卡卡类型
          issuingCardType:"2",
          // 卡号
          cardNumber:'',
          // 凭证号
          voucherNo:'',
          // 55域信息
          domain:'',
          // 磁道1
          magneticTrack1:'',
          // 磁道2
          magneticTrack2:'',
          // 磁道3
          magneticTrack3:''
        },
    }
  },
  computed: {
    // bankCard: function() {
    //     return this.$store.getters.bankCard
    // }
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
    //             cordova.plugins.AresCardBox.scanBluetooth(_this.activeStatus, success, error);
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
    //             cordova.plugins.AresCardBox.scanBluetooth(_this.activeStatus, success, error);
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
    //             cordova.plugins.AresCardBox.scanBluetooth(_this.activeStatus, success, error);
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
    //         cordova.plugins.AresCardBox.connectBluetooth(name, success, error);
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
    // 选择发卡类型
    onCardTypeClick: function(e) {
      var issuingCardType  = e.target.value;
      this.bankCard.issuingCardType = issuingCardType;
    },
    // 点击发卡并且读取卡号
    issuingCards: function() {
        var _this = this;
        // 判断是否连接了设备
        if(_this.connectionSuccess){
            try {
                cordova.plugins.AresCardBox.dispenseCard(_this.activeStatus,_this.bankCard.issuingCardType, success, error);
                function success(res){
                    _this.bankCard.cardNumber = res.number;
                    // _this.$store.dispatch('setBankCard', {cardNumber:res.number})
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
    // 卡机-弹出卡⽚
    popUpCard: function() {
        var _this = this;
        // 判断是否连接了设备
        if(_this.connectionSuccess){
            try {
                cordova.plugins.AresCardBox.enjectCard(_this.activeStatus, success, error);
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
    //吞卡
    swallowCard: function() {
        var _this = this;
        // 判断是否连接了设备
        if(_this.connectionSuccess){
            try {
                cordova.plugins.AresCardBox.retainCard(_this.activeStatus, success, error);
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
    resetCard:function(index) {
        var _this = this;
        // 判断是否连接了设备
        if(_this.connectionSuccess){
          // 分别是哪一种操作
          //1:复位-不做任何操作 2:复位-弹出卡⽚ 3:复位-吞卡
          try {
              cordova.plugins.AresCardBox.reset(_this.activeStatus, index, success, error);
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
      .Sender{
        margin: px2rem(30px) 0 0 px2rem(40px);
        width: px2rem(555px);
        height: px2rem(65px);
        background: #fff;
        border: 2px #797979 solid;
        text-align: center;
        border-radius: px2rem(10px)
      }
      .form-group {
          display: inline-block;
          margin-top: px2rem(40px);
          box-sizing: border-box;
          padding-left:px2rem(40px);
          label {
              display: inline-block;
              width: px2rem(130px);
              font-size: px2rem(26px);
              font-weight: bold;
              margin-right: px2rem(10px);
              vertical-align: middle;
          }
          .col-sm-4{
              display: inline-block;
              width: px2rem(400px);
              // margin-right: px2rem(100px);
              input,textarea,select {
                  box-shadow:3px 3px 3px #e2e2e2 inset;
                  padding-left: px2rem(15px);
                  width: 100%;
                  color: #000;
                  font-size: px2rem(24px);
                  height: px2rem(60px);
                  border-radius: px2rem(6px);
                  border: 1px solid #ccc; // 跳整borderColor
                  background: #fff;
                  opacity: 1;
              }

          }
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
    //   .fdetails{
    //     background: #fff;
    //     width: 100%;
    //     height: 100%;
    //     box-sizing: border-box;
    //     padding: px2rem(30px);
    //     // 返回
    //     .maskBack{
    //         display: inline-block;
    //         box-sizing: border-box;
    //         width: px2rem(26px);
    //         height: px2rem(26px);
    //         text-align: top;
    //         margin:  0 0 px2rem(40px) px2rem(380px);
    //         font-size: px2rem(50px);
    //         // background: url('../../../assets/back.png') no-repeat;
    //         // background-size: cover;
    //     }
    //     .list{
    //       width: 100%;
    //       height: px2rem(70px);
    //       .technology{
    //         float: left;
    //         box-sizing: border-box;
    //         width: px2rem(133px);
    //         text-align: center;
    //         height: px2rem(60px);
    //         line-height: px2rem(60px);
    //         background: #fff;
    //         border: 1px #999 solid;
    //         // border-radius: px2rem(10px);
    //         font-weight: 600;
    //         &.active{
    //           background: #199ed8;
    //           color: #fff;
    //         }
    //       }
    //     }
    //     .bluetooth{
    //       width: 100%;
    //       height: px2rem(690px);
    //       overflow: auto;
    //       -webkit-overflow-scrolling: touch;
    //       li{
    //         box-sizing: border-box;
    //         width: 100%;
    //         height: px2rem(80px);
    //         line-height: px2rem(80px);
    //         padding:0 px2rem(30px);
    //         background: #fff;
    //         border-bottom: 2px #ccc solid;
    //       }
    //     }
    //   }
    // }
  }
</style>
