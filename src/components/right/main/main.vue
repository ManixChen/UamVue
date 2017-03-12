<template>
  <div class="main">
    <!--第一块区域-->
    <div class="section_one">
      <el-row :gutter="3">
        <el-col :span="3" :offset=".5">
          <div class="grid-content bg_lb">
            <i class="icon-uamandroid"></i>
            <el-badge class="mark" :value="260" />
            <b>应用管理</b>
          </div>
        </el-col>
        <el-col :span="3" :offset="1">
          <div class="grid-content bg_ly">
            <i class="icon-uamandroid"></i>
            <el-badge class="mark" :value="60" />
            <b>设备管理</b>
          </div>
        </el-col>
        <el-col :span="3" :offset="1">
          <div class="grid-content bg_ls">
            <i class="icon-uamandroid"></i>
            <el-badge class="mark" :value="160" />
            <b>用户管理</b>
          </div>
        </el-col>
        <el-col :span="3" :offset="1">
          <div class="grid-content bg_lo">
            <i class="icon-uamandroid"></i>
            <el-badge class="mark" :value="60" />
            <b>设备追踪</b>
          </div>
        </el-col>
        <el-col :span="3" :offset="1">
          <div class="grid-content bg_lg">
            <i class="icon-uamandroid"></i>
            <el-badge class="mark" :value="20" />
            <b>消息发布</b>
          </div>
        </el-col>
        <el-col :span="3" :offset="1">
          <div class="grid-content bg_lo">
            <i class="icon-uamandroid"></i>
            <el-badge class="mark" :value="1" />
            <b>系统更新</b>
          </div>
        </el-col>
      </el-row>
    </div>
    <!--第二块区域-->
    <div class="section_two">
      <h3 class="section_title">应用详情</h3>
      <el-row>
        <el-col :span="16" >
          <chart :options="polar" style='width:100%'></chart>
        </el-col>
        <el-col :span="6" :offset="1">
          <ul class="site-stats">
            <li class="bg_lh"><i class="icon-uamandroid"></i> <strong>1540</strong>
              <small>应用总数</small>
            </li>
            <li class="bg_lh"><i class="icon-uamuser-plus"></i> <strong>120</strong>
              <small>用户总数</small>
            </li>
            <li class="bg_lh"><i class="icon-uamlaptop"></i> <strong>656</strong>
              <small>设备总数</small>
            </li>
            <li class="bg_lh"><i class="icon-uamwindows8"></i> <strong>140</strong>
              <small>活动设备</small>
            </li>
            <li class="bg_lh"><i class="icon-uamuser-check"></i> <strong>10</strong>
              <small>用户管理</small>
            </li>
            <li class="bg_lh"><i class="icon-uamcodepen"></i> <strong>0</strong>
              <small>权限配置</small>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <!--第三块区域-->
    <div class="section_three">
      <h3 class="section_title">活动设备</h3>
      <el-table :data="activeEqupment" style="width: 100%;text-align:left;">
        <el-table-column prop="date" label="日期" sortable width="180">
        </el-table-column>
        <el-table-column prop="name" label="持有者" sortable width="160px">
        </el-table-column>
        <el-table-column prop="equipment" label="设备" sortable width="160px">
        </el-table-column>
        <el-table-column prop="status" label="活动状态" width="200px">
        </el-table-column>
        <el-table-column prop="address" label="位置">
        </el-table-column>
        <el-table-column prop="tag" label="范围" width="100"
          :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
          :filter-method="filterTag">
          <template scope="scope">
            <el-tag
              :type="scope.row.tag === '家' ? 'primary' : 'success'"
              close-transition>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :page-sizes="[5, 10, 20, 50]" :page-size="pagesizes"
        :current-page="currentpages"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total" >
      </el-pagination>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    name: 'main',
    data () {
      // var androidL = [320, 332, 301, 334, 390, 330, 320];
      // var IOSl = [120,132, 101,134,90,230,210];
      // var wpPhoneL = [220,182,191,234,290,330,310];
      // var pcL = [150,232,201,154,190,330,410];
      // var otherL = [862,1018,964,1026,1679,1600,1570];
      let androidL = []
      let IOSl = []
      let wpPhoneL = []
      let pcL = []
      let otherL = []
      for (let i = 0; i <= 4; i++) {
        let t = Math.random() * 300 + 100
        androidL.push(t * Math.random() * 2 + 1)
        IOSl.push(t * Math.random() * 2 + 1)
        wpPhoneL.push(t * Math.random() * 2 + 1)
        pcL.push(t * Math.random() * 2 + 1)
        otherL.push(t * Math.random() * 2 + 1)
      }

      // 活动设备渲染
      let equpmentData = []
      for (let i = 0; i < 100; i++) {
        let current = {}
        current.date = '2017-01-' + i
        current.name = '张' + i
        current.equipment = '张' + i
        current.status = '活动'
        current.address = '上海市普陀区金沙江路 1518 弄' + i
        current.tag = '家'
        equpmentData.push(current)
      }
      // console.warn(equpmentData.length)
      return {
        msg: this.$parent.title,
        // 图表组件
        polar: {
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['Andoid', 'IOS', 'WPhone', 'PC', 'other']
          },
          grid: {
            left: '2%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [{
            name: 'Andoid',
            type: 'bar',
            data: androidL
          }, {
            name: 'IOS',
            type: 'bar',
            stack: '广告',
            data: IOSl
          }, {
            name: 'WPhone',
            type: 'bar',
            stack: '广告',
            data: wpPhoneL
          }, {
            name: 'PC',
            type: 'bar',
            stack: '广告',
            data: pcL
          }, {
            name: 'other',
            type: 'bar',
            data: otherL,
            markLine: {
              lineStyle: {
                normal: {
                  type: 'dashed'
                }
              },
              data: [[{
                type: 'min'
              }, {
                type: 'max'
              }]]
            }
          }]
        },
        allEqupment: equpmentData,
        activeEqupment: equpmentData,
        // 页面总数
        allPages: 150,
        total: equpmentData.length,
        currentpages: 1,
        pagesizes: 5,
        activitepages: 1
      }
    },
    methods: {
      handleSizeChange (val) {
        this.pagesizes = val
        console.warn('每页显示' + val)
        this.currentpages = 1
        this.getpages(this.currentPage)
      },
      handleCurrentChange (val) {
        console.warn('前往' + val)
        this.currentPage = val
        this.currentpages = val
        this.getpages(val)
      },
      filterTag (value, row) {
        console.log('fillTag')
      },
      getpages (val) {
        let currentpagei = val - 1
        console.warn(currentpagei)
        let currentvalue = []
        for (let m = 0; m < this.pagesizes; m++) {
          let ss = this.pagesizes
          let cc = this.allEqupment[currentpagei * ss + m]
          console.warn(cc.name)
          currentvalue.push(cc)
          this.activeEqupment = currentvalue
        }
      }
    },
    mounted: function () {
      console.error('加载完成')
      this.getpages(1)
    }
  }
</script>

<style scoped>
body,.main,h1{
  padding:0;
  margin:0;
}
.main{
  color:#000;
  width:84%;
  height:90%;
  overflow-y:scroll;
  overflow-x:hidden;
  background:#eee;
}
{/*section_one*/}
.section_one{
  margin-left:6.5%;
  margin-top:35px;
}
.grid-content{
  position:relative;
  color:#fff;
  padding-top:8px;
  cursor:pointer;
}
.grid-content>i{
  display:block;
  font-size: 30px;
  margin:8px 0;
}
.grid-content>b{
}
.mark{
  position:absolute;
  top:-10px;
  right:-15px;
}
{/*section_two*/}
.section_two{
  margin-top:35px;
  margin-left:0px;
}
.site-stats {
    text-align: center;
    list-style: none;
    padding: 0;
}
@media screen and (min-width: 800px) {
  .site-stats {
    margin-top:60px;
    margin-left:-5px;
    margin-bottom:0px;
  }
}
.site-stats li {
    cursor: pointer;
    display: inline-block;
    margin: 0 5px 10px;
    text-align: center;
    width: 42%;
    min-width:115px;
    padding: 10px 0;
    color: #fff;
    position: relative;
}
.site-stats li:hover {
    background: #2E363F;
}
.site-stats li i {
    vertical-align: baseline;
}
.site-stats li i {
    font-size: 24px;
    clear: both;
}
li [class^="icon-"], li [class*=" icon-"] {
    display: inline-block;
    width: 1.25em;
    text-align: center;
}
[class^="icon-"], [class*=" icon-"] {
    font-family: FontAwesome;
    font-weight: normal;
    font-style: normal;
    text-decoration: inherit;
    display: inline;
    width: auto;
    height: auto;
    line-height: normal;
    vertical-align: baseline;
    background-image: none !important;
    background-position: 0% 0%;
    background-repeat: repeat;
}
.site-stats li strong {
    font-weight: bold;
    font-size: 20px;
    width: 100%;
    float: left;
    margin-left: 0px;
}
.site-stats li small {
    margin-left: 0px;
    font-size: 11px;
    width: 100%;
    float: left;
}
.echarts,.echarts>canvas{
width:100%;
}
{/*section_three*/}
.section_three{
}
{/*表格属性*/}
.grid-content:hover {
 background:#2E363F;
}
.el-row {
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 1px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>
