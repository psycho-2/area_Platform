<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">
      <em @click="back" class="back"></em>水印效果
    </div>
    <!-- content -->
    <div class="content">
        <div class="form-group">
          <label for="pass" class="control-label">图片路径：</label><br>
          <div class="col-sm-4">
              <select class="input-sm form-control" id="get_cardtype2" :value="backgroundImg" >
                <option value="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528197984627&di=9b182d3f3e0cca3163d2a8d13e1219f4&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F14%2F69%2F74358PIC6ys_1024.jpg">./business/test001.jpg</option>
              </select>
          </div>
        </div><br>

         <div class="col-sm-3">
          <img v-if="this.resultImg == ''" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528197984627&di=9b182d3f3e0cca3163d2a8d13e1219f4&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F14%2F69%2F74358PIC6ys_1024.jpg" class="img-isOk" id="btn5" />
          <img v-else :src="this.resultImg"/>
        </div><br>

        <div class="form-group margin0">
            <label for="date2" class="control-label">字符串1：</label><br>
            <div class="col-sm-4">
                <input type="text"  class="form-control short" id="data2">
            </div>
        </div><br>

        <div class="group">
          <label for="date2" class="control-label">字体：</label>
          <div class="col3">
              <input type="text"  class="form-control short" id="data2" :value="this.typeface" @input="onTypefaceClick">
          </div>
          <label for="date2" class="control-label">字体颜色：</label>
          <div class="col3">
              <input type="text"  class="form-control" id="data2" :value="this.color" @input="onColorClick">
          </div>
        </div><br>

        <div class="form-group margin0">
            <label for="date2" class="control-label">字符串2：</label><br>
            <div class="col-sm-4">
                <input type="text"  class="form-control short" id="data2">
            </div>
        </div><br>

        <div class="group">
          <label for="date2" class="control-label">字体：</label>
          <div class="col3">
              <input type="text"  class="form-control short" id="data2" :value="typeface2" @input="onTypeface2Click">
          </div>
          <label for="date2" class="control-label">字体颜色：</label>
          <div class="col3">
              <input type="text"  class="form-control" id="data2" :value="color2" @input="onColor2Click">
          </div>

          <label for="date2" class="control-label">倾角：</label>
          <div class="col3">
              <input type="text"  class="form-control secondary" id="data2" :value="angle" @input="onAngleClick">
          </div>
        </div><br>


        <input type="button" class="Sender" id="btn3" value='合成图片' @click="watermark">
        <input type="button" class="Sender" id="btn3" value='保存图片' >
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function(){
    return {
      // 结果图片
      resultImg:'',
      // 背景图片地址
      backgroundImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528197984627&di=9b182d3f3e0cca3163d2a8d13e1219f4&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F14%2F69%2F74358PIC6ys_1024.jpg',
      // 字体1
      typeface:'',
      // 字体2
      typeface2:'',
      // 字体颜色1
      color:'',
      // 字体颜色2
      color2:'',
      // 倾斜角度
      angle:''
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
      _this.$router.push('/picture');
      _this.$store.dispatch('setSlide', 0);
    },
    // 字体1
    onTypefaceClick: function(e) {
      var typeface = e.target.value
      this.typeface = typeface;
    },
    // 字体2
    onTypeface2Click: function(e) {
      var typeface2 = e.target.value
      this.typeface2 = typeface2;
    },
    // 字体颜色
    onColorClick: function(e) {
      var color = e.target.value
      this.color = color;
    },
    // 字体颜色2
    onColor2Click: function(e) {
      var color2 = e.target.value
      this.color2 = color2;
    },
    // 倾斜角度
    onAngleClick: function(e) {
      var angle = e.target.value
      this.angle = angle;
    },

    // 添加水印
    watermark: function() {
      var _this = this;
      try {
        cordova.plugins.AresImageProcess.watermark('', '',_this. backgroundImg, _this.angle, success, error)
        function success(res){
            _this.resultImg = "data:image/jpg;base64," + res;
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
          margin: px2rem(40px) 0 px2rem(20px) 0 ;
          box-sizing: border-box;
          padding-left:px2rem(40px);
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
              width: px2rem(550px);
              select,input {
                  margin-top: px2rem(20px) ;
                  box-shadow:3px 3px 3px #e2e2e2 inset;
                  padding-left: px2rem(15px);
                  width: 100%;
                  height: px2rem(70px);
                  color: #000;
                  font-size: px2rem(24px);
                  border-radius: px2rem(6px);
                  border: 1px solid #ccc; // 跳整borderColor
                  background: #fff;
                  opacity: 1;
              }
              .short{
                width: px2rem(530px);
                height: px2rem(55px);
              }
          }
      }
      .margin0{
        margin-top: 0;
      }
      .group{
        display: inline-block;
        margin: 0 0 px2rem(20px) 0 ;
        box-sizing: border-box;
        padding-left:px2rem(40px);
        label {
            display: inline-block;
            font-size: px2rem(20px);
            margin:0 0 px2rem(20px) 0;
            // vertical-align: middle;
        }
        .col3{
          display: inline-block;
          margin-right: px2rem(5px);
          input{
            width: px2rem(75px);
            height: px2rem(28px);
            padding-left: px2rem(4px);
            border: 2px solid #ccc;
            background: #fff;
            opacity: 1;
            font-size: px2rem(20px);
          }
          .short{
            width: px2rem(38px);
          }
          .secondary{
            width: px2rem(60px);
          }
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
      .Sender{
        margin: 0 0 px2rem(30px) px2rem(40px);
        width: px2rem(555px);
        height: px2rem(65px);
        background: #fff;
        border: 2px #797979 solid;
        text-align: center;
        border-radius: px2rem(10px)
      }
    }

  }
</style>
