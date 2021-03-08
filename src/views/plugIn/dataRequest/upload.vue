<template>
  <div class="mwrapper">
    <!-- 文件上传 -->
    <div class="form-group">
        <label for="date2" class="control-label">URL路径:</label><br>
        <div class="col-sm-4">
            <input type="text"  class="form-control short" id="data2" :value="fileUpload.urlRoute" @input="onUrlRouteClick">
        </div>
    </div><br>
    <div class="form-group">
        <label for="pass" class="control-label">文件地址：</label><br>
        <div class="col-sm-4">
            <select class="input-sm form-control short" id="get_cardtype2" :value="fileUpload.fileAddress" @change="onFileAddressClick">
              <option value="POST">./business/test001.zip</option>
            </select>
        </div>
    </div><br>
    <div class="form-group">
        <input type="button" value="开始上传" class="form-control start" id="data2" @click="startUploading"><br>
        <label for="pass" class="control-label">上传进度：</label>
        <!-- 按钮选择是否需要上传进度  -->
        <div :class="['J_sidebar_menu', fileUpload.progress == 1 ? 'active' : '']">
            <input type="button" :class="['clickLeft', fileUpload.progress == 1 ? 'clickRight' : '']" id="data2" @click="onTransversalClick">
        </div>
        <br>
        <!-- 进度条 -->
        <div v-if="fileUpload.progress == 1" class="progressBar">
            <!-- 当前进度 -->
            <div v-if="fileUpload.speed == 1" v-bind:style="{ width: fileUpload.width + 'px' }" class="current">
              <!-- 当前百分比 -->
              {{fileUpload.current}}
            </div>
        </div>
    </div><br>
    <div class="form-group">
        <label for="name2" class="control-label">接收报文：</label><br>
        <div class="col-sm-4">
            <textarea type="text" :value="fileUpload.receiveMessage" readonly="readonly" class="form-control short1" id="name2"></textarea>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      // 文件上传
      fileUpload: {
        // url路径
        urlRoute:'',
        // 上传文件地址
        fileAddress:'',
        // 按钮选择是否需要上传进度
        progress:0, //0是不要进度 1是需要
        // 进度条显示隐藏
        speed:0,//0隐藏 1显示
        // 进度条已下载大小
        loaded:null,
        // 进度条总计大小
        total: null,
        //进度条百分比
        current:'' + '%',
        // 接收报文
        receiveMessage:'',
        // 动态实时设置进度条宽度
        width:null
        // this.fileUpload.current*450
      },

    }
  },
  computed: {

  },
  created: function () {

  },
  mounted: function () {

  },
  methods: {
    // url路径
    onUrlRouteClick:function(e){
      var urlRoute  = e.target.value
      this.fileUpload.urlPath = urlRoute;
    },
    // 文件地址
    onFileAddressClick:function(){

    },
    // 进度条点击小圈横移
    onTransversalClick:function(){
      if(this.fileUpload.progress == 0){
          this.fileUpload.progress = 1
      }else{
        this.fileUpload.progress = 0
      }

    },
    // 开始上传
    startUploading :function(){
      var _this = this;
      // 先验证url路径是否为空
      if(_this.fileUpload.urlRoute == '' || _this.fileUpload.fileAddress == ''){
        try {
          cordova.plugins.WebToolCommon.alertMessage('URL路径和文件地址不能为空！',function(){},function(){});
        }
        catch(err) {
              console.log(err);
        }
      }else{
        // 判断是否需要进度条
        if(_this.fileUpload.progress == 1){//需要
          try {
            cordova.plugins.AresRequest.busiUpload(_this.fileUpload.fileAddress, _this.fileUpload.urlRoute, 0, true, success, error);
            function success(res){
                _this.fileUpload.loaded = res.loaded;//已下载大小
                _this.fileUpload.total = res.total//总计大小
                // 进度条显示
                _this.fileUpload.speed = 1;
                // 拿到百分比
                _this.fileUpload.current = res.loaded/res.total;
                // 设置进度条宽度
                _this.fileUpload.width =  _this.fileUpload.current*450
            }
            function error(msg){
              cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
            }
          }
          catch(err) {
              console.log(err);
          }
        }else{//不需要
            cordova.plugins.AresRequest.busiUpload(_this.fileUpload.fileAddress, _this.fileUpload.urlRoute, 0, false, success, error);
            function success(res){
               _this.fileUpload.receiveMessage = res
            }
            function error(msg){
              cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
            }
        }

      }
    }
  },
  components: {

  }
};
</script>

<style scoped lang="scss">
@import '../../../common/sass/util.scss';
.mwrapper{
  box-sizing: border-box;
  font-size: px2rem(28px);
  font-weight: 400;
  position: relative;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  margin-top: px2rem(40px);
    // 让文本框滑动更流畅
  .form-group {
      display: inline-block;
      margin-bottom: px2rem(20px);
      box-sizing: border-box;
      padding-left:px2rem(30px);
      label {
          display: inline-block;
          width: px2rem(130px);
          font-size: px2rem(26px);
          font-weight: bold;
          margin-right: px2rem(10px);
          vertical-align: top;
      }
      // 进度条
      .J_sidebar_menu{
          display: inline-block;
          margin-left: px2rem(280px);
          width: px2rem(75px);
          height: px2rem(40px);
          border: px2rem(1px) #ccc solid;
          background: #fff;
          border-radius: px2rem(40px);
          &.active{
            background: #4cd663;
          }
          .clickLeft{
            width: px2rem(45px);
            height: px2rem(40px);
            border: 1px #ccc solid;
            border-radius: px2rem(40px);
            background: #fff;
            &.clickRight{
              margin-left: px2rem(30px);
            }
          }

      }
      // 显示进度条
      .progressBar{
          margin: px2rem(15px) 0 0 px2rem(40px);
          width: px2rem(450px);
          height: px2rem(35px);
          border: 1px #999 solid;
          border-radius: px2rem(20px);
          // 当前进度
          .current{
            display: inline-block;
            background: #eb2722;
            // width: px2rem(150px);
            height: px2rem(35px);
            border-radius: px2rem(20px);
            text-align: center;
            color: #000;
          }
      }
      .col-sm-4{
          display: inline-block;
          width: px2rem(330px);
          margin-right: px2rem(10px);
          input,textarea,select {
              box-shadow:3px 3px 3px #e2e2e2 inset;
              padding-left: px2rem(15px);
              width: 100%;
              color: #000;
              font-size: px2rem(24px);
              height: px2rem(50px);
              border-radius: px2rem(6px);
              border: 1px solid #ccc; // 跳整borderColor
              background: #fff;
              opacity: 1;
          }
          select{
            margin-left: px2rem(50px);
          }
          .short{
            height: px2rem(70px);
            width: px2rem(490px);
            margin: px2rem(20px) 0 0 px2rem(20px);
          }
          .short1{
            height: px2rem(300px);
            width: px2rem(490px);
            margin: px2rem(20px) 0 0 px2rem(20px);
            padding-top: px2rem(10px);
          }
          textarea{
              height: px2rem(280px);
          }
      }
      .start{
        margin: px2rem(10px) 0 px2rem(20px) px2rem(25px);
        width: px2rem(480px);
        height: px2rem(65px);
        background: #fff;
        border: px2rem(3px) #797979 solid;
        text-align: center;
        border-radius: px2rem(10px)
      }
  }
}
</style>
