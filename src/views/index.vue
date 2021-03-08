<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">Ares Platform</div>
    <!-- content -->
    <div class="content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    </div>
    <!-- footer -->
    <ul class="footer">
      <li @click="onMenuClick(0)" :class="['J_sidebar_menu',this.$store.getters.status == 0 ? 'active' : '']">assembly</li>
      <li @click="onMenuClick(1)" :class="['J_sidebar_menu',this.$store.getters.status == 1 ? 'active' : '']">UI</li>
      <li @click="onMenuClick(2)" :class="['J_sidebar_menu',this.$store.getters.status == 2 ? 'active' : '']">server</li>
    </ul>
  </div>
</template>

<script>
module.exports = {
  data: function(){
    return {
      activeStatus: 0 // 初始时，渲染状态0
    }
  },
  created: function () {
  },
  mounted: function () {

  },
  methods: {
    onMenuClick: function(index) {
      var _this = this
      switch(index) {
        case 0:
          _this.$store.dispatch('setStatus', 0);
          _this.$router.push('/plugIn');
          break;
        case 1:
          _this.$store.dispatch('setStatus', 1);
          _this.$router.push('/ui');
          break;
        case 2:
          _this.$store.dispatch('setStatus', 2);
          _this.$router.push('/server');
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
    }
    .content{
      box-sizing: border-box;
      margin-top: px2rem(114px);
      margin-bottom: px2rem(80px);
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      width: 100%;
      height: 100%;
      // margin-bottom: px2rem(70px);
      background: #f6f6f6;
      padding-bottom: px2rem(15px);
    }
    // 尾部
    .footer{
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 10001;
        width: 100%;
        height: px2rem(80px);
        box-sizing: border-box;
        overflow: hidden; // 触发bfc布局
        background: #fff;
        .J_sidebar_menu{
          float: left;
          width: 33%;
          height: 100%;
          line-height: px2rem(79px);
          font-size: px2rem(30px);
          font-weight: 600;
          text-align: center;
          &.active{
            background: #ccc;
            color: #fff;
            border-radius: px2rem(15px);
          }
        }
    }
  }
</style>
