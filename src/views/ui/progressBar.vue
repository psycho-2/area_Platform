
<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">
      <em @click="back" class="back"></em>进度条
    </div>
    <!-- content -->
    <div class="content">
        <input type="button" value="开始上传" class="form-control start" id="data1" @click="startUploading"><br>
        <label for="pass" class="control-label">上传进度：</label>
        <!-- 按钮选择是否需要上传进度  -->
        <div :class="['J_sidebar_menu', this.progress == 1 ? 'active' : '']" @click="onTransversalClick">
            <input type="button" :class="['clickLeft',this.progress == 1 ? 'clickRight' : '']" id="data2" >
        </div>
        <br>
        <!-- 进度条 -->
        <div v-if="this. progress == 1" class="progressBar" id="progressBar">
            <!-- 当前进度 -->
            <div v-if="speed == 1" v-bind:style="{ width: width + 'px' }" class="current">
            </div>

        </div>
        <div v-if="this. progress == 1" class="percent">
          <!-- 当前百分比 -->
          {{percent}}
        </div>

    </div>
  </div>
</template>

<script>
module.exports = {
  data: function(){
    return {
      progress:0,
      speed:1,
      width:0,
      // 当前百分比
      percent:null
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
      _this.$router.push('/ui');
      _this.$store.dispatch('setSlide', 0);
    },
    // 进度条点击小圈横移
    onTransversalClick:function(){
      var _this = this;
      if(_this.progress == 0){
          _this.progress = 1;
      }else{
          _this.progress = 0;
      }

    },
    // // 开始上传
    startUploading :function(){
      var _this = this;
      var  progressBarWidth = document.getElementById("progressBar").offsetWidth;
      if(_this.width >= progressBarWidth){
          _this.width = 0;
      }
      var timer = window.setInterval(function(){
        _this.width += 5;
        _this.percent = Math.floor(_this.width/progressBarWidth*100) + '%';
        if(_this.width >= progressBarWidth){
          // 加载完成清定时器 弹框提示
          try {
            cordova.plugins.WebToolCommon.alertMessage('加载完成！',function(){},function(){});
          }
          catch(err) {
              console.log(err);
          }
          window.clearInterval(timer);
          // _this.width = 0;
          $('#data1').removeAttr('disabled');

        }else if(_this.width < progressBarWidth){
            $('#data1').attr('disabled', true);
        }
      },20)
      window.timer = timer;
      // console.log(timer);
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
      // padding-top: px2rem(50px);
      margin-top: px2rem(150px);
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      width: 100%;
      height: 100%;
      background: #f6f6f6;
      padding-bottom: px2rem(15px);
      font-size: px2rem(28px);
      .start{
        margin: px2rem(10px) 0 px2rem(40px) px2rem(65px);
        width: px2rem(480px);
        height: px2rem(65px);
        background: #fff;
        border: px2rem(3px) #797979 solid;
        text-align: center;
        border-radius: px2rem(10px)
      }
      label {
          display: inline-block;
          width: px2rem(130px);
          font-size: px2rem(26px);
          font-weight: bold;
          margin:0 px2rem(10px) 0 px2rem(70px);
          vertical-align: top;
      }
      // 进度条
      .J_sidebar_menu{
          display: inline-block;
          margin-left: px2rem(250px);
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
            height: px2rem(38px);
            border: 1px #ccc solid;
            border-radius: px2rem(40px);
            background: #fff;
            &.clickRight{
              margin-left: px2rem(30px);
            }
          }

      }
      // 显示进度条
      .progressBar{
          display: flex;
          align-items: center;
          box-sizing: border-box;
          padding: 0 px2rem(10px);
          margin: px2rem(30px) 0 0 px2rem(50px);
          width: px2rem(520px);
          height: px2rem(35px);
          border: 1px #999 solid;
          border-radius: px2rem(15px);
          // 当前进度
          .current{
            display: inline-block;
            background: #777;
            // width: px2rem(150px);
            height: px2rem(20px);
            border-radius: px2rem(15px);
            text-align: center;
            // color: #000;
          }
      }
      //百分比
      .percent{
        margin:px2rem(10px) 0  0 px2rem(500px);
        font-size: px2rem(22px);
      }
    }
  }
</style>
