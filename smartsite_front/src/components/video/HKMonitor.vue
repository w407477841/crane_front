<!--
 * @Author: zhangzhenya 
 * @CreateTime: 2018-08-27 15:04:47 
 * @Desc: 海康视频组件 
-->
<template>
    <div class="monitor">
        <div style=" position: relative; z-index:-1;" class="videoPlugin" id="videoPlugin" >
				</div>
        <button v-if="isCapturePic" @click="clickCapturePic" class="monitor__button">抓图</button>
    </div>
</template>

<script>
export default {
  props: {
    baseInfo: {
      // 必须提供字段
      required: true
    },
    tag: {
      // 必须提供字段
      required: true
    },
    isCapturePic: {
      // 可选字段，有默认值
      required: true
    },
    isGroup: {
      required: false,
      default: true
    },
    cameraIndex: {
      default: ""
    }
  },
  data() {
    return {
      channels: [],
      // 全局保存当前选中窗口
      g_iWndIndex: "" //可以不用设置这个变量，有窗口参数的接口中，不用传值，开发包会默认使用当前选择窗口
    };
  },
  watch: {
    g_iWndIndex() {
      console.log(this.g_iWndIndex);
    }
  },
  beforeDestroy() {
    this.clickStopRealPlay();
  },
  async mounted() {
    this.initIntelligentVideo();
    this.clickLogout();
    this.clickStopRealPlay();
    this.clickLogin();
    this.setLocalCfg();
  },
  methods: {
    initIntelligentVideo: function() {
      let that = this;
      $(function() {
        // 检查插件是否已经安装过
        var iRet = WebVideoCtrl.I_CheckPluginInstall();
        if (-2 == iRet) {
          return;
        } else if (-1 == iRet) {
          return;
        }

        // 初始化插件参数及插入插件
        WebVideoCtrl.I_InitPlugin("100%", "100%", {
          bWndFull: true, //是否支持单窗口双击全屏，默认支持 true:支持 false:不支持
          iWndowType: 1,
          cbSelWnd: function(xmlDoc) {
            console.log(
              111,
              xmlDoc,
              $(xmlDoc)
                .find("SelectWnd")
                .eq(0)
                .text()
            );
            that.g_iWndIndex = $(xmlDoc)
              .find("SelectWnd")
              .eq(0)
              .text();
            var szInfo = "当前选择的窗口编号：" + this.g_iWndIndex;
          },
          szColorProperty: "sub-border:ffffff"
        });
        WebVideoCtrl.I_InsertOBJECTPlugin("videoPlugin");
        //只加载一个窗口
        // 检查插件是否最新
        if (-1 == WebVideoCtrl.I_CheckPluginVersion()) {
          return;
        }
        // 窗口事件绑定
        $(window).bind({
          resize: function() {
            var $Restart = $("#restartDiv");
            if ($Restart.length > 0) {
              var oSize = getWindowSize();
              $Restart.css({
                width: oSize.width + "px",
                height: oSize.height + "px"
              });
            }
          }
        });
      });
      console.log(1);
    },
    clickLogout() {
      var that = this;
      console.log(that.baseInfo.ip);
      var ip = that.baseInfo.ip;
      if (that.tag == 1) {
        ip = that.baseInfo.ip1;
      }
      var iRet = WebVideoCtrl.I_Logout(ip);
      console.log(2);
    },
    clickStopRealPlay() {
      console.log("stop");
      for (var i = 0; i < this.channels.length; i++) {
        WebVideoCtrl.I_Stop(i);
      }
      console.log(3);
    },
    clickLogin() {
      var that = this;
      if (that.tag == 0) {
        var iRet = WebVideoCtrl.I_Login(
          that.baseInfo.ip,
          1,
          that.baseInfo.port,
          that.baseInfo.username,
          that.baseInfo.password,
          {
            async: false,
            success: function(xmlDoc) {
              setTimeout(function() {
                that.getChannelInfo();
              }, 10);
            },
            error: function() {
              alert(that.baseInfo.ip + " 登录失败！");
            }
          }
        );
      } else if (that.tag == 1) {
        var iRet = WebVideoCtrl.I_Login(
          that.baseInfo.ip1,
          1,
          that.baseInfo.port1,
          that.baseInfo.username1,
          that.baseInfo.password1,
          {
            async: false,
            success: function(xmlDoc) {
              setTimeout(function() {
                that.getChannelInfo();
              }, 10);
            },
            error: function() {
              alert(that.baseInfo.ip1 + " 登录失败！");
            }
          }
        );
      }
      console.log(4);
    },
    getChannelInfo: function() {
      var that = this;
      var channels = [];
      var ip = that.baseInfo.ip;
      // 模拟通道
      WebVideoCtrl.I_GetAnalogChannelInfo(ip, {
        async: false,
        success: function(xmlDoc) {
          var oChannels = $(xmlDoc).find("VideoInputChannel");
          $.each(oChannels, function(i) {
            var id = $(this)
                .find("id")
                .eq(0)
                .text(),
              name = $(this)
                .find("name")
                .eq(0)
                .text();
            if ("" == name) {
              name = "Camera " + (i < 9 ? "0" + (i + 1) : i + 1);
            }
            channels.push({
              id: id,
              name: name
            });
          });
        },
        error: function() {
          //alert(ip + " 获取模拟通道失败！");
        }
      });
      // 数字通道
      WebVideoCtrl.I_GetDigitalChannelInfo(ip, {
        async: false,
        success: function(xmlDoc) {
          var oChannels = $(xmlDoc).find("InputProxyChannelStatus");
          $.each(oChannels, function(i) {
            var id = $(this)
                .find("id")
                .eq(0)
                .text(),
              name = $(this)
                .find("name")
                .eq(0)
                .text(),
              online = $(this)
                .find("online")
                .eq(0)
                .text();
            if ("false" == online) {
              // 过滤禁用的数字通道
              return true;
            }
            if ("" == name) {
              name = "IPCamera " + (i < 9 ? "0" + (i + 1) : i + 1);
            }
            channels.push({
              id: id,
              name: name
            });
          });
        },
        error: function() {
          //alert(ip + " 获取数字通道失败！");
        }
      });
      // 零通道
      WebVideoCtrl.I_GetZeroChannelInfo(ip, {
        async: false,
        success: function(xmlDoc) {
          var oChannels = $(xmlDoc).find("ZeroVideoChannel");
          $.each(oChannels, function(i) {
            var id = $(this)
                .find("id")
                .eq(0)
                .text(),
              name = $(this)
                .find("name")
                .eq(0)
                .text();
            if ("" == name) {
              name = "Zero Channel " + (i < 9 ? "0" + (i + 1) : i + 1);
            }
            if (
              "true" ==
              $(this)
                .find("enabled")
                .eq(0)
                .text()
            ) {
              // 过滤禁用的零通道
              channels.push({
                id: id,
                name: name
              });
            }
          });
        },
        error: function() {
          //alert(ip + " 获取零通道失败！");
        }
      });
      this.clickStartRealPlay(channels);
      this.channels = channels;
    },
    clickStartRealPlay(channels) {
      var that = this;
      var ip = that.baseInfo.ip;
      if (that.tag == 1) {
        ip = that.baseInfo.ip1;
      }
      console.log("isGroup", this.isGroup);
      if (!this.isGroup) {
        channels = [channels[this.cameraIndex]];
      }
      //设置展示区域的宫格数,开方向上取整
      console.log("channels", channels);
      var num =  Math.ceil(Math.sqrt(channels.length));
      if(num>3){num=3}    //最大9个//
      WebVideoCtrl.I_ChangeWndNum(num);
      // WebVideoCtrl.I_ChangeWndNum(9);
      for (var i = 0; i < (channels.length>9?9:channels.length); i++) {
        var iStreamType = 1; //1-主码流(高清),2-子码流(模糊),3-第三码流,4-转码码流
        var iChannelID = channels[i].id;
        var iRet = WebVideoCtrl.I_StartRealPlay(ip, {
          iStreamType: iStreamType,
          iChannelID: iChannelID,
          bZeroChannel: false,
          iWndIndex: i
        });
      }
    },
    // 设置本地参数
    setLocalCfg() {
      var arrXml = [],
        szInfo = "",
        xmlDoc = WebVideoCtrl.I_GetLocalCfg();
      arrXml.push("<LocalConfigInfo>");
      arrXml.push("<PackgeSize>" + 0 + "</PackgeSize>");
      arrXml.push("<PlayWndType>" + 0 + "</PlayWndType>");
      arrXml.push("<BuffNumberType>" + 0 + "</BuffNumberType>");
      arrXml.push("<RecordPath>" + "" + "</RecordPath>");
      arrXml.push(
        "<CapturePath>" +
          `${$(xmlDoc)
            .find("CapturePath")
            .eq(0)
            .text()
            .slice(0, 15)}\Desktop` +
          "</CapturePath>"
      );
      arrXml.push("<PlaybackFilePath>" + "" + "</PlaybackFilePath>");
      arrXml.push("<PlaybackPicPath>" + "" + "</PlaybackPicPath>");
      arrXml.push("<DownloadPath>" + "" + "</DownloadPath>");
      arrXml.push("<IVSMode>" + 1 + "</IVSMode>");
      arrXml.push(
        "<CaptureFileFormat>" +
          $(xmlDoc)
            .find("CaptureFileFormat")
            .eq(0)
            .text() +
          "</CaptureFileFormat>"
      );
      arrXml.push("<ProtocolType>" + 0 + "</ProtocolType>");
      arrXml.push("</LocalConfigInfo>");

      var iRet = WebVideoCtrl.I_SetLocalCfg(arrXml.join(""));
    },
    // 抓图
    clickCapturePic() {
      var oWndInfo = WebVideoCtrl.I_GetWindowStatus(this.g_iWndIndex),
        szInfo = "";
      if (oWndInfo != null) {
        let name = this.channels[this.g_iWndIndex].name;
        console.log(this.channels, this.g_iWndIndex, name);
        var szPicName =
            sessionStorage.getItem("projectName") +
            "_" +
            name +
            "_" +
            // this.moment(new Date()).format("LLLLLL"),
            this.moment(new Date()).format("YYYY-MM-DD_HH时mm分ss秒"),
          // this.moment(new Date()).format("YYYY-MM-DD"),
          iRet = WebVideoCtrl.I_CapturePic(szPicName);
        console.log(szPicName);
        if (0 == iRet) {
          szInfo = "抓图成功！请查看桌面";
        } else {
          szInfo = "抓图失败！";
        }
        alert(szInfo);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.monitor {
  width: 100%;
  height: 100%;
  .videoPlugin {
    width: 100%;
    height: 100%;
  }
}
</style>
