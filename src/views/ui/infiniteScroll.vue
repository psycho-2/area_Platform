
<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">
      <em @click="back" class="back"></em>图片懒加载
    </div>
    <!-- content -->
    <div id="lazyload">
        <!-- img中使用图片懒加载。 v-lazy代替v-bind:src -->
        <ul class="img">
            <li v-for="(item,index) in imgList" :key="index">
                <img v-lazy="item" alt="">
            </li>
        </ul>

        <!-- 背景图中使用图片懒加载。 v-lazy:background-image = "" -->
        <!-- <ul class="bgImg">
            <li v-for="(item,index) in imgList" :key="index" v-lazy:background-image="item"></li>
        </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      img: [
        'assets/img/1.jpg',
        'assets/img/2.jpg',
        'assets/img/3.jpg',
        'assets/img/4.jpg',
      ],
    }
  },
  created: function () {

  },
  computed:{
      imgList() {
        // let fs = require('fs');
        // let path = require('path');

        // fs.readdir('../../assets/img', (err, d) => {
        //   console.log(d);
        // })
        let arr = [];
        for(let i = 1; i <= 20; i++) {
          arr.push(require(`../../assets/img/${i}.jpg`));
        }
        return arr;
      }
      //return this.img.map(item => require(`../../${item}`))

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
    #lazyload{
      box-sizing: border-box;
      // padding: px2rem(40px) 0 0 px2rem(40px);
      margin-top: px2rem(114px);
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      width: 100%;
      height: 100%;
      background: #f6f6f6;
      padding-bottom: px2rem(15px);
      // padding-top: px2rem(10px);
      font-size: px2rem(28px);
      background-color: #fcc;
      .img{
            width: 100%;
            height: 100%;
            background-color: #fcc;
            li{
              display: inline;
            }
        }
      .bgImg{
          li{
              margin-bottom: 10px;
              background-repeat: no-repeat;       //注意图片大小哦，否则可以显示不全
              background-size: cover;
          }
      }
    }
  }
</style>
