// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// {/*主页*/}
import Mainpage from 'components/right/main/main'
// {/*用户管理*/}
import Yhglpage from 'components/right/yhgl/main'
// {/*应用管理*/}
import Yyglpage from 'components/right/yygl/main'
// {/*终端管理*/}
import Zdglpage from 'components/right/zdgl/main'
// {/*主机管理*/}
import Zjglpage from 'components/right/zjgl/main'
// {/*Uam平台*/}
import Uamptlpage from 'components/right/uam/main'
// {/*系统设置*/}
import Xtszpage from 'components/right/xtsz/main'
Vue.use(VueRouter)
Vue.use(ElementUI)
// 使用Echarts
import ECharts from 'vue-echarts'
Vue.component('chart', ECharts)

const Bar = { template: '<div>test</div>' }
const routes = [
  // 初始化首页
  { path: '/mainpage', component: Mainpage },
  { path: '/yhglpage', component: Yhglpage },
  { path: '/yyglpage', component: Yyglpage },
  { path: '/zdglpage', component: Zdglpage },
  { path: '/zjglpage', component: Zjglpage },
  { path: '/uamptlpage', component: Uamptlpage },
  { path: '/xtszpage', component: Xtszpage },
  // 测试使用
  { path: '/bar', component: Bar }
]
const router = new VueRouter({
  routes  // （缩写）相当于 routes: routes
})
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
// 首页
router.push('/mainpage')
