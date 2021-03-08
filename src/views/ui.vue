<template>
  <div class="mwrapper">
    <ul class="list">
        <li @click="details(item.name)" v-for="(item,index) in fundList" :key="index"  class="technology">{{item.name}} <em class="arrow"></em></li>
    </ul>
  </div>
</template>

<script>
// import { fundListJson } from '../api/retail'
module.exports = {
  data: function(){
    return {
      fundList:[
        {"name":"折叠列表"},
        {"name":"轮播组件"},
        {"name":"遮罩效果"},
        {"name":"单页面路由跳转"},
        {"name":"轮播图"},
        {"name":"弹框"},
        {"name":"进度条"},
        {"name":"加载提示框"},
        {"name":"图片懒加载"},
      ]
    }
  },
  computed: {

  },
  created: function () {
    var _this = this ;
      //  进来先刷新页面
    //  _this.$store.dispatch('setStatus', 1);
    //  _this.$router.push('/ui');
  },
  mounted: function () {

  },
  methods: {
    //列表每一行点击事件
    details: function(name) {
      var _this = this;
      switch(name){
        case "折叠列表":
            // _this.$router.push('/encryption')
            _this.$store.dispatch('setSlide', 1);
        break;
        case "轮播组件":
            _this.$router.push('/assembly')
            _this.$store.dispatch('setSlide', 1);
        break;
        case "遮罩效果":
            // _this.$router.push('/external')
            _this.$store.dispatch('setSlide', 1);
        break;
        case "单页面路由跳转":
            _this.$router.push('/routingJump');
            _this.$store.dispatch('setSlide', 1);
        break;
        case "轮播图":
            _this.$router.push('/sowingMap');
            _this.$store.dispatch('setSlide', 1);
        break;
        case "弹框":
            _this.$router.push('/popUp');
            _this.$store.dispatch('setSlide', 1);
        break;
        case "进度条":
            _this.$router.push('/progressBar');
            _this.$store.dispatch('setSlide', 1);
        break;
        case "加载提示框":
            _this.$router.push('/indicator');
            _this.$store.dispatch('setSlide', 1);
        break;
        case "图片懒加载":
            _this.$router.push('/infiniteScroll');
            _this.$store.dispatch('setSlide', 1);
        break;

      }
    }
  },
  components: {

  }
};
</script>

<style scoped lang="scss">
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
