<template>
  <div class="leftmenu">
    <div class="lefttop">
      <a href="javascript:void(0)"></a>
    </div>
    <ul>
      <li  v-bind:class="{'isAction' : isActivef, 'submenu': !isActivef}" v-on:click="toggle('Lf')" >
        <router-link to="/mainpage">
          <i class="icon-uamhome"></i>
          <span>UAM 导航</span>
          <span class="labelsanjiao"></span>
        </router-link>
        <!--<a href="#mainpage">-->
          <!--<i class="icon icon-home"></i>-->
          <!--<span>UAM 导航</span>-->
        <!--</a>-->
      </li>
      <li  v-bind:class="{'isAction' : isActive, 'submenu': !isActive}" v-on:click="toggle('L0')">
        <a href="javascript:void(0);">
          <i class="icon-uamusers"></i>
          <span>用户管理</span>
          <span class="labelsanjiao"></span>
        </a>
        <ul>
          <!--<a  href="javascript:void(0)"  v-on:click="setpage('yhglpage')" >用户管理</a>-->
          <li><router-link to="/yhglpage">用户管理</router-link></li>
          <li>
            <router-link to="/yhglpage">权限配置</router-link>
          </li>
          <li><router-link to="/yhglpage">第三方验证接口</router-link></li>
        </ul>
      </li>
      <li v-bind:class="{'isAction' : isActive1, 'submenu': !isActive1}" v-on:click="toggle('L1')">
        <a href="javascript:void(0);">
          <i class="icon-uamandroid"></i>
          <span>应用管理</span>
          <span class="labelsanjiao"></span>
        </a>
        <ul>
          <li><router-link to="/yyglpage">虚拟应用</router-link></li>
          <li><router-link to="/yyglpage">原生应用</router-link></li>
          <li><router-link to="/yyglpage">应用推送</router-link></li>
          <li><router-link to="/yyglpage">控制台</router-link></li>
          <li><router-link to="/yyglpage">策略管理</router-link></li>
        </ul>
      </li>
      <li v-bind:class="{'isAction' : isActive2, 'submenu': !isActive2}" v-on:click="toggle('L2')">
        <a href="javascript:void(0)">
          <i class="icon-uamwindows"></i>
          <span>终端管理</span>
          <span class="labelsanjiao"></span>
        </a>
        <ul>
          <li><router-link to="/zdglpage">设备注册</router-link></li>
          <li><router-link to="/zdglpage">终端管理</router-link></li>
          <li><router-link to="/zdglpage">追踪终端</router-link></li>
          <li><router-link to="/zdglpage">终端日志</router-link></li>
        </ul>
      </li>
      <li v-bind:class="{'isAction' : isActive3, 'submenu': !isActive3}" v-on:click="toggle('L3')">
        <a href="javascript:void(0)">
          <i class="icon-uamwindows8"></i>
          <span>主机配置</span>
          <span class="labelsanjiao"></span>
        </a>
        <ul>
          <li><router-link to="/zjglpage">应用下载主机</router-link></li>
          <li><router-link to="/zjglpage">主机管理</router-link></li>
        </ul>
      </li>
      <li v-bind:class="{'isAction' : isActive4, 'submenu': !isActive4}" v-on:click="toggle('L4')">
        <router-link to="/uamptlpage">
          <i class="icon-uamlaptop"></i>
          <span>UAM	平台</span>
          <span class="labelsanjiao"></span>
        </router-link>
      </li>
      <li v-bind:class="{'isAction' : isActive5, 'submenu': !isActive5}" v-on:click="toggle('L5')">
        <a href="javascript:void(0)">
          <i class="icon-uamequalizer"></i>
          <span>系统设置</span>
          <span class="labelsanjiao"></span>
        </a>
        <ul>
          <li><router-link to="/xtszpage">管理员设置</router-link></li>
          <li><router-link to="/xtszpage">数据库配置</router-link></li>
          <li><router-link to="/xtszpage">关于UAM</router-link></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'leftmenu',
  data () {
    return {
      isActivef: false,
      isActive: false,
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false,
      Lf: 'Lf',
      L0: 'L0',
      L1: 'L1',
      L2: 'L2',
      L3: 'L3',
      L4: 'L4',
      L5: 'L5'
    }
  },
  methods: {
    // 折叠菜单
    toggle (ii) {
      const is = ii
      // window.alert(is)
      this.restmenu()
      if (is === this.Lf) {
        this.isActivef = !this.isActivef
      } else if (is === this.L0) {
        this.isActive = !this.isActive
      } else if (is === this.L1) {
        this.isActive1 = !this.isActive1
      } else if (is === this.L2) {
        this.isActive2 = !this.isActive2
      } else if (is === this.L3) {
        this.isActive3 = !this.isActive3
      } else if (is === this.L4) {
        this.isActive4 = !this.isActive4
      } else if (is === this.L5) {
        this.isActive5 = !this.isActive5
      }
    },
    // 重置其他的菜单
    restmenu () {
      this.isActivef = false
      this.isActive = false
      this.isActive1 = false
      this.isActive2 = false
      this.isActive3 = false
      this.isActive4 = false
      this.isActive5 = false
    },
    // 改变当前活动的页面
    setpage (aa) {
      this.$parent.setpage(aa)
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
  color: #42b983;
  text-decoration: none;
}
{/*max-width: 200px;*/}
.leftmenu{
    float: left;
    width:16%;
    height:100%;
    z-index: 16;
     background: #2E363F;
     overflow-x:hidden;
     overflow-y:hidden;
}
{/* */}
.lefttop{
    width: 100%;
    padding:20px 0;
   }
.lefttop a{
    display:inline-block;
    height: 31px;
    line-height: 30px;
    overflow: hidden;
    width: 191px;
    background: url(../../assets/hx_logo_h.png) no-repeat scroll 0 0 transparent;
   }
{/* isAction*/}
.leftmenu>ul {
    list-style: none;
    margin: 0px 0 0;
    padding: 0;
    width: 100%;
    border-bottom: 1px solid #37414b;
    outline: none;
}
.leftmenu>ul>li {
    display: block;
    line-height: 20px;
    border-top: 1px solid #37414b;
    border-bottom: 1px solid #1f262d;
    text-align:left;
}
.leftmenu>ul>li:hover {
  background:#27a9e3;
}
.leftmenu  a {
    padding: 10px 0 10px 15px;
    display: block;
    color: #fff;
    opacity:0.6;
}
.leftmenu  a::hover {
  background:#27A9E3;
}
.leftmenu  a i{
   margin-right:5px;}
{/* */}
.leftmenu  > ul >li>ul {
    display:none;
    margin: 0;
    padding: 0;
    background-color: #1e242b;
}
.leftmenu > ul > li.isAction>a{
  background-color: #27a9e3;
}
.leftmenu > ul > li.isAction{
  border-bottom:1px solid #27a9e3;
  position:relative;
}
.leftmenu > ul > li.isAction>a>span.labelsanjiao{
    float:right;
    margin-right:8px;
    line-height: 0;
    border-width: 10px;
    border-left-width: 0;
    border-color: #fff;
    border-style: dashed;
    border-right-style: solid;
    border-top-color: transparent;
    border-bottom-color: transparent;
}
.leftmenu > ul > li.isAction ul {
  display:block;
}
.leftmenu > ul > li.isAction ul li>a{
  padding-left:27px;
}
.leftmenu > ul > li.isAction ul li:hover {
  background:#28B779;
}
</style>
