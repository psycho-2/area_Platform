<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">
      <em @click="back" class="back"></em>单页面路由跳转
    </div>
    <div class="content">
        <Tabs type="card" closable @on-tab-remove="handleTabRemove">
            <TabPane class="tab" label="macOS" icon="logo-apple" v-if="tab0">
                <div>
                    联系人：
                    <Input prefix="ios-contact" placeholder="Enter name" style="width: auto" />
                </div>
                <div style="margin-top: 6px">
                    电&nbsp;&nbsp;&nbsp;&nbsp;话：
                    <Input placeholder="Enter name" style="width: auto">
                        <Icon type="ios-contact" slot="prefix" />
                    </Input>
                </div>

            </TabPane>
            <TabPane class="tab" label="Windows" icon="logo-windows" v-if="tab1">
              <div>
                  <Time :time="time2" />
                  <br>
                  <Time :time="time2" type="date" />
                  <br>
                  <Time :time="time2" type="datetime" />
              </div>
            </TabPane>
            <TabPane class="tab" label="Linux" icon="logo-tux" v-if="tab2">
              <Time :time="time3" :interval="1" />
            </TabPane>
        </Tabs>
    </div>

  </div>

</template>
<script>
    export default {
        data () {
            return {
                tab0: true,
                tab1: true,
                tab2: true,
                time2: (new Date()).getTime() - 86400 * 3 * 1000,
                time3: new Date()
            }

        },
        methods: {
          // 返回首页插件
          back: function() {
            var _this = this;
            _this.$router.push('/ui');
            _this.$store.dispatch('setSlide', 0);
          },
          handleTabRemove (name) {
              this['tab' + name] = false;
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
    font-size: px2rem(18px);
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
    }
  }
</style>
