
<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">
      <em @click="back" class="back"></em>查看系统相册
    </div>
    <!-- content -->
    <div class="content">
        <input type="button" class="Sender" id="btn3" value='打开系统相册' @click="systemAlbum">
        <div class="showPhoto">
            <img v-if="this.image == ''" src="../../../assets/photo.jpg" class="img-isOk" id="btn5" />
            <img v-else :src="this.image"/>
        </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function(){
    return {
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
    // 打开系统相册
    systemAlbum: function() {
      var _this = this;
      try {
        cordova.plugins.AresMultimedia.sysAlbum(success, error);
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
      .Sender{
        margin: px2rem(30px) 0 0 px2rem(40px);
        width: px2rem(555px);
        height: px2rem(65px);
        background: #fff;
        border: 3px #797979 solid;
        text-align: center;
        border-radius: px2rem(10px)
      }
      .showPhoto{
        box-sizing: border-box;
        width: px2rem(550px);
        height: 30%;
        margin:px2rem(20px) px2rem(40px);
        border: 2px #999 solid;
        padding: px2rem(10px);
        img{
          width: 100%;
          height: 100%;
        }
      }
    }

  }
</style>
