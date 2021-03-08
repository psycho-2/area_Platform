<template>
  <div class="mwrapper">
      <ul class="list">
        <li @click="details(item.name)" v-for="(item,index) in fundList" :key="index"  class="technology">{{item.name}} <em class="arrow"></em></li>
      </ul>
  </div>
</template>

<script>
import  {fundListJson}  from '../api/retail'
export default {
  data: function(){
    return {
      fundList:[]
    }
  },
  computed: {

  },
  created: function () {
    this.fundList = fundListJson.data;
  },
  mounted: function () {

  },
  methods: {
    //列表每一行点击事件
    details: function(name) {
      var _this = this;
      switch(name){
        case "数据加解密":
            _this.$router.push('/encryption');
            _this.$store.dispatch('setSlide', 1);
        break;
        case "数据库操作":
            _this.$router.push('/operation');
            _this.$store.dispatch('setSlide', 1);
        break;
        case "外接设备操作":
            _this.$router.push('/external');
            _this.$store.dispatch('setSlide', 1);
        break;
        case "数据请求":
            _this.$router.push('/dataRequest');
            _this.$store.dispatch('setSlide', 1);
        break;
        case "拍照、录音、录像":
            _this.$router.push('/recording');
            _this.$store.dispatch('setSlide', 1);
        break;
        case "图片处理":
            _this.$router.push('/picture');
            _this.$store.dispatch('setSlide', 1);
        break;
        case "文件操作":
            _this.$router.push('/file');
            _this.$store.dispatch('setSlide', 1);
        break;
        case "设备信息":
            _this.$router.push('/equipment');
            _this.$store.dispatch('setSlide', 1);
        break;
        case "文档阅读":
            _this.$router.push('/reading');
            _this.$store.dispatch('setSlide', 1);
        break;
        case "应用信息":
            _this.$router.push('/application');
            _this.$store.dispatch('setSlide', 1);
        break;
        case "遮罩效果":
            _this.$router.push('/mask');
            _this.$store.dispatch('setSlide', 1);
        break;
      }
    }
  },
  components: {

  }
};
</script>

<style lang="scss" scoped>
@import '../common/sass/util.scss';
.mwrapper{
  box-sizing: border-box;
  font-size: px2rem(28px);
  font-weight: 400;
  position: relative;
  -webkit-overflow-scrolling: touch;
    // 让文本框滑动更流畅
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
        background: url('../assets/right.png') no-repeat;
        background-size: cover;
      }
    }
  }
}

</style>
