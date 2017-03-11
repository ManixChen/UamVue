<template>
  <div class="topmenu">
    <div id="user-nav" class="navbar navbar-inverse">
      <ul class="nav">
        <li class="dropdown" id="profile-messages">
          <a title="" class="dropdown-toggle" v-on:click="toggle('s0')">
            <i class="icon-uamusers"></i>
            <span class="text">Max</span>
            <b class="caret"></b>
          </a>
          <ul class="dropdown-menu"
              v-on:mouseleave="hidedropDown()"
              v-bind:class="{'action' : isSettings, 'dropdown-menu': !isSettings}">
            <li>
              <a href="javascript:void(0);">
                <i class="icon-uamman unvers"></i> 个人设置
              </a></li>
            <li class="divider"></li>
            <li>
              <a href="javascript:void(0);">
                <i class="icon-uammail unvers"></i> 待办任务
              </a>
            </li>
            <li class="divider"></li>
            <li>
              <a href="">
                <i class="icon-uamtumblr unvers"></i> 注销登录
              </a>
            </li>
          </ul>
        </li>
        <li id="menu-messages">
          <a href="javascript:void(0)" @click="dialogTableVisible = true">
            <i class="icon-uammail"></i>
            <span class="text">消息</span>
            <b class="caret"></b>
          </a>
        </li>
        <li class="">
          <a title="">
            <i class="icon-uamcog"></i>
            <span class="text">设置</span>
          </a>
        </li>
        <li class="">
          <a title="" href="javascript:window.location.reload()">
            <i class="icon-uamredo2"></i>
            <span class="text">注销</span>
          </a>
        </li>
      </ul>
    </div>
    <div id="breadcrumb">
      <a href="javascript:void(0);" onclick="window.location.reload()">
        <i class="icon-uamhome"></i> Home</a>
    </div>
    <el-dialog title="收货地址" v-model="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="info" label="信息"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Rtopmenu',
    data () {
      return {
        isSettings: false,
        s0: 's0',
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          info: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          info: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          info: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          info: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      toggle (ss) {
        const is = ss
        if (is === this.s0) {
          this.isSettings = !this.isSettings
        }
      },
      hidedropDown () {
        var thises = this
        setTimeout(function () {
          thises.isSettings = false
        }, 2000)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  text-decoration: none;
  color: #999;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
{/*容器*/}
.topmenu{
  background: #2E363F;
  float:left;
  width:84%;
  height:10%;
}
{/*头部导航*/}
#user-nav{
  width:100%;
  height:50%;
}
#user-nav:after{
content:"";
display:table;
clear:both;
}
#user-nav > ul {
    width:100%;
    margin: 0;
    padding: 0;
    list-style: none;
    border-right: 1px solid #2e363f;
    border-left: 1px solid #000;
    background: #2E363F;
}
.navbar .nav {
    display: block;
    float: left;
    margin: 0 10px 0 0;
}
#user-nav > ul > li {
    float: left;
    list-style-type: none;
    margin: 0;
    position: relative;
    padding: 0;
    border-left: 1px solid #2e363f;
    border-right: 1px solid #000;
}
#user-nav > ul > li > a {
    padding: 9px 13px;
    display: block;
    font-size: 11px;
    cursor:pointer;
}
#user-nav > ul > li > a:hover{
color:#fff;

}
#user-nav > ul > li > a > i, #sidebar li a i {
    opacity: .8;
}
.btn [class^="icon-"], .nav [class^="icon-"], .btn [class*=" icon-"], .nav [class*=" icon-"] {
    display: inline;
    line-height: 1em;
}
.caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin-top: 5px;
    vertical-align: top;
    border-top: 4px solid #fff;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    content: "";
}
.dropdown-menu {
    display:none;
    position: absolute;
    top: 99%;
    left: 0;
    z-index: 1000;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    list-style: none;
    background-color: #fff;
    border: 1px solid #ccc;
    border: 1px solid rgba(0, 0, 0, 0.2);
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding;
    background-clip: padding-box;
}
.dropdown-menu > li > a {
    display: block;
    padding: 3px 10px;
    clear: both;
    font-weight: normal;
    line-height: 20px;
    font-size:12px;
    color: #333;
    white-space: nowrap;
    text-align: left;
}
.dropdown-menu > li:hover{
background:#b6b3b3;
color:#fff

}
.dropdown-menu .divider {
    height: 1px;
    margin: 2px 0px;
    overflow: hidden;
    background-color: #e5e5e5;
    border-bottom: 1px solid #fff;
}
.dropdown-menu.action{
  display:block;
}
{/*面包屑导航*/}
#breadcrumb {
    display:block;
    border-bottom: 1px solid #e3ebed;
    text-align:left;
    padding-left:15px;
    background:#fff;
    height:50%;
}
#breadcrumb a {
    display: inline-block;
    padding: 8px 20px 8px 10px;
    font-size: 11px;
    font-weight:normal;
    color: #666666;
}
#breadcrumb a i{
  color:#999;
}


</style>
