<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">
      <em @click="backEncryption" class="back"></em>AES 256
    </div>
    <!-- content -->
    <div class="content">
        <!-- 加密因子 -->
        <!-- <div class="source">
          <label class="string">加密因子：</label>
          <div class="col-sm-4">
            <input type="text" readonly="readonly" class="bgWhite" id="get_cardpwd" :value="factor">
            <input type="button" class="bgGray" id="btn4" value='获取' @click="onFactorClick">
          </div>
        </div> -->
        <p class="header">加密</p>
        <!-- 源字符串: -->
        <div class="source">
          <label class="string">源字符串：</label>
          <div class="col-sm-4">
            <input type="text" class="bgWhite" id="get_cardpwd" :value="sourceString" @input="onSourceStringClick" @blur="checkSourceStringReg">
            <input type="button" class="bgGray" id="btn4" value='加密' @click="encryption">
          </div>
        </div>
        <!-- 结果字符串 -->
        <div class="result">
          <label class="string">结果字符串：</label>
          <div class="col-sm-4">
            <textarea type="text" readonly="readonly" :value="resultString" class="bgWhite" id="get_cardpwd"></textarea>
          </div>
        </div>
        <!-- 解密 -->
        <p class="header">解密</p>
        <!-- 结果字符串 -->
        <div class="result">
          <label class="string">结果字符串：
            <input type="button" class="bgGray" id="btn4" value='解密' @click="decrypt">
          </label>
          <div class="col-sm-4">
            <textarea type="text" readonly="readonly" class="bgWhite" id="get_cardpwd" :value="decryptString"></textarea>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function(){
    return {
      // 加密因子
      factor:'',
      // 源字符串
      sourceString:'',
      option :2,
      // 加密结果字符串
      resultString:'',
      // 解密结果字符串
      decryptString:''
    }
  },
  created: function () {

  },
  mounted: function () {

  },
  methods: {
    // 返回数据加解密页
    backEncryption: function() {
      var _this = this;
      _this.$router.push('/encryption');
      _this.$store.dispatch('setSlide', 0);
    },
    // //点击获取加密因子
    // onFactorClick:function(){
    //   try {

    //   }
    //   catch(err) {
    //     console.log(err);
    //   }
    // },
    // 点击加密
    encryption: function() {
      var _this = this;
      // 先验证输入框内是否为空
      if(this.sourceString == ''){
        cordova.plugins.WebToolCommon.alertMessage('源字符串不能为空！',function(){},function(){});
      }else{
          var data = this.sourceString;
          try {
            cordova.plugins.AresEncrypt.encrypt(data, _this.option, success, error);
            function success(res){
              _this.resultString = res;
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
    // 点击解密
    decrypt: function() {
      var _this = this;
      // 先验证输入框内是否为空
      if(this.resultString == ''){
        cordova.plugins.WebToolCommon.alertMessage('解密字符串不能为空！',function(){},function(){});
      }else{
          var data = this.resultString;
          try {
            cordova.plugins.AresEncrypt.decrypt(data, _this.option, success, error);
            function success(res){
              _this.decryptString = res;
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
    // 源字符串 输入框
    onSourceStringClick: function(e) {
      var sourceString  = e.target.value
      this.sourceString = sourceString;
    },
    // 源字符串 输完验证
    checkSourceStringReg: function() {
      var sourceString = this.sourceString;
      if(typeof(sourceString) != 'string'){
        cordova.plugins.WebToolCommon.alertMessage('源字符串必须是字符串格式',function(){},function(){});
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
    }
    .content{
      box-sizing: border-box;
      padding: px2rem(40px) 0 0 px2rem(40px);
      margin-top: px2rem(114px);
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      width: 100%;
      height: 100%;
      background: #f6f6f6;
      padding-bottom: px2rem(15px);
      font-size: px2rem(28px);
      .header{
        font-size: px2rem(32px);
        margin-bottom: px2rem(10px);
        font-weight: 500;
        color: #e43c04;
      }
      .source{
        margin-bottom: px2rem(15px);
        .col-sm-4{
          margin: px2rem(8px) 0 0 px2rem(30px);
          .bgWhite{
            width: px2rem(380px);
            height: px2rem(50px);
            border: 1px #a9a9a9 solid;
          }
          .bgGray{
            width: px2rem(120px);
            height: px2rem(60px);
            background: #fff;
            border: 2px #797979 solid;
            border-radius: px2rem(10px);
            margin-left: px2rem(30px);
          }
        }
      }
      .result{
        margin-bottom: px2rem(20px);
        .col-sm-4{
          margin: px2rem(10px) 0 0 px2rem(30px);
          .bgWhite{
            width: px2rem(500px);
            height: px2rem(300px);
            border: 2px #a9a9a9 solid;
          }
        }
        .string{
          .bgGray{
            width: px2rem(120px);
            height: px2rem(60px);
            background: #fff;
            border: 2px #797979 solid;
            border-radius: px2rem(10px);
            margin-left: px2rem(265px);
            margin-bottom: px2rem(15px);
          }
        }
      }
    }
  }
</style>
