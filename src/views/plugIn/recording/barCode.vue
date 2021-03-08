
<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">
      <em @click="back" class="back"></em>二维码及条形码
    </div>
    <!-- content -->
    <div class="content">
        <div class="form-group">
          <input type="button" class="Sender" id="btn3" value="扫描二维码" @click="onScanQRCodeClick">
          <div class="col-sm-4">
              <input type="text" readonly="readonly" class="form-control" id="get_exp" :value="barCode.scanQRCode">
          </div>
        </div><br>

        <div class="form-group">
          <input type="button" class="Sender" id="btn3" value="扫描条形码" @click="onScannBarCodeClick">
          <div class="col-sm-4">
              <input type="text" readonly="readonly" class="form-control" id="get_exp" :value="barCode.scannBarCode">
          </div>
        </div><br>

        <div class="form-group">
          <div class="col-sm-4">
            <select class="input-sm form-control short" id="get_cardtype2" :value="barCode.encodeType" @change="onEncodeTypeClick">
              <option value="0">Code 128</option>
              <option value="1">Code 11</option>
              <option value="2">Code 2of5 Interleaved</option>
              <option value="3">Code 39</option>
              <option value="4">Code 39 全 ASCII</option>
              <option value="5">Code 93</option>
              <option value="6">GS1-128</option>
            </select>
          </div>
        </div><br>

        <div class="form-group">
          <div class="col-sm-4">
              <input type="text" class="form-control" id="get_exp" :value="barCode.barCodeGeneration" @input="barGeneration">
          </div>
          <input type="button" class="Sender" id="btn3" value="生成条形码" @click="createBarCodeClick">
        </div><br>
        <!-- 生成条形码图片 -->
        <div class="barCode">
          <img v-if="this.barCode.createBarCode  == ''" src="../../../assets/photo.jpg" class="img-isOk" id="btn5" />
          <img v-else :src="this.barCode.createBarCode "/>
        </div><br>

        <div class="form-group">
          <div class="col-sm-4">
              <input type="text" class="form-control" id="get_exp" :value="barCode.QRCodeGeneration" @input="QRCodeGen">
          </div>
          <input type="button" class="Sender" id="btn3" value="生成二维码" @click="createQRCodeClick">
        </div><br>
        <!-- 生成二维码图片 -->
        <div class="barCode qrCode">
           <img v-if="this.barCode.createQRCode  == ''" src="../../../assets/photo.jpg" class="img-isOk" id="btn5" />
           <img v-else :src="this.barCode.createQRCode "/>
        </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function(){
    return {
      barCode:{
        // 扫描二维码
        scanQRCode:'',
        // 扫描条形码
        scannBarCode:'',
        // 条形码编码方式
        encodeType:'0',
        // 条形码源字符串
        barCodeGeneration:'',
        //条形码图片字符串
        createBarCode:'',
        // 二维码源字符串
        QRCodeGeneration:'',
        // 二维码图片字符串
        createQRCode:'',
      }
    }
  },
  created: function () {

  },
  mounted: function () {

  },
  methods: {
    // 返回首页插件
    back: function() {
      var _this = this;
      _this.$router.push('/recording');
      _this.$store.dispatch('setSlide', 0);
    },
    // 扫描二维码
    onScanQRCodeClick: function() {
      var _this = this;
      try {
        cordova.plugins.AresMultimedia.scanQRCode(success, error);
        function success(res){
            _this.barCode.scanQRCode = res;
        }
        function error(msg){
          cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
        }
      }
      catch(err) {
          console.log(err);
      }
    },
    // 扫描条形码
    onScannBarCodeClick: function() {
      var _this = this;
      try {
        cordova.plugins.AresMultimedia.scanBarCode(success, error);
        function success(res){
            _this.barCode.scannBarCode = res;
        }
        function error(msg){
          cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
        }
      }
      catch(err) {
          console.log(err);
      }
    },
    // 生成条形码编码方式
    onEncodeTypeClick: function(e){
      var encodeType  = e.target.value;
      this.barCode.encodeType = encodeType;
    },
    // 条形码源字符串
    barGeneration: function(e) {
      var barCodeGeneration  = e.target.value
      this.barCode.barCodeGeneration = barCodeGeneration;
    },
    // 生成条形码
    createBarCodeClick: function() {
      var _this = this;
      try {
        cordova.plugins.AresMultimedia.createBarCode(_this.barCode.barCodeGeneration , _this.barCode.encodeType,success, error);
        function success(res){
            _this.barCode.createBarCode = "data:image/jpg;base64," + res;
        }
        function error(msg){
          cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
        }
      }
      catch(err) {
          console.log(err);
      }
    },
    // 二维码源字符串
    QRCodeGen: function(e) {
      var QRCodeGeneration  = e.target.value
      this.barCode.QRCodeGeneration = QRCodeGeneration;
    },
    // 生成二维码
    createQRCodeClick: function() {
      var _this = this;
      try {
        cordova.plugins.AresMultimedia.createQRCode(_this.barCode.QRCodeGeneration,'', '',success, error);
        function success(res){
            _this.barCode.createQRCode = "data:image/jpg;base64," + res;
        }
        function error(msg){
          cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
        }
      }
      catch(err) {
          console.log(err);
      }
    },
  },
  components: {

  }
};
</script>

<style lang="scss" scoped>
  @import '../../../common/sass/util.scss';
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
        background: url('../../../assets/back.png') no-repeat;
        background-size: cover;
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
      .form-group {
          display: inline-block;
          margin-top: px2rem(40px);
          .Sender{
            margin-left: px2rem(30px);
            width: px2rem(165px);
            height: px2rem(65px);
            background: #fff;
            border: 3px #797979 solid;
            text-align: center;
            border-radius: px2rem(10px)
          }
          .col-sm-4{
              margin-left: px2rem(30px);
              display: inline-block;
              width: px2rem(350px);
              input,select {
                  box-sizing: border-box;
                  padding-left: px2rem(15px);
                  width: 100%;
                  color: #000;
                  font-size: px2rem(24px);
                  height: px2rem(65px);
                  border: 3px solid #999; // 跳整borderColor
                  background: #fff;
                  opacity: 1;
              }
              .short{
                border-radius: px2rem(10px);
                width: px2rem(555px);
                margin: 0;
              }
          }
      }
      .barCode{
          box-sizing: border-box;
          width: px2rem(550px);
          height: 20%;
          margin: px2rem(20px) px2rem(30px) 0;
          border: 2px #999 solid;
          padding: px2rem(10px);
          img{
            width: 100%;
            height: 100%;
          }
      }
      .qrCode{
        height: px2rem(550px);
      }
    }

  }
</style>
