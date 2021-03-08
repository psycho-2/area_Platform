<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">
      <em @click="back" class="back"></em>图片合成
    </div>
    <!-- content -->
    <div class="content">
        <div class="form-group">
          <!-- 背景图片 -->
          <label for="pass" class="control-label">图片路径：</label><br>
          <div class="col-sm-4">
              <select class="input-sm form-control" id="get_cardtype2" :value="backgroundImg" @change="onBackgroundImgClick">
                <option value="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528197984627&di=9b182d3f3e0cca3163d2a8d13e1219f4&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F14%2F69%2F74358PIC6ys_1024.jpg">./business/test001.jpg</option>
              </select>
          </div>
        </div><br>

        <div class="col-sm-3">
          <img v-if="this.resultImg == ''" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528197984627&di=9b182d3f3e0cca3163d2a8d13e1219f4&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F14%2F69%2F74358PIC6ys_1024.jpg" class="img-isOk" id="btn5" />
          <img v-else :src="this.resultImg"/>
        </div><br>
<!-- 文本1 -->
      <div class="form-group margin0">
        <!-- 文本字符串 -->
          <label for="date2" class="control-label">字符串1：</label><br>
          <div class="col-sm-4">
              <input type="text"  class="form-control short" id="data2" :value="texts1.string1" @input="onString1Click">
          </div>
      </div><br>

      <div class="group">
          <label for="date2" class="control-label">起始坐标x：</label>
          <div class="col3">
              <input type="text"  class="form-control" id="data2" :value="texts1.coordinateX" @input="onCoordinateXClick">
          </div>
          <label for="date2" class="control-label">起始坐标y：</label>
          <div class="col3">
              <input type="text"  class="form-control" id="data2" :value="texts1.coordinateY" @input="onCoordinateYClick">
          </div>
          <label for="date2" class="control-label">字体：</label>
          <div class="col3">
              <input type="text"  class="form-control short" id="data2" :value="texts1.typeface" @input="onTypefaceClick">
          </div><br>
          <label for="date2" class="control-label">宽度：</label>
          <div class="col3">
              <input type="text"  class="form-control short" id="data2" :value="texts1.width" @input="onWidthClick">
          </div>
          <label for="date2" class="control-label">高度：</label>
          <div class="col3">
              <input type="text"  class="form-control short" id="data2" :value="texts1.height" @input="onHeightClick">
          </div>
          <label for="date2" class="control-label">字体颜色：</label>
          <div class="col3">
              <input type="text"  class="form-control" id="data2" :value="texts1.color" @input="onColorClick">
          </div>
          <!-- <label for="date2" class="control-label">G：</label>
          <div class="col3">
              <input type="text"  class="form-control short" id="data2">
          </div>
          <label for="date2" class="control-label">B：</label>
          <div class="col3">
              <input type="text"  class="form-control short" id="data2">
          </div> -->
      </div><br>
<!-- 文本2 -->
      <div class="form-group margin0">
        <!-- 文本字符串 -->
          <label for="date2" class="control-label">字符串2：</label><br>
          <div class="col-sm-4">
              <input type="text"  class="form-control short" id="data2" :value="texts2.string2" @input="onString2Click">
          </div>
      </div><br>

      <div class="group">
          <label for="date2" class="control-label">起始坐标x：</label>
          <div class="col3">
              <input type="text"  class="form-control" id="data2" :value="texts2.coordinateX" @input="onCoordinateX2Click">
          </div>
          <label for="date2" class="control-label">起始坐标y：</label>
          <div class="col3">
              <input type="text"  class="form-control" id="data2" :value="texts2.coordinateY" @input="onCoordinateY2Click">
          </div>
          <label for="date2" class="control-label">字体：</label>
          <div class="col3">
              <input type="text"  class="form-control short" id="data2" :value="texts2.typeface" @input="onTypeface2Click">
          </div><br>
          <label for="date2" class="control-label">宽度：</label>
          <div class="col3">
              <input type="text"  class="form-control short" id="data2" :value="texts2.width" @input="onWidth2Click">
          </div>
          <label for="date2" class="control-label">高度：</label>
          <div class="col3">
              <input type="text"  class="form-control short" id="data2" :value="texts2.height" @input="onHeight2Click">
          </div>
          <label for="date2" class="control-label">字体颜色：</label>
          <div class="col3">
              <input type="text"  class="form-control" id="data2" :value="texts2.color" @input="onColor2Click">
          </div>
          <!-- <label for="date2" class="control-label">G：</label>
          <div class="col3">
              <input type="text"  class="form-control short" id="data2">
          </div>
          <label for="date2" class="control-label">B：</label>
          <div class="col3">
              <input type="text"  class="form-control short" id="data2">
          </div> -->

      </div><br>

<!-- 文本结束 -->

<!-- 元素图片1 -->
      <div class="form-group">
        <!-- 合成图片 -->
        <label for="pass" class="control-label">图片1：</label><br>
        <div class="col-sm-4">
            <select class="input-sm form-control" id="get_cardtype2" :value="image1.eleDiagram" @change="onEleDiagramClick">
              <option value="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528197984627&di=9b182d3f3e0cca3163d2a8d13e1219f4&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F14%2F69%2F74358PIC6ys_1024.jpg">./business/test001.jpg</option>
            </select>
        </div>
      </div><br>

      <div class="group">
          <label for="date2" class="control-label">起始坐标x：</label>
          <div class="col3">
              <input type="text"  class="form-control secondary" id="data2" :value="image1.imgCoordinateX" @input="onImgCoordinateXClick">
          </div>
          <label for="date2" class="control-label">宽度：</label>
          <div class="col3">
              <input type="text"  class="form-control secondary" id="data2" :value="image1.imgWidth" @input="onImgWidthClick">
          </div><br>
          <label for="date2" class="control-label">起始坐标y：</label>
          <div class="col3">
              <input type="text"  class="form-control secondary" id="data2" :value="image1.imgCoordinateY" @input="onImgCoordinateYClick">
          </div>
          <label for="date2" class="control-label">高度：</label>
          <div class="col3">
              <input type="text"  class="form-control secondary" id="data2" :value="image1.imgHeight" @input="onImgHeightClick">
          </div>
      </div>
      <div class="sm-3">
        <img :src="image1.eleDiagram" class="img-isOk" id="btn5" />
      </div><br>

<!-- 元素图片2 -->

      <div class="form-group">
        <!-- 合成图片 -->
        <label for="pass" class="control-label">图片2：</label><br>
        <div class="col-sm-4">
            <select class="input-sm form-control" id="get_cardtype2" :value="image2.eleDiagram2" @change="onEleDiagram2Click">
              <option value="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528197984627&di=9b182d3f3e0cca3163d2a8d13e1219f4&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F14%2F69%2F74358PIC6ys_1024.jpg">./business/test001.jpg</option>
            </select>
        </div>
      </div><br>

      <div class="group">
          <label for="date2" class="control-label">起始坐标x：</label>
          <div class="col3">
              <input type="text"  class="form-control secondary" id="data2" :value="image2.imgCoordinateX2" @input="onImgCoordinateX2Click">
          </div>
          <label for="date2" class="control-label">宽度：</label>
          <div class="col3">
              <input type="text"  class="form-control secondary" id="data2" :value="image2.imgWidth2" @input="onImgWidth2Click">
          </div><br>
          <label for="date2" class="control-label">起始坐标y：</label>
          <div class="col3">
              <input type="text"  class="form-control secondary" id="data2" :value="image2.imgCoordinateY2" @input="onImgCoordinateY2Click">
          </div>
          <label for="date2" class="control-label">高度：</label>
          <div class="col3">
              <input type="text"  class="form-control secondary" id="data2" :value="image2.imgHeight2" @input="onImgHeight2Click">
          </div>
      </div>
      <div class="sm-3">
        <img :src="image1.eleDiagram" class="img-isOk" id="btn5" />
      </div><br>

      <input type="button" class="Sender" id="btn3" value='合成图片' @click="synthetic">
      <input type="button" class="Sender" id="btn3" value='保存图片' >
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function(){
    return {
      // 结果图片
      resultImg:'',
      // 背景图片地址
      backgroundImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528197984627&di=9b182d3f3e0cca3163d2a8d13e1219f4&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F14%2F69%2F74358PIC6ys_1024.jpg',
      // 文本信息数据1
      texts1:{
        // 字符串1
        string1 : '',
        // 起始坐标x：
        coordinateX:'',
        // 起始坐标y
        coordinateY:'',
        // 字体
        typeface:'',
        // 宽度
        width:'',
        // 高度
        height:'',
        // 字体颜色
        color:''
      },
      // 文本信息数据2
      texts2:{
        // 字符串1
        string2 : '',
        // 起始坐标x：
        coordinateX:'',
        // 起始坐标y
        coordinateY:'',
        // 字体
        typeface:'',
        // 宽度
        width:'',
        // 高度
        height:'',
        // 字体颜色
        color:''
      },
      // 合成图片信息1
      image1:{
        // 元素图1
        eleDiagram:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528197984627&di=9b182d3f3e0cca3163d2a8d13e1219f4&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F14%2F69%2F74358PIC6ys_1024.jpg',
        // 起始坐标x：
        imgCoordinateX:'',
        // 起始坐标y
        imgCoordinateY:'',
        // 宽度
        imgWidth:'',
        // 高度
        imgHeight:'',
      },
      // 合成图片信息2
      image2:{
        // 元素图2
        eleDiagram2:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528197984627&di=9b182d3f3e0cca3163d2a8d13e1219f4&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F14%2F69%2F74358PIC6ys_1024.jpg',
        // 起始坐标x：
        imgCoordinateX2:'',
        // 起始坐标y
        imgCoordinateY2:'',
        // 宽度
        imgWidth2:'',
        // 高度
        imgHeight2:'',
      }
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
      _this.$router.push('/picture');
      _this.$store.dispatch('setSlide', 0);
    },
    // 背景图片地址
    onBackgroundImgClick: function(e) {
      var backgroundImg = e.target.value
      this.backgroundImg = backgroundImg;
    },
  // 文本信息数据1
    // 字符串1
    onString1Click: function(e) {
      var string1  = e.target.value
      this.texts1.string1 = string1;
    },
    // 起始坐标x
    onCoordinateXClick: function(e) {
      var coordinateX  = e.target.value
      this.texts1.coordinateX = coordinateX;
    },
    // 起始坐标y
    onCoordinateYClick: function(e) {
      var coordinateY  = e.target.value
      this.texts1.coordinateY = coordinateY;
    },
    // 字体
    onTypefaceClick: function(e) {
      var typeface = e.target.value
      this.texts1.typeface = typeface;
    },
    // 宽度
    onWidthClick: function(e) {
      var width  = e.target.value
      this.texts1.width = width;
    },
    // 高度
    onHeightClick: function(e) {
      var height = e.target.value
      this.texts1.height = height;
    },
    // 字体颜色
    onColorClick: function(e) {
      var color = e.target.value
      this.texts1.color = color;
    },
  // 文本信息数据2
    // 字符串2
    onString2Click: function(e) {
      var string2  = e.target.value
      this.texts2.string2 = string2;
    },
    // 起始坐标x
    onCoordinateX2Click: function(e) {
      var coordinateX  = e.target.value
      this.texts2.coordinateX = coordinateX;
    },
    // 起始坐标y
    onCoordinateY2Click: function(e) {
      var coordinateY  = e.target.value
      this.texts2.coordinateY = coordinateY;
    },
    // 字体
    onTypeface2Click: function(e) {
      var typeface = e.target.value
      this.texts2.typeface = typeface;
    },
    // 宽度
    onWidth2Click: function(e) {
      var width  = e.target.value
      this.texts2.width = width;
    },
    // 高度
    onHeight2Click: function(e) {
      var height = e.target.value
      this.texts2.height = height;
    },
    // 字体颜色
    onColor2Click: function(e) {
      var color = e.target.value
      this.texts2.color = color;
    },
  // 合成图片信息1
    // 元素图1
    onEleDiagramClick: function(e) {
      var eleDiagram = e.target.value
      this.image1.eleDiagram = eleDiagram;
    },
    // 起始坐标x
    onImgCoordinateXClick: function(e) {
      var imgCoordinateX = e.target.value
      this.image1.imgCoordinateX = imgCoordinateX;
    },
    // 起始坐标y
    onImgCoordinateYClick: function(e) {
      var imgCoordinateY = e.target.value
      this.image1.imgCoordinateY = imgCoordinateY;
    },
    // 宽
    onImgWidthClick: function(e) {
      var imgWidth = e.target.value
      this.image1.imgWidth = imgWidth;
    },
    // 高
    onImgHeightClick: function(e) {
      var imgHeight = e.target.value
      this.image1.imgHeight = imgHeight;
    },
  // 合成图片信息2
    // 元素图2
    onEleDiagram2Click: function(e) {
      var eleDiagram2 = e.target.value
      this.image2.eleDiagram2 = eleDiagram2;
    },
    // 起始坐标x
    onImgCoordinateX2Click: function(e) {
      var imgCoordinateX2 = e.target.value
      this.image2.imgCoordinateX2 = imgCoordinateX2;
    },
    // 起始坐标y
    onImgCoordinateY2Click: function(e) {
      var imgCoordinateY2 = e.target.value
      this.image2.imgCoordinateY2 = imgCoordinateY2;
    },
    // 宽
    onImgWidth2Click: function(e) {
      var imgWidth2 = e.target.value
      this.image2.imgWidth2 = imgWidth2;
    },
    // 高
    onImgHeight2Click: function(e) {
      var imgHeight2 = e.target.value
      this.image2.imgHeight2 = imgHeight2;
    },
    // 合成图片
    synthetic: function() {
      var _this = this;
      try {

        // 图片路径
        var srcImages1 = [];
        srcImages1.path =_this. image1.eleDiagram;
        srcImages1.x = _this.image1.imgCoordinateX;
        srcImages1.y = _this.image1.imgCoordinateY;
        srcImages1.w = _this.image1.imgWidth;
        srcImages1.h = _this.image1.imgHeight;
        // 文本路径
        var texts1 = [];
        texts1.fontSize = _this.texts1.typeface;
        texts1.fontColor = _this.texts1.color;
        texts1.x = _this.texts1.coordinateX;
        texts1.y = _this.texts1.coordinateY;
        texts1.w = _this.texts1.width;
        texts1.h = _this.texts1.height;

        cordova.plugins.AresImageProcess.composition(srcImages1, texts1, _this.backgroundImg, success, error);
        function success(res){
            _this.resultImg = "data:image/jpg;base64," + res;
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
      .form-group {
          display: inline-block;
          margin: px2rem(40px) 0 px2rem(20px) 0 ;
          box-sizing: border-box;
          padding-left:px2rem(40px);
          label {
              display: inline-block;
              width: px2rem(130px);
              font-size: px2rem(26px);
              font-weight: bold;
              margin-right: px2rem(10px);
              vertical-align: top;
          }
          .col-sm-4{
              display: inline-block;
              width: px2rem(550px);
              select,input {
                  margin-top: px2rem(20px) ;
                  box-shadow:3px 3px 3px #e2e2e2 inset;
                  padding-left: px2rem(15px);
                  width: 100%;
                  height: px2rem(70px);
                  color: #000;
                  font-size: px2rem(24px);
                  border-radius: px2rem(6px);
                  border: 1px solid #ccc; // 跳整borderColor
                  background: #fff;
                  opacity: 1;
              }
              .short{
                width: px2rem(530px);
                height: px2rem(55px);
              }
          }
      }
      .group{
        display: inline-block;
        margin: 0 0 px2rem(20px) 0 ;
        box-sizing: border-box;
        padding-left:px2rem(40px);
        label {
            display: inline-block;
            font-size: px2rem(20px);
            margin:0 0 px2rem(20px) 0;
            // vertical-align: middle;
        }
        .col3{
          display: inline-block;
          margin-right: px2rem(5px);
          input{
            width: px2rem(75px);
            height: px2rem(28px);
            padding-left: px2rem(4px);
            border: 2px solid #ccc;
            background: #fff;
            opacity: 1;
            font-size: px2rem(20px);
          }
          .short{
            width: px2rem(38px);
          }
          .secondary{
            width: px2rem(50px);
          }
        }

      }
      // 图片
      .sm-3{
          display: inline-block;
          box-sizing: border-box;
          width: px2rem(200px);
          height: px2rem(200px);
          margin-left: px2rem(15px);
          border: 2px #999 solid;
          padding: px2rem(10px);
        img{
          width: 100%;
          height: 100%;
        }
      }
      .margin0{
        margin-top: 0;
      }
      .col-sm-3{
          box-sizing: border-box;
          width: px2rem(550px);
          height: 30%;
          margin-left: px2rem(40px);
          border: 2px #999 solid;
          padding: px2rem(10px);
        img{
          width: 100%;
          height: 100%;
        }
      }
      .Sender{
        margin: 0 0 px2rem(30px) px2rem(40px);
        width: px2rem(555px);
        height: px2rem(65px);
        background: #fff;
        border: 2px #797979 solid;
        text-align: center;
        border-radius: px2rem(10px)
      }
    }

  }
</style>
