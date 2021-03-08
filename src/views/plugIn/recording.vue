<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">
      <em @click="back" class="back"></em>拍照音视频
    </div>
    <!-- content -->
    <div class="content">
        <ul class="list">
            <li @click="getInto(item.name)" v-for="(item,index) in recordingList" :key="index"  class="technology">{{item.name}} <em class="arrow"></em></li>
        </ul>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function(){
    return {
      recordingList:[
        {"name":"拍摄照片"},
        {"name":"录制音频"},
        {"name":"录制视频"},
        {"name":"二维码及条形码"},
        {"name":"查看系统相册"},
        {"name":"照片展示"},
        {"name":"视频播放"}
      ]
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
      _this.$router.push('/plugIn');
      _this.$store.dispatch('setSlide', 0);
    },
    // 每一行有一个点击事件
    getInto: function(external) {
      var _this = this;
      switch(external){
        case "拍摄照片":
            _this.$router.push('/photograph');
            _this.$store.dispatch('setSlide', 1);
        break;
        case "录制音频":
            _this.$router.push('/audio');
            _this.$store.dispatch('setSlide', 1);
        break;
        case "录制视频":
            _this.$router.push('/recordVideo');
            _this.$store.dispatch('setSlide', 1);
        break;
        case "二维码及条形码":
            _this.$router.push('/barCode');
            _this.$store.dispatch('setSlide', 1);
        break;
        case "查看系统相册":
            _this.$router.push('/systemAlbum');
            _this.$store.dispatch('setSlide', 1);
        break;
        case "照片展示":
            _this.$router.push('/photoDisplay');
            _this.$store.dispatch('setSlide', 1);
        break;
        case "视频播放":
            _this.$router.push('/videoPlayback');
            _this.$store.dispatch('setSlide', 1);
        break;
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
      background: #f6f6f6;
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
      margin-top: px2rem(114px);
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      width: 100%;
      height: 100%;
      background: #f6f6f6;
      padding-bottom: px2rem(15px);
      font-size: px2rem(28px);
      .list{
        width: 100%;
        height: 100%;
        li{
          box-sizing: border-box;
          width: 100%;
          height: px2rem(80px);
          line-height: px2rem(80px);
          padding:0 px2rem(30px);
          background: #fff;
          border-bottom: 2px #f2f2f2 solid;
          .arrow{
            width: px2rem(22px);
            height: px2rem(22px);
            margin-top: px2rem(30px);
            float: right;
            background: url('../../assets/right.png') no-repeat;
            background-size: cover;
          }
        }
      }
    }

  }
</style>
