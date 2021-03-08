
<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">
      <em @click="back" class="back"></em>录制音频
    </div>
    <!-- content -->
    <div class="content">
        <div class="form-group">
          <label for="pass" class="control-label">时长：</label>
          <div class="col-sm-4">
              <input type="button" :value="soundRecord.duration" >
          </div>
        </div><br>

        <input type="button" class="Sender" id="btn3" value='开始录音' @click="startRecording"><br>

        <div class="form-group">
          <label for="pass" class="control-label">文件地址：</label><br>
          <div class="col-sm-4">
            <select class="input-sm form-control short" id="get_cardtype2">
              <option :value="soundRecord.route">{{ soundRecord.route }}</option>
            </select>
          </div>
        </div><br>

        <input type="button" class="Sender" id="btn3" value='播放' >
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function(){
    return {
      soundRecord :{
        // 时长
        duration:'',
        // 录音文件路径
        route:'',
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
    // 开始录音
    startRecording: function() {
      var _this = this;
      try {
        cordova.plugins.AresMultimedia.soundRecord('record1', '0',  10, '0', success, error);
        function success(res){
            _this.soundRecord.route = res
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
          margin-bottom: px2rem(20px);
          box-sizing: border-box;
          padding-left:px2rem(30px);
          label {
              display: inline-block;
              width: px2rem(130px);
              font-size: px2rem(26px);
              // text-align: right;
              font-weight: bold;
              margin-right: px2rem(10px);
              vertical-align: top;
          }
          .col-sm-4{
              display: inline-block;
              width: px2rem(330px);
              input,select {
                  margin-left: px2rem(50px);
                  // box-shadow:3px 3px 3px #e2e2e2 inset;
                  padding-left: px2rem(15px);
                  width: 100%;
                  color: #000;
                  font-size: px2rem(24px);
                  height: px2rem(50px);
                  border-radius: px2rem(10px);
                  border: 3px solid #ccc; // 跳整borderColor
                  background: #fff;
                  opacity: 1;
              }
              input{
                 width: px2rem(150px);
                 margin-left: 0;
                 text-align: center;
                 line-height: px2rem(50px);
                 background: #ccc;
                 color: #fff;
              }
              .short{
                height: px2rem(70px);
                width: px2rem(545px);
                margin: px2rem(20px) 0 0 px2rem(10px);
              }
          }
      }
      .Sender{
        margin: px2rem(30px) 0 0 px2rem(40px);
        width: px2rem(555px);
        height: px2rem(65px);
        background: #fff;
        border: 3px #797979 solid;
        text-align: center;
        border-radius: px2rem(10px)
      }
    }

  }
</style>
