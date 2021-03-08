<template>
  <div class="mwrapper">
    <div class="form-group">
        <label for="pass" class="control-label">加密方式：</label>
        <div class="col-sm-4">
            <select class="input-sm form-control" :value="dataRequest.encryption" @change="onEncryptionClick" id="get_cardtype1">
              <option value="0">不加密</option>
              <option value="1">RSA</option>
              <option value="2">AES256</option>
              <option value="3">DES</option>
              <option value="4">3DES</option>
              <option value="5">MD5</option>
            </select>
        </div>
    </div><br>
    <div class="form-group">
        <label for="pass" class="control-label">发送方式：</label>
        <div class="col-sm-4">
            <select class="input-sm form-control" id="get_cardtype2" :value="dataRequest.sendingMode" @change="onSendingModeClick">
              <option value="post">POST</option>
              <option value="get">GET</option>
            </select>
        </div>
    </div><br>
    <div class="form-group">
        <label for="date2" class="control-label">URL路径:</label><br>
        <div class="col-sm-4">
            <input type="text"  class="form-control short" id="data2" :value="dataRequest.urlPath" @input="onUrlPathClick" >
        </div>
    </div><br>
    <div class="form-group">
        <label for="name2" class="control-label">发送报文：</label><br>
        <div class="col-sm-4">
            <textarea type="text" class="form-control short1" id="name2" :value="dataRequest.sendMessage" @input="onSendMessageClick"></textarea>
        </div>
    </div><br>

    <input type="button" value="开始发送" @click="startSending" class="form-control start" id="data2"><br>

    <div class="form-group">
        <label for="name2" class="control-label">接收报文：</label><br>
        <div class="col-sm-4">
            <textarea type="text" readonly="readonly" class="form-control short1" id="name2" :value="dataRequest.receiveMessage"></textarea>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      dataRequest: {
          // 加密方式：
          encryption:'0',
          // 发送方式：
          sendingMode:'post',
          // URL路径
          urlPath:'',
          // 发送报文
          sendMessage:'',
          // 接收报文
          receiveMessage:''
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
    // 加密方式
    onEncryptionClick: function(e){
      var encryption  = e.target.value;
      this.dataRequest.encryption = encryption;
    },
    // 发送方式
    onSendingModeClick: function(e){
      var sendingMode  = e.target.value;
      this.dataRequest.sendingMode = sendingMode;
    },
    // 输入url路径
    onUrlPathClick: function(e) {
      var urlPath  = e.target.value
      this.dataRequest.urlPath = urlPath;
    },
    // 输入发送报文
    onSendMessageClick: function(e) {
      var sendMessage  = e.target.value
      this.dataRequest.sendMessage = sendMessage;
    },
    // 开始发送
    startSending :function() {
      alert('1234');
      var _this = this;
      // 先验证url路径是否为空
      if(_this.dataRequest.urlPath == ''){
        cordova.plugins.WebToolCommon.alertMessage('URL路径不能为空！',function(){},function(){});
      }else{
          // 判断是post or get
          if(_this.dataRequest.sendingMode == 'post'){
              try {
                cordova.plugins.AresRequest.post(_this.dataRequest.sendMessage, _this.dataRequest.encryption, _this.dataRequest.urlPath, success, error);
                function success(res){
                  _this.dataRequest.receiveMessag = res;
                }
                function error(msg){
                  cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
                }
              }
              catch(err) {
                  console.log(err);
              }
          }else{

              try {
                cordova.plugins.AresRequest.getRequest( _this.dataRequest.urlPath, success, error);
                function success(res){
                  _this.dataRequest.receiveMessag = res;
                }
                function error(msg){
                  cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
                }
              }
              catch(err) {
                  console.log(err);
              }
          }

      }
    },
  },
  components: {

  }
};
</script>

<style scoped lang="scss">
@import '../../../common/sass/util.scss';
.mwrapper{
  box-sizing: border-box;
  font-size: px2rem(28px);
  font-weight: 400;
  position: relative;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  margin-top: px2rem(40px);
    // 让文本框滑动更流畅
  .form-group {
      display: inline-block;
      margin-bottom: px2rem(20px);
      box-sizing: border-box;
      padding-left:px2rem(30px);
      label {
          display: inline-block;
          width: px2rem(130px);
          font-size: px2rem(26px);
          font-weight: bold;
          margin-right: px2rem(10px);
          vertical-align: top;
      }

      .col-sm-4{
          display: inline-block;
          width: px2rem(330px);
          margin-right: px2rem(10px);
          input,textarea,select {
              box-shadow:3px 3px 3px #e2e2e2 inset;
              padding-left: px2rem(15px);
              width: 100%;
              color: #000;
              font-size: px2rem(24px);
              height: px2rem(50px);
              border-radius: px2rem(6px);
              border: 1px solid #ccc; // 跳整borderColor
              background: #fff;
              opacity: 1;
          }
          select{
            margin-left: px2rem(50px);
          }
          .short{
            height: px2rem(70px);
            width: px2rem(490px);
            margin: px2rem(20px) 0 0 px2rem(20px);
          }
          .short1{
            height: px2rem(200px);
            width: px2rem(490px);
            margin: px2rem(20px) 0 0 px2rem(20px);
            padding-top: px2rem(10px);
          }
      }
  }
  .start{
    margin: px2rem(10px) 0 px2rem(20px) px2rem(57px);
    width: px2rem(480px);
    height: px2rem(65px);
    background: #fff;
    border: px2rem(3px) #797979 solid;
    text-align: center;
    border-radius: px2rem(10px)
  }
}
</style>
