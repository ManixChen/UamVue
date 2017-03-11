<template>
  <div class="main">
    <h1>{{msg}}</h1>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolorum ea ex expedita explicabo facilis laborum magni nam necessitatibus nisi, numquam odit pariatur porro quas quasi quis tenetur vel velit?
    </div>
  </div>
</template>

<script type="text/javascript">
export default{
  name: 'zdgl',
  data () {
    return {
      msg: this.name
    }
  }
}
</script>

<style scoped>
body,.main,h1{
  padding:0;
  margin:0;
}
.main{
  height:100%;
  background-color:#6FFFBC;
  color:#000;
  width:100%;
}
</style>
