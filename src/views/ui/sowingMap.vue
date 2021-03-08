
<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">
      <em @click="back" class="back"></em>原生轮播图
    </div>
    <!-- content -->
    <div class="content">
          <div class="slide" >
            <div class="slideshow">
              <transition-group tag="ul" name="image">
                <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
                  <a href="#">
                    <img :src='img'>
                  </a>
                </li>
              </transition-group>
            </div>
            <div class="bullet">
              <span v-for="(item, index) in imgArray" :class="{ 'active':index === mark }"
              @click="change(index)" :key="index"></span>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function(){
    return {
      timer: null,//定时器
      mark: 0, //比对图片索引的变量
      imgArray: [
        require('../../assets/timg1.jpg'),
        require('../../assets/timg2.jpg'),
        require('../../assets/timg3.jpg'),
        require('../../assets/timg4.jpg')
      ]
    }
  },
  created: function () {
      this.play()
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

    autoPlay () {
      this.mark++;
      if (this.mark === 4) {
        this.mark = 0
      }
    },
    play () {
      this.timer = setInterval(this.autoPlay, 2000)
    },
    change (i) {
      this.mark = i;
      this.stop();
      this.play();
    },
    stop () {
      clearInterval(this.timer)
    },
    move () {
      this.timer = setInterval(this.autoPlay, 2000)
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
      width: 100%;
      height: 100%;
      margin-top:px2rem(150px);
      .slide {
        width: px2rem(600px);
        height: px2rem(320px);
        margin: 0 auto;
        margin-top: px2rem(50px);
        overflow: hidden;
        position: relative;
      }
      .slideshow {
        width: px2rem(600px);
        height: px2rem(320px);
      }
      li {
        width: px2rem(600px);
        height: px2rem(320px);
        // background: #000;
        position: absolute;
        a{
          display: inline-block;
          width: 100%;
          height: 100%;
          img{
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }
      }
      .bullet {
        position: absolute;
        width: 100%;
        bottom: px2rem(10px);
        margin: 0 auto;
        z-index: 10;
        text-align: center;
      }
      .bullet span {
        width: px2rem(20px);
        height: px2rem(10px);
        border: px2rem(1px) solid;
        background: white;
        display: inline-block;
        margin-right: px2rem(10px);
      }
      .active {
        background: red !important;
      }
    }

  }
  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }

</style>
