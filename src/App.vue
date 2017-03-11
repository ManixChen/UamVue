<template>
  <div id="app">
    <leftmenu></leftmenu>
    <rtopmenu></rtopmenu>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/javascript">
  import leftmenu from './components/menu/Leftmenu'
  import rtopmenu from './components/menu/Rtopmenu'
  export default {
    name: 'app',
    data () {
      return {
        title: '和信终端管理首页',
        rightpath: 'mainpage'
      }
    },
    components: {
      leftmenu,
      rtopmenu
    },
    methods: {
      setpage (ss) {
        // window.alert(ss)
        this.rightpath = ss
        console.warn(ss)
      }
    }
  }
</script>

<style>
{/*@import "./assets/fonts.css";*/}
body,div{
padding:0;
margin:0;
}
html,body{
  height:100%;
  width:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  width:100%;
  overflow:hidden;
}
.mainpage{
  height:50px;
  width:100%;
}
{/*自定义颜色*/}
.bg_lb {
    background: rgb(39, 169, 227);
}
.bg_ly {
    background: rgb(255, 184, 72);
}
.bg_ls {
    background: #2255a4;
}
.bg_lg {
    background: #28b779;
}
.bg_lo {
    background: #da542e;
}
.bg_lh {
    background: #b6b3b3;
}
.grid-content{
  border-radius: 4px;
  min-height: 70px;
}

.section_title{
  line-height:45px;
  padding-left:20px;
  text-align:left;
  color:#fff;
  background:#D3DCE6;
}
{/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸 */}
::-webkit-scrollbar
{
    width: 8px;
    height: 8px;
    background-color: #F5F5F5;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(46,54,63,1);
    border-radius: 10px;
    background-color: #F5F5F5;
}
::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(46,54,63,1);
    background-color: #555;
}

{/*字体图标样式*/}
i{
  color:#fff;
}
i.unvers{
  color:#999;
}
{/*字体图标*/}
@font-face {
  font-family: 'uam';
  src:  url('./assets/fonts/uam.eot?7xxfoe');
  src:  url('./assets/fonts/uam.eot?7xxfoe#iefix') format('embedded-opentype'),
    url('./assets/fonts/uam.ttf?7xxfoe') format('truetype'),
    url('./assets/fonts/uam.woff?7xxfoe') format('woff'),
    url('./assets/fonts/uam.svg?7xxfoe#uam') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="icon-uam"], [class*=" icon-uam"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'uam' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-uamhome:before {
  content: "\e900";
}
.icon-uamhome3:before {
  content: "\e902";
}
.icon-uamimages:before {
  content: "\e90e";
}
.icon-uamcamera:before {
  content: "\e90f";
}
.icon-uamheadphones:before {
  content: "\e910";
}
.icon-uammusic:before {
  content: "\e911";
}
.icon-uamplay:before {
  content: "\e912";
}
.icon-uamfilm:before {
  content: "\e913";
}
.icon-uampodcast:before {
  content: "\e91c";
}
.icon-uamfeed:before {
  content: "\e91d";
}
.icon-uammic:before {
  content: "\e91e";
}
.icon-uambook:before {
  content: "\e91f";
}
.icon-uambooks:before {
  content: "\e920";
}
.icon-uamfile-text:before {
  content: "\e922";
}
.icon-uamprofile:before {
  content: "\e923";
}
.icon-uamfile-empty:before {
  content: "\e924";
}
.icon-uamfiles-empty:before {
  content: "\e925";
}
.icon-uamfile-text2:before {
  content: "\e926";
}
.icon-uamfile-picture:before {
  content: "\e927";
}
.icon-uamfile-music:before {
  content: "\e928";
}
.icon-uamfile-play:before {
  content: "\e929";
}
.icon-uamstack:before {
  content: "\e92e";
}
.icon-uamfolder:before {
  content: "\e92f";
}
.icon-uamfolder-open:before {
  content: "\e930";
}
.icon-uamfolder-minus:before {
  content: "\e932";
}
.icon-uamfolder-download:before {
  content: "\e933";
}
.icon-uamfolder-upload:before {
  content: "\e934";
}
.icon-uamqrcode:before {
  content: "\e938";
}
.icon-uamcart:before {
  content: "\e93a";
}
.icon-uamphone:before {
  content: "\e942";
}
.icon-uamphone-hang-up:before {
  content: "\e943";
}
.icon-uamaddress-book:before {
  content: "\e944";
}
.icon-uamlocation:before {
  content: "\e947";
}
.icon-uamlocation2:before {
  content: "\e948";
}
.icon-uamcompass:before {
  content: "\e949";
}
.icon-uamcompass2:before {
  content: "\e94a";
}
.icon-uammap2:before {
  content: "\e94c";
}
.icon-uamalarm:before {
  content: "\e950";
}
.icon-uamstopwatch:before {
  content: "\e952";
}
.icon-uamcalendar:before {
  content: "\e953";
}
.icon-uamkeyboard:before {
  content: "\e955";
}
.icon-uamdisplay:before {
  content: "\e956";
}
.icon-uamlaptop:before {
  content: "\e957";
}
.icon-uammobile:before {
  content: "\e958";
}
.icon-uammobile2:before {
  content: "\e959";
}
.icon-uamtablet:before {
  content: "\e95a";
}
.icon-uamundo:before {
  content: "\e965";
}
.icon-uamredo:before {
  content: "\e966";
}
.icon-uamundo2:before {
  content: "\e967";
}
.icon-uamredo2:before {
  content: "\e968";
}
.icon-uamforward:before {
  content: "\e969";
}
.icon-uamreply:before {
  content: "\e96a";
}
.icon-uamusers:before {
  content: "\e972";
}
.icon-uamuser-plus:before {
  content: "\e973";
}
.icon-uamuser-minus:before {
  content: "\e974";
}
.icon-uamuser-check:before {
  content: "\e975";
}
.icon-uamuser-tie:before {
  content: "\e976";
}
.icon-uamquotes-left:before {
  content: "\e977";
}
.icon-uamquotes-right:before {
  content: "\e978";
}
.icon-uamhour-glass:before {
  content: "\e979";
}
.icon-uamspinner:before {
  content: "\e97a";
}
.icon-uamspinner2:before {
  content: "\e97b";
}
.icon-uamspinner3:before {
  content: "\e97c";
}
.icon-uamspinner4:before {
  content: "\e97d";
}
.icon-uamspinner6:before {
  content: "\e97f";
}
.icon-uamspinner7:before {
  content: "\e980";
}
.icon-uamspinner11:before {
  content: "\e984";
}
.icon-uamsearch:before {
  content: "\e986";
}
.icon-uamzoom-in:before {
  content: "\e987";
}
.icon-uamzoom-out:before {
  content: "\e988";
}
.icon-uamkey2:before {
  content: "\e98e";
}
.icon-uamlock:before {
  content: "\e98f";
}
.icon-uamunlocked:before {
  content: "\e990";
}
.icon-uamwrench:before {
  content: "\e991";
}
.icon-uamequalizer:before {
  content: "\e992";
}
.icon-uamequalizer2:before {
  content: "\e993";
}
.icon-uamcog:before {
  content: "\e994";
}
.icon-uamcogs:before {
  content: "\e995";
}
.icon-uamhammer:before {
  content: "\e996";
}
.icon-uammagic-wand:before {
  content: "\e997";
}
.icon-uamaid-kit:before {
  content: "\e998";
}
.icon-uambug:before {
  content: "\e999";
}
.icon-uambin:before {
  content: "\e9ac";
}
.icon-uambin2:before {
  content: "\e9ad";
}
.icon-uambriefcase:before {
  content: "\e9ae";
}
.icon-uamairplane:before {
  content: "\e9af";
}
.icon-uamaccessibility:before {
  content: "\e9b2";
}
.icon-uamlist2:before {
  content: "\e9bb";
}
.icon-uamdownload3:before {
  content: "\e9c7";
}
.icon-uambookmark:before {
  content: "\e9d2";
}
.icon-uamsun:before {
  content: "\e9d4";
}
.icon-uamman:before {
  content: "\e9dc";
}
.icon-uamwoman:before {
  content: "\e9dd";
}
.icon-uamman-woman:before {
  content: "\e9de";
}
.icon-uamhappy:before {
  content: "\e9df";
}
.icon-uamhappy2:before {
  content: "\e9e0";
}
.icon-uamsmile:before {
  content: "\e9e1";
}
.icon-uamsmile2:before {
  content: "\e9e2";
}
.icon-uamtongue:before {
  content: "\e9e3";
}
.icon-uamwink:before {
  content: "\e9e7";
}
.icon-uamshocked:before {
  content: "\e9f1";
}
.icon-uamplus:before {
  content: "\ea0a";
}
.icon-uamminus:before {
  content: "\ea0b";
}
.icon-uaminfo:before {
  content: "\ea0c";
}
.icon-uamcancel-circle:before {
  content: "\ea0d";
}
.icon-uamcross:before {
  content: "\ea0f";
}
.icon-uamcheckmark:before {
  content: "\ea10";
}
.icon-uamcheckmark2:before {
  content: "\ea11";
}
.icon-uamspell-check:before {
  content: "\ea12";
}
.icon-uamenter:before {
  content: "\ea13";
}
.icon-uamexit:before {
  content: "\ea14";
}
.icon-uamplay2:before {
  content: "\ea15";
}
.icon-uampause:before {
  content: "\ea16";
}
.icon-uamstop:before {
  content: "\ea17";
}
.icon-uamprevious:before {
  content: "\ea18";
}
.icon-uamnext:before {
  content: "\ea19";
}
.icon-uambackward:before {
  content: "\ea1a";
}
.icon-uamforward2:before {
  content: "\ea1b";
}
.icon-uamplay3:before {
  content: "\ea1c";
}
.icon-uampause2:before {
  content: "\ea1d";
}
.icon-uamstop2:before {
  content: "\ea1e";
}
.icon-uambackward2:before {
  content: "\ea1f";
}
.icon-uamforward3:before {
  content: "\ea20";
}
.icon-uamfirst:before {
  content: "\ea21";
}
.icon-uamlast:before {
  content: "\ea22";
}
.icon-uamnext2:before {
  content: "\ea24";
}
.icon-uameject:before {
  content: "\ea25";
}
.icon-uamarrow-up:before {
  content: "\ea32";
}
.icon-uamarrow-right:before {
  content: "\ea34";
}
.icon-uamarrow-down:before {
  content: "\ea36";
}
.icon-uamarrow-left:before {
  content: "\ea38";
}
.icon-uamarrow-up-left2:before {
  content: "\ea39";
}
.icon-uamarrow-up2:before {
  content: "\ea3a";
}
.icon-uamarrow-up-right2:before {
  content: "\ea3b";
}
.icon-uamarrow-right2:before {
  content: "\ea3c";
}
.icon-uamtable:before {
  content: "\ea70";
}
.icon-uamtable2:before {
  content: "\ea71";
}
.icon-uaminsert-template:before {
  content: "\ea72";
}
.icon-uamparagraph-left:before {
  content: "\ea77";
}
.icon-uamparagraph-justify:before {
  content: "\ea7a";
}
.icon-uamindent-increase:before {
  content: "\ea7b";
}
.icon-uamindent-decrease:before {
  content: "\ea7c";
}
.icon-uamembed2:before {
  content: "\ea80";
}
.icon-uamshare2:before {
  content: "\ea82";
}
.icon-uammail:before {
  content: "\ea83";
}
.icon-uammail2:before {
  content: "\ea84";
}
.icon-uamflickr:before {
  content: "\eaa3";
}
.icon-uamflickr2:before {
  content: "\eaa4";
}
.icon-uamflickr3:before {
  content: "\eaa5";
}
.icon-uamflickr4:before {
  content: "\eaa6";
}
.icon-uamsteam2:before {
  content: "\eaad";
}
.icon-uamwordpress:before {
  content: "\eab4";
}
.icon-uamtumblr:before {
  content: "\eab9";
}
.icon-uamtux:before {
  content: "\eabd";
}
.icon-uamandroid:before {
  content: "\eac0";
}
.icon-uamwindows:before {
  content: "\eac1";
}
.icon-uamwindows8:before {
  content: "\eac2";
}
.icon-uamhackernews:before {
  content: "\eac7";
}
.icon-uamstackoverflow:before {
  content: "\ead0";
}
.icon-uamhtml-five:before {
  content: "\eae4";
}
.icon-uamhtml-five2:before {
  content: "\eae5";
}
.icon-uamcodepen:before {
  content: "\eae8";
}
</style>
