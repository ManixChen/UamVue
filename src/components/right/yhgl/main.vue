<template>
  <div class="main">
    <el-row :gutter="20" height="100%">
      <el-col :span="4" height="100%">
        <div class="grid-content section_left">
          <div class="section_title">
            <el-dropdown menu-align='start'  @command="handleCommand">
              <span class="el-icon-setting">所有用户</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="create_group">新建用户组</el-dropdown-item>
                <el-dropdown-item command="edit_group" divided>修改用户</el-dropdown-item>
                <el-dropdown-item command="refresh">刷新</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <ul>
            <li v-for="groupvalues in groupdata">
              {{groupvalues.name}}
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="20" >
        <div class="grid-content section_right">
          <div class="section_title">
            <el-dropdown menu-align='start'   @command="handleCommand">
                <span class="el-icon-setting">所有用户</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="create">新建用户</el-dropdown-item>
                <el-dropdown-item command="delete">批量删除用户</el-dropdown-item>
                <el-dropdown-item command="settings" divided>配置用户权限</el-dropdown-item>
                <el-dropdown-item command="refresh">刷新</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <el-table
            :data="activeEqupment" style="width: 100%;text-align:left;"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column prop="name"
                             label="用户名" sortable width="140">
            </el-table-column>
            <el-table-column prop="groupname"
                             label="隶属用户组" sortable width="130">
            </el-table-column>
            <el-table-column prop="status" label="状态" width="160">
            </el-table-column>
            <el-table-column prop="phone" label="手机" width="150">
            </el-table-column>
            <el-table-column prop="bangding" label="绑定" width='120'>
            </el-table-column>
            <el-table-column prop="tag" label="操作" >
              <template scope="scope">
                <el-button size="small"
                           @click="dialogTableVisible = true"
                           @click.native.prevent="handleEdit(scope.$index, activeEqupment)">编辑
                </el-button>
                <el-button size="small" type="danger"
                           @click.native.prevent="handleDelete(scope.$index, activeEqupment)">删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :page-sizes="[20, 50, 80, 100]" :page-size="pagesizes"
            :current-page="currentpages"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
    <!--修改用户模态框-->
    <el-dialog title="修改用户" v-model="dialogTableVisible">
      <el-table :data="editData">
        <el-table-column prop="name" label="用户名" sortable width="180">
        </el-table-column>
        <el-table-column prop="groupname" label="隶属用户组" width="160px">
        </el-table-column>
        <el-table-column prop="status" label="状态" width="160px">
        </el-table-column>
        <el-table-column prop="phone" label="手机" width="200px">
        </el-table-column>
        <el-table-column prop="bangding" label="绑定">
        </el-table-column>
      </el-table>
      <h3 class="section_title">编辑</h3>
      <table>
        <tr>
          <td>
            <el-input
              placeholder="用户名"
              v-model="username"
              :disabled="false">
            </el-input>
          </td>
          <td>
            <el-input
              placeholder="隶属用户组"
              v-model="groupname"
              :disabled="false">
            </el-input>
          </td>
          <td>
            <el-input
              placeholder="状态"
              v-model="status"
              :disabled="false">
            </el-input>
          </td>
          <td>
            <el-input
              placeholder="手机"
              v-model="phone"
              :disabled="false">
            </el-input>
          </td>
          <td>
            <el-input
              placeholder="绑定"
              v-model="bangding"
              :disabled="false">
            </el-input>
          </td>
        </tr>
      </table>
    </el-dialog>
  </div>
</template>

<script type="text/javascript">
  export default{
    name: 'yhgl',
    data () {
      // 活动设备渲染
      console.info('开始渲染')
      let equpmentData = []
      for (let i = 0; i < 100; i++) {
        let current = {}
        current.name = '张' + i
        current.groupname = '组' + i
        current.status = '活动'
        current.phone = '1806426686' + i
        current.bangding = '绑定' + i
        current.tag = '操作'
        equpmentData.push(current)
      }
      return {
        msg: this.name,
        groupdata: [],
        allEqupment: equpmentData,
        activeEqupment: equpmentData,
        allPages: 0,
        total: equpmentData.length,
        currentpages: 1,
        pagesizes: 20,
        activitepages: 1,
        dialogTableVisible: false,
        editData: [],
        username: '',
        groupname: '',
        status: '',
        phone: '',
        bangding: ''
      }
    },
    methods: {
      //  左侧用户组列表
      init_groupdatas () {
        console.info('开始填入数据……')
        let groupdatas = []
        for (let i = 0; i < 15; i++) {
          let current = {}
          current.id = i
          current.name = '张' + i
          groupdatas.push(current)
        }
        this.groupdata = groupdatas
      },
      // 右侧用户列表
      handleSizeChange (val) {
        console.warn('改变页面')
        this.pagesizes = val
        console.warn('每页显示' + val)
        this.currentpages = 1
        this.getpages(this.currentpages)
      },
      handleCurrentChange (val) {
        console.warn('前往' + val)
        this.currentPage = val
        this.currentpages = val
        this.getpages(val)
      },
      handleEdit (i, val) {
        console.info('编辑数组中元素' + i)
        let alldata = this.activeEqupment
        let currentArray = []
        let current = {}
        current.name = alldata[i].name
        current.groupname = alldata[i].groupname
        current.status = alldata[i].status
        current.phone = alldata[i].phone
        current.bangding = alldata[i].bangding
        currentArray.push(current)
        this.editData = currentArray
        // 编辑详情
        console.info('开始渲染')
        this.username = alldata[i].name
        this.groupname = alldata[i].groupname
        this.status = alldata[i].status
        this.phone = alldata[i].phone
        this.bangding = alldata[i].bangding
      },
      handleDelete (i, val) {
        console.info('删除数组中元素' + i)
        let alldata = this.allEqupment
        // 保存要删除的数组，可以提供给后台删除数据
        // let deletei = alldata[i]
        alldata.splice(i, 1)
        this.activeEqupment = alldata
        this.currentpages = 1
        this.getpages(this.currentpages)
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      // 下拉菜单点击事件
      handleCommand (command) {
        //  this.$message('click on item ' + command)
        switch (command) {
          case 'create':
            this.$notify({
              title: '创建',
              message: command,
              type: 'success'
            })
            break
          case 'delete':
            this.$notify.error({
              title: '删除',
              message: command
            })
            break
          case 'settings':
            this.$notify({
              title: '创建',
              message: command,
              type: 'warning'
            })
            break
          case 'refresh':
            this.$notify.info({
              title: '刷新',
              message: command
            })
            break
          case 'create_group':
            this.$notify.info({
              title: '创建用户组',
              message: command
            })
            break
          case 'edit_group':
            this.$notify.info({
              title: '编辑用户组',
              message: command
            })
            break
        }
      },
      filterTag (value, row) {
        console.log('fillTag')
      },
      getpages (val) {
        let currentpagei = val - 1
        let currentvalue = []
        for (let m = 0; m < this.pagesizes; m++) {
          let ss = this.pagesizes
          let cc = this.allEqupment[currentpagei * ss + m]
          console.warn(cc.name)
          currentvalue.push(cc)
          this.activeEqupment = currentvalue
        }
      },
      editdata () {
        let editData = []
        for (let i = 0; i < 100; i++) {
          let current = {}
          current.name = '张' + i
          current.groupname = '组' + i
          current.status = '活动'
          current.phone = '1806426686' + i
          current.bangding = '绑定' + i
          current.tag = '操作'
          editData.push(current)
        }
      }
    },
    mounted: function () {
      this.init_groupdatas()
      this.getpages(1)
      console.info('初始化完成……')
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
  padding-top:20px;
  background:#eee;
}
.section_title{
padding-left:10px;
}
.section_left,.section_right{
width:100%;
height:100%;
margin:20px 0;
padding:0 0 30px 0;
border:1px solid #ddd;
}
.section_left ul{
list-style:none;
width:100%;
height:100%;
color:#000;
font-size:16px;
}
.section_left ul li{
width:100%;
height:60px;
}
div.el-row,div.el-row{
  height:100%;
}
.el-table .cell{
  text-align:left;
}
td input{
  width:100%;
  height:30px;
}

</style>
