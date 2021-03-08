<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">
      <em @click="back" class="back"></em>轮播组件
    </div>
    <div class="content">
        <Form :model="setting" :label-width="100">
          <FormItem label="自动切换">
              <i-switch v-model="setting.autoplay">
                  <span slot="open">开</span>
                  <span slot="close">关</span>
              </i-switch>
          </FormItem>
          <FormItem label="圆形指示器">
              <i-switch v-model="setting.radiusDot">
                  <span slot="open">开</span>
                  <span slot="close">关</span>
              </i-switch>
          </FormItem>
          <FormItem label="自动切换速度">
              <Slider v-model="setting.autoplaySpeed" :min="300" :max="10000" :step="100"></Slider>
          </FormItem>
          <FormItem label="指示器位置">
              <RadioGroup v-model="setting.dots" type="button">
                  <Radio label="inside">内部</Radio>
                  <Radio label="outside">外部</Radio>
                  <Radio label="none">不显示</Radio>
              </RadioGroup>
          </FormItem>
          <FormItem label="切换箭头">
              <RadioGroup v-model="setting.arrow" type="button">
                  <Radio label="hover">悬停时显示</Radio>
                  <Radio label="always">一直显示</Radio>
                  <Radio label="never">不显示</Radio>
              </RadioGroup>
          </FormItem>
          <FormItem label="指示器触发方式">
              <RadioGroup v-model="setting.trigger" type="button">
                  <Radio label="click">点击</Radio>
                  <Radio label="hover">悬停</Radio>
              </RadioGroup>
          </FormItem>
      </Form>
      <Carousel
            v-model="value3"
            :autoplay="setting.autoplay"
            :autoplay-speed="setting.autoplaySpeed"
            :dots="setting.dots"
            :radius-dot="setting.radiusDot"
            :trigger="setting.trigger"
            :arrow="setting.arrow"
            style="width:400px">
            <CarouselItem>
                <div class="demo-carousel" >
                  <img src="../../assets/img1.jpg" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                  <img src="../../assets/img2.jpg" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                  <img src="../../assets/img3.jpg" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                  <img src="../../assets/img4.jpg" alt="">
                </div>
            </CarouselItem>
      </Carousel>
    </div>

  </div>

</template>
<script>
    export default {
        data () {
            return {
                value3: 0,
                setting: {
                    autoplay: true,
                    autoplaySpeed: 2000,
                    dots: 'inside',
                    radiusDot: true,
                    trigger: 'click',
                    arrow: 'hover'
                }
            }

        },
        methods: {
          // 返回首页插件
          back: function() {
            var _this = this;
            _this.$router.push('/ui');
            _this.$store.dispatch('setSlide', 0);
          }
        },

    }
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
      // padding: px2rem(50px);
      margin-top: px2rem(150px);
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      width: 100%;
      height: 100%;
      background: #f6f6f6;
      padding-bottom: px2rem(15px);
      font-size: px2rem(28px);
      .demo-carousel{
        width:px2rem(650px);
        height:px2rem(350px);
        background:#000;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
