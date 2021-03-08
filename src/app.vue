<template>
    <div id="appBody" v-cloak>
        <!-- 路由匹配到的组件将渲染在这里 -->
        <transition :name='slideName'>
          <router-view></router-view>
        </transition>
    </div>
</template>

<script>
module.exports =  {
    data:function () {
        return {
          slideName: 'slide-left'
        }
    },
    computed: {
      slide: function() {
          return this.$store.getters.slide
      }
    },
    components: {
    },
    created:function () {
    },
    directives: {

    },
    watch: {
      slide(val, oldVal) {
        // console.log('val: ', val);
        if (val === 0) {
          this.slideName = 'slide-right';
        } else {
          this.slideName = 'slide-left';
        }
      }
    }
};
</script>

<style lang="scss">
    @import './common/sass/base.scss';
    html,body{
        @include full-width-height;
        // height: 100%;  // set height on the main element in the body
    }
    /*这个指令对应的元素当Vue实例化完成前都不显示*/
    [v-cloak] {
        display: none;
    }
    #appBody {
        width: 100%;
        height: 100%;
    }

  .slide-left-enter-active {
    animation: moveL .3s;
  }
   .slide-right-enter-active {
    animation: moveR .3s;
  }


 @keyframes moveL {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes moveR {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
</style>
