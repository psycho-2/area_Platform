
<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">
      <em @click="back" class="back"></em>拍摄照片
    </div>
    <!-- content -->
    <div class="content">
      <!-- 单选框 -->
      <div class="checkbox">
        <span @click="onPhotographClick(0)" :class="['photograph',this.photograph == 0 ? 'active' : '']" id="btn4" >系统相机</span>
        <span @click="onPhotographClick(1)" :class="['photograph',this.photograph == 1 ? 'active' : '']" id="btn4">自定相机</span>
      </div><br>
      <!-- 是否存储在相册中 -->
      <div class="header">
          <input type="checkbox" id="C10" :checked="this.stored"  :value="this.stored" @change="onStoredClick">
          <span>存储在相册中</span>
      </div><br>
      <div class="col-sm-3">
          <img v-if="this.image == ''" src="../../../assets/photo.jpg" class="img-isOk" id="btn5" />
          <img v-else :src="this.image"/>
      </div><br>
      <div class="form-group">
        <label for="pass" class="control-label">文件地址：</label><br>
        <div class="col-sm-4">
            <select class="input-sm form-control short" id="get_cardtype2">
              <option value="POST">./business/test001.jpg</option>
            </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function(){
    return {
      // 选择相机
      photograph:2,
      // 是否存储在相机中
      stored: false,
      // 返回照片编码
      image:''
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
    onPhotographClick: function(index) {
      var _this = this
      switch(index) {
        case 0:
          this.photograph = 0;
          // 调插件拍摄照片
          try {
            cordova.plugins.AresMultimedia.takePhoto('image1', '0', _this.photograph, false, _this.stored, '0', success, error);
            function success(res){
                _this.image = "data:image/jpg;base64," + res;
            }
            function error(msg){
              cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
            }
          }
          catch(err) {
              console.log(err);
          }
          break;
        case 1:
          this.photograph = 1;
          try {
            cordova.plugins.AresMultimedia.takePhoto('image2', '0', _this.photograph, false, _this.stored, '0', success, error);
            function success(res){
                _this.image = "data:image/jpg;base64," + res;
            }
            function error(msg){
              cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
            }
          }
          catch(err) {
              console.log(err);
          }
          break;
      }
    },
    // 选择是否存在相册中
    onStoredClick:function(){
      var _this = this;
      var stored = this.stored;
      if (stored == true) {
          this.stored =  false;
      } else {
          this.stored =  true;
      }
    }
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
      .checkbox{
        width: px2rem(310px);
        height: px2rem(70px);
        margin: px2rem(30px) auto;
        .photograph{
          display: inline-block;
          width: px2rem(140px);
          height: px2rem(68px);
          line-height: px2rem(68px);
          border: 2px #797979 solid;
          background: #fff;
          text-align: center;
          &.active{
            border: none;
            background: #199ed8;
            color: #fff;
          }
        }
      }
      .header {
          width: 100%;
          height: px2rem(100px);
          span {
              display: inline-block;
              margin-left: px2rem(10px);
          }
          input {
              display: inline-block;
              vertical-align: middle;
              width: px2rem(28px);
              height: px2rem(28px);
              margin-left: px2rem(60px);
          }
      }
      .col-sm-3{
        box-sizing: border-box;
          width: px2rem(550px);
          height: 30%;
          margin-left: px2rem(40px);
          border: 2px #999 solid;
          padding: px2rem(10px);
        img{
          width: 100%;
          height: 100%;
        }
      }
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
              select {
                  margin-left: px2rem(50px);
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
              .short{
                height: px2rem(70px);
                width: px2rem(490px);
                margin: px2rem(20px) 0 0 px2rem(20px);
              }
          }
      }
    }

  }
</style>
