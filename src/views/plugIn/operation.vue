<template>
  <div class="wrapper">
    <!-- header -->
    <div class="title">
      <em @click="back" class="back"></em>数据库操作
    </div>
    <!-- content -->
    <div class="content">
        <!-- 查询SQL -->
        <div class="source">
          <label class="string">查询SQL：</label>
          <div class="col-sm-4">
            <input type="text" class="bgWhite" id="get_cardpwd" :value="querySQL" @input="onQuerySQLClick" @blur="checkQuerySQLReg">
          </div>
        </div>
        <div class="source">
          <label class="string">非查询SQL：</label>
          <div class="col-sm-4">
            <input type="text" class="bgWhite" id="get_cardpwd" :value="nonQuerySQL" @input="onNonQuerySQLClick" @blur="checkNonQuerySQLReg">
            <!--  -->
          </div>
        </div>
        <!-- 结果字符串 -->
        <div class="result">
          <label class="string">结果集合：</label>
          <input type="button" class="bgGray" id="btn4" value='执行' @click="implement">
          <div class="col-sm-4">
            <textarea type="text" class="bgWhite" readonly="readonly" id="get_cardpwd" :value="resultSet"></textarea>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function(){
    return {
      // 查询SQL：
      querySQL:null,
      // 非查询SQL：
      nonQuerySQL:null,
      // 结果集合
      resultSet:[],
      array:''
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
      _this.$router.push('/plugIn');
      _this.$store.dispatch('setSlide', 0);
    },
    // 输入查询SQL
    onQuerySQLClick: function(e) {
      var querySQL  = e.target.value
      this.querySQL = querySQL;
    },
    // 输完验证查询SQL
    checkQuerySQLReg: function() {
      var querySQL = this.querySQL;
      if(typeof(querySQL) != 'string'){
        cordova.plugins.WebToolCommon.alertMessage('SQL必须是字符串格式',function(){},function(){});
      }
    },
    // 输入非查询SQL
    onNonQuerySQLClick: function(e) {
      var nonQuerySQL  = e.target.value
      this.nonQuerySQL = nonQuerySQL;
    },
    // 输完验证非查询SQL
    checkNonQuerySQLReg: function() {
      var nonQuerySQL = this.nonQuerySQL;
      if(typeof(nonQuerySQL) != 'string'){
        cordova.plugins.WebToolCommon.alertMessage('非查询SQL必须是字符串格式',function(){},function(){});
      }
    },
    // 执行
    implement: function() {
      var _this = this;
      if(_this.querySQL == '' && _this.nonQuerySQL == ''){
          cordova.plugins.WebToolCommon.alertMessage('查询SQL或非查询SQL不能为空！',function(){},function(){});
      }else{
        // 查询SQL
        if(_this.querySQL != ''){
            try {
              cordova.plugins.AresDB.query(_this.querySQL, _this.array , success, error);
              function success(res){
                _this.resultSet = res;
              }
              function error(msg){
                cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
              }
            }
            catch(err) {
                console.log(err);
            }
        }else if( _this.nonQuerySQL != ''){//非查询SQL
            try {
              cordova.plugins.AresDB.nonQuery(_this.nonQuerySQL, _this.array , successCallback, errorCallback);
              function successCallback(res){
                _this.resultSet = res;
              }
              function errorCallback(msg){
                cordova.plugins.WebToolCommon.alertMessage(msg,function(){},function(){});
              }
            }
            catch(err) {
                console.log(err);
            }
        }

      }
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
    .content{
      box-sizing: border-box;
      padding: px2rem(40px) 0 0 px2rem(40px);
      margin-top: px2rem(114px);
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      width: 100%;
      height: 100%;
      background: #f6f6f6;
      padding-bottom: px2rem(15px);
      font-size: px2rem(28px);
      .source{
        margin-bottom: px2rem(25px);
        .col-sm-4{
          margin: px2rem(20px) 0 0 px2rem(30px);
          input{
            box-sizing: border-box;
            padding-left: px2rem(10px);
          }
          .bgWhite{
            width: px2rem(500px);
            height: px2rem(70px);
            border: 1px #797979 solid;
          }
          .bgGray{
            width: px2rem(120px);
            height: px2rem(60px);
            background: #fff;
            border: 2px #797979 solid;
            border-radius: px2rem(10px);
            margin-left: px2rem(30px);
          }
        }
      }
      .result{
        margin-top: px2rem(70px);
        .bgGray{
          width: px2rem(120px);
          height: px2rem(65px);
          background: #fff;
          border: 2px #797979 solid;
          border-radius: px2rem(10px);
          margin-left: px2rem(245px);
          margin-bottom: px2rem(15px);
        }
        .col-sm-4{
          margin: px2rem(10px) 0 0 px2rem(30px);
          .bgWhite{
            box-sizing: border-box;
            padding-left: px2rem(10px);
            width: px2rem(500px);
            height: px2rem(300px);
            border: 2px #a9a9a9 solid;
          }
        }
      }
    }

  }
</style>
