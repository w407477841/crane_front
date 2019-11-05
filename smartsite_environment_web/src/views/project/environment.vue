<!--
 * @Author: pangyu 
 * @CreateTime: 2018-08-27 15:38:57 
 * @Desc: 环境监测 
-->
<template>
  <div class="project_environment">
    <template v-if="deviceList.length>0" > 
      <div class="project_environment_main">
        <div class="item">
          <div class="dashedBorder" @click="handleClick('PM2.5','pm25')">
            <span class="dashedTitle">PM2.5</span>
            <div class="environment_item_main firstBlock">
              <div class="left">
                <div class="colorbar">
                  <div class="colorbar_container">
                    <div class="colorbar_box">
                      <div :class="['curt',curtClass]" :style="'left:'+colorbar+'%;'"></div>
                      <div class="colorbar_item colorbar_1">
                        <div class="color"></div>
                        <div class="text">0</div>
                      </div>
                      <div class="colorbar_item colorbar_2">
                        <div class="color"></div>
                        <div class="text">50</div>
                      </div>
                      <div class="colorbar_item colorbar_3">
                        <div class="color"></div>
                        <div class="text">100</div>
                      </div>
                      <div class="colorbar_item colorbar_4">
                        <div class="color"></div>
                        <div class="text">150</div>
                      </div>
                      <div class="colorbar_item colorbar_5">
                        <div class="color"></div>
                        <div class="text">200</div>
                      </div>
                      <div class="colorbar_item colorbar_6">
                        <div class="color"></div>
                        <div class="text">300</div>
                      </div>
                      <div class="colorbar_item colorbar_7">
                        <div class="text">500</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="environment_info">
                  <div class="value">{{deviceActive.pm25}}ug/m³</div>
                  <div class="basic">标准：0~{{deviceList[0].pm25}}ug/m³</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="dashedBorder" @click="handleClick('温度','tempature')">
            <span class="dashedTitle">温度</span>
            <div class="environment_item_main secondBlock">
              <div class="left">
                <div class="thermometer">
                  <div class="thermometer_container">

                    <div class="progress_container">
                      <p>
                        <span>-40</span>
                        <span>-20</span>
                        <span>0</span>
                        <span>20</span>
                        <span>40</span>
                        <span>60</span>
                        <span>80</span>
                        <span>100</span>
                        <span>120F</span>
                      </p>
                      <div class="progress">
                        <div class="start"></div>
                        <div class="progress_rate" :style="'width:'+thermometer+'%;'"></div>
                      </div>
                      <p>
                        <span>-40</span>
                        <span>-30</span>
                        <span>-20</span>
                        <span>-10</span>
                        <span>0</span>
                        <span>10</span>
                        <span>20</span>
                        <span>30</span>
                        <span>40</span>
                        <span>50℃</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="environment_info">
                  <div class="value">{{deviceActive.temperature}}℃</div>
                  <div class="basic">标准：{{deviceList[0].temperatureMin}}℃~{{deviceActive.temperatureMax}}℃</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="dashedBorder" @click="handleClick('PM10','pm10')">
            <span class="dashedTitle">PM10</span>
            <div class="environment_item_main thirdBlock">
              <div class="left">
                <div class="air">
                  <div class="image"></div>
                </div>
              </div>
              <div class="right">
                <div class="environment_info">
                  <div class="value">{{deviceActive.pm10}}ug/m³</div>
                  <div class="basic">标准：0~120ug/m³</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="dashedBorder" @click="handleClick('风向','windDirection')">
            <span class="dashedTitle">风向</span>
            <div class="environment_item_main fourthBlock">
              <div class="left">
                <div class="windDirection">
                  <div class="image"></div>
                </div>
              </div>
              <div class="right">
                <div class="environment_info">
                  <div class="value">{{deviceActive.windDirection}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="dashedBorder" @click="handleClick('风速','windSpeed')">
            <span class="dashedTitle">风速</span>
            <div class="environment_item_main fifthBlock">
              <div class="left">
                <div class="windSpeed">
                  <div class="image"></div>
                </div>
              </div>
              <div class="right">
                <div class="environment_info">
                  <div class="value">{{deviceActive.windSpeed}}m/s</div>
                  <div class="basic">标准：6.5~{{deviceList[0].windSpeed}}m/s</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="dashedBorder" @click="handleClick('风力','windForce')">
            <span class="dashedTitle">风力</span>
            <div class="environment_item_main sixthBlock">
              <div class="left">
                <div class="windForce">
                  <div class="image"></div>
                </div>
              </div>
              <div class="right">
                <div class="environment_info">
                  <div class="value">{{deviceActive.windForce}}级</div>
                  <div class="basic">标准：0~{{deviceList[0].windForce}}级</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="dashedBorder" @click="handleClick('噪声','noise')">
            <span class="dashedTitle">噪声</span>
            <div class="environment_item_main seventhBlock">
              <div class="left">
                <div class="noise">
                  <div ref="noise" id="noise" class="charts"></div>
                </div>
              </div>
              <div class="right">
                <div class="environment_info">
                  <div class="value">{{deviceActive.noise}}分贝</div>
                  <div class="basic">标准：0~{{deviceList[0].noise}}分贝</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="dashedBorder" @click="handleClick('湿度','humidity')">
            <span class="dashedTitle">湿度</span>
            <div class="environment_item_main eighthBlock">
              <div class="left">
                <div class="humidity">
                  <div ref="humidity" id="humidity" class="charts"></div>
                </div>
              </div>
              <div class="right">
                <div class="environment_info">
                  <div class="value">{{deviceActive.humidity}}%rh</div>
                  <div class="basic">标准：{{deviceList[0].humidityMin}}~{{deviceList[0].humidityMax}}%rh</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="project_environment_nav">
        
      </div>
      <liftCharts v-if="visible" :visible.sync="visible" v-bind="chartInfo"></liftCharts>
    </template>
    <div v-else class="positionCenter">加载中...</div>
  </div>
</template>

<script>
import liftCharts from "@/components/liftCharts";
import { base4 } from "@/axios/base.js";
import { loginApi, loginEquipmentApi } from "@/api/login.js";
import {
  getEnvironmentListApi,
  getEnvironmentListMonitorApi
} from "@/api/project.js";
export default {
  components: { liftCharts },
  data() {
    return {
      curtClass: "",
      charts_noise: null,
      charts_humidity: null,
      visible: false,
      chartInfo: {},
      deviceList: [],
      deviceActive: {},
      indexActive: 0,
      wsTimer: null,
      stompClient: null,
      socket: null,
      projectId: this.$route.query.projectId,
      deviceNo: this.$route.query.deviceNo
    };
  },
  computed: {
    //pm2.5 当前状态颜色
    colorbar: function() {
      let val = this.deviceActive.pm25 / 500 * 100;
      if (val <= 10) {
        this.curtClass = "curt_1";
      } else if (val <= 20) {
        this.curtClass = "curt_2";
      } else if (val <= 30) {
        this.curtClass = "curt_3";
      } else if (val <= 40) {
        this.curtClass = "curt_4";
      } else if (val <= 60) {
        this.curtClass = "curt_5";
      } else {
        this.curtClass = "curt_6";
      }
      return val;
    },
    thermometer: function() {
      let val = (this.deviceActive.temperature + 50) / 100 * 100;
      return val;
    }
  },
  beforeDestroy() {
    // 页面离开时断开连接,清除定时器
    this.disconnect();
    clearInterval(this.wsTimer);
  },
  mounted() {
    this.handleLogin();
    let _this = this;
    setTimeout(() => {
      _this.getEnvironmentList();
    }, 1000);
  },
  methods: {
    handleLogin() {
      let param = {
        body: {
          name: 'admin',
          password: '111111'
        }
      };
      loginApi(param).then(res => {
        if (res.code != 200) {
          this.popShow = true;
          this.loginTips = res.message;
          return false;
        }
        sessionStorage.setItem("user", JSON.stringify(res.data));
        sessionStorage.setItem("token", res.message);
        loginEquipmentApi().then((data)=>{
            if(data.code == 200){
                sessionStorage.setItem("uuidData", JSON.stringify(data.data));
            }
        });
      });
    },
    //注册ws
    initWebSocket() {
      /**
      this.disconnect();
      this.connection();
      let _this = this;
      // 断开重连机制,尝试发送消息,捕获异常发生时重连
      this.wsTimer = setInterval(() => {
        try {
          _this.stompClient.send("test");
        } catch (err) {
          _this.connection();
        }
      }, 20000);
       */
    },
    //开启ws
    connection() {
      // 建立连接对象
      this.socket = new SockJS(base4 + "/webSocketServer"); //连接服务端提供的通信接口，连接以后才可以订阅广播消息和个人消息
      // 获取STOMP子协议的客户端对象
      this.stompClient = Stomp.over(this.socket);

      // 定义客户端的认证信息,按需求配置
      let headers = {};
      // 向服务器发起websocket连接
      this.stompClient.connect(
        headers,
        frame => {
          this.stompClient.subscribe(
            "/topic/current/monitor/" +
              this.projectId +
              "/" +
              this.deviceList[this.indexActive].deviceNo,
            msg => {
              // 订阅服务端提供的某个topic
              // msg.body存放的是服务端发送给我们的信息
              let res = JSON.parse(msg.body);
              console.log("==========================");
              console.log(res);
              this.deviceActive = {
                ...this.deviceList[this.indexActive],
                ...res
              };
              console.log("==========================");
            }
          );
        },
        err => {}
      );
    },
    //关闭ws
    disconnect() {
      if (this.stompClient != null) {
        this.stompClient.disconnect();
        console.log("Disconnected");
      }
    },
    navClick(index) {
      this.indexActive = index;
      this.getEnvironmentListMonitor();
    },
    //获取环境监测列表
    async getEnvironmentList() {
      let params = {
        //projectId: this.projectId
        deviceNo:this.deviceNo
      };
      let res = await getEnvironmentListApi(params);
      console.log("###################################");
      console.log(res);
      console.log(res.data);
      console.log("###################################");
      this.deviceList = res.data.environmentList;
      //if (this.deviceList.length > 0) {
        let _this = this;
        setTimeout(() => {
          _this.charts_noise = _this.$echarts.init(
            document.getElementById("noise")
          );
          _this.charts_humidity = _this.$echarts.init(
            document.getElementById("humidity")
          );
          _this.setNoise();
          _this.setHumidity();
          window.onresize = function() {
            _this.charts_noise.resize();
            _this.charts_humidity.resize();
          };
        }, 0);

        this.navClick(0);
        this.initWebSocket();
      //}
    },
    //获取详情
    async getEnvironmentListMonitor() {
      let params = {
        projectId: this.projectId,
        deviceNo: this.deviceList[this.indexActive].deviceNo
      };
      let res = await getEnvironmentListMonitorApi(params);
      console.log("==========================");
      console.log(res.data);
      console.log("==========================");
      this.deviceActive = { ...this.deviceList[this.indexActive], ...res.data };
      this.updateCharts();
      this.disconnect(); // 关闭当前订阅
      this.connection(); // 建立新订阅
    },
    //打开对应弹窗
    handleClick(title, columnName) {
      this.chartInfo = {
        title: title,
        projectId: this.projectId,
        deviceNo: this.deviceList[this.indexActive].deviceNo,
        columnName: columnName
      };
      this.visible = true;
    },
    //噪声图表
    setNoise() {
      this.charts_noise.setOption({
        tooltip: {
          formatter: "{a}:{b}{c}分贝"
        },
        series: [
          {
            name: "噪声指标",
            type: "gauge",
            radius: "80%",
            min: 0,
            max: 200,
            detail: {
              formatter: "噪声",
              color: "#00afd4",
              fontSize: "12",
              offsetCenter: [0, "80%"]
            },
            data: [
              {
                value: [],
                name: ""
              }
            ],
            pointer: {
              length: "70%",
              width: 5
            },
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [[0.2, "#00afd4"], [0.8, "#00afd4"], [1, "#00afd4"]],
                width: 4
              }
            },
            axisTick: {
              length: 4,
              color: "#00afd4",
              lineStyle: {
                color: "#00afd4"
              }
            },
            splitLine: {
              length: 8,
              lineStyle: {
                color: "#00afd4"
              }
            },
            axisLabel: {
              show: false
            }
          }
        ]
      });
    },
    //湿度图表
    setHumidity() {
      this.charts_humidity.setOption({
        tooltip: {
          formatter: "{a}:{b}{c}%rh"
        },
        series: [
          {
            name: "湿度指标",
            type: "gauge",
            radius: "65%",
            min: 0,
            max: 160,
            detail: {
              formatter: "湿度",
              color: "#00afd4",
              fontSize: "12",
              offsetCenter: [0, "80%"],
              borderColor: "#00afd4",
              borderWidth: 1,
              borderType: "solid",
              borderRadius: 10
            },
            data: [
              {
                value: [],
                name: ""
              }
            ],
            pointer: {
              length: "70%",
              width: 2
            },
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [[0.2, "#13131b"], [0.8, "#13131b"], [1, "#13131b"]]
              }
            },
            splitLine: {
              length: 8,
              lineStyle: {
                color: "#00afd4",
                width: 2
              }
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: "#086b83"
              }
            },
            axisLabel: {
              distance: "-25",
              color: "#fff",
              fontSize: 9
            },
            itemStyle: {
              normal: {
                color: "#086b83"
              }
            }
          }
        ]
      });
    },
    updateCharts() {
      this.charts_noise.setOption({
        series: [
          {
            max: this.deviceList[0].noise,
            data: [
              {
                value: this.deviceActive.noise,
                name: ""
              }
            ]
          }
        ]
      });
      this.charts_humidity.setOption({
        series: [
          {
            max: this.deviceList[0].humidityMax,
            data: [
              {
                value: this.deviceActive.humidity,
                name: ""
              }
            ]
          }
        ]
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.project_environment {
  display: flex;
  flex-direction: column;
  height: calc(100% - 11.2px);
  margin-top: 11.2px;
  padding: 5px;
  background: #09092a;
  box-shadow: inset 0 0 2rem rgba(0, 246, 255, 0.2);
  border: solid 1px #004a7c;
  box-sizing: border-box;
  position: relative;
  * {
    box-sizing: border-box;
  }
  .project_environment_nav {
    height: 100px;
    padding: 10px;
    ul {
      height: 100%;
      display: flex;
      align-items: flex-end;
      .item {
        display: flex;
        justify-content: space-between;
        // min-width: 100px;
        height: 34px;
        line-height: 34px;
        margin-right: 15px;
        background-color: #09092a;
        border: 1px solid #0098ef;
        box-shadow: inset 0px 0px 8px #0098ef;
        cursor: pointer;
        .area {
          font-size: 15px;
          padding: 0 5px;
        }
        .status {
          font-size: 12px;
          padding: 0 5px 0 17px;
          background-repeat: no-repeat;
          background-size: 12px;
          background-position: 3px center;
          &.status1 {
            color: #15986e;
            background-image: url("~@/assets/images/running.png");
          }
          &.status2 {
            color: #ca3131;
            background-image: url("~@/assets/images/stop.png");
          }
          &.status3 {
            color: #d7750b;
            background-image: url("~@/assets/images/error.png");
          }
        }
      }
    }
  }
  .project_environment_main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex: 1;
    .item {
      padding: 10px;
      width: 50%;
      height: 25%;
      .environment_item_main {
        height: 100%;
        padding: 0 20px;
        display: flex;
        align-items: center;
        cursor: pointer;
        .left {
          width: 60%;
        }
        .right {
          width: 40%;
          display: flex;
          flex-direction: row-reverse;
          .environment_info {
            color:white;
            font-weight:bold;
            width: 110px;
            text-align: left;
            position: relative;
            .value {
              font-size: 24px;
              overflow: hidden;
              &.waring {
                color: #d5033d;
              }
            }
            .basic {
              font-size: 12px;
              position: absolute;
              bottom: -20px;
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
//PM2.5
.colorbar {
  padding: 15px 0;
  .colorbar_container {
    .colorbar_box {
      display: flex;
      position: relative;
      .colorbar_1 {
        width: 10%;
        .color {
          background-color: #00e500;
        }
      }
      .colorbar_2 {
        width: 10%;
        .color {
          background-color: #ffe500;
        }
      }
      .colorbar_3 {
        width: 10%;
        .color {
          background-color: #f97108;
        }
      }
      .colorbar_4 {
        width: 10%;
        .color {
          background-color: #ff0000;
        }
      }
      .colorbar_5 {
        width: 20%;
        .color {
          background-color: #99004c;
        }
      }
      .colorbar_6 {
        width: 40%;
        .color {
          background-color: #7e0022;
        }
      }
      .curt {
        width: 0;
        height: 0;
        border-width: 5px;
        border-style: solid;
        border-color: transparent;
        position: absolute;
        top: -5px;
        left: 0;
        margin-left: -2.5px;
        &.curt_1 {
          border-top-color: #00e500;
        }
        &.curt_2 {
          border-top-color: #ffe500;
        }
        &.curt_3 {
          border-top-color: #f97108;
        }
        &.curt_4 {
          border-top-color: #ff0000;
        }
        &.curt_5 {
          border-top-color: #99004c;
        }
        &.curt_6 {
          border-top-color: #7e0022;
        }
      }
      .colorbar_item {
        position: relative;
        height: 20px;
        padding-right: 1px;
        .color {
          height: 10px;
        }
        .text {
          width: 24px;
          position: absolute;
          left: -12px;
          bottom: -10px;
          color:#fff;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
//温度
.thermometer {
  .thermometer_container {
    .progress_container {
      color:#fff;
      padding-left: 24px;
      p {
        display: flex;
        span {
          display: inline-block;
          flex: 1;
          text-align: right;
        }
      }
      .progress {
        height: 14px;
        padding: 3px 3px 3px 0;
        border: 1px solid #fff;
        border-radius: 5px;
        border-left: 1px solid #ec3232;
        position: relative;
        .start {
          width: 24px;
          height: 24px;
          border-radius: 12px;
          border: 1px solid #fff;
          position: absolute;
          top: -7px;
          left: -20px;
          z-index: 1;
          &::before {
            content: " ";
            width: 16px;
            height: 16px;
            border-radius: 8px;
            background-color: #ec3232;
            position: absolute;
            top: 3px;
            left: 3px;
          }
        }
        .progress_rate {
          height: 100%;
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
          background-color: #ec3232;
          position: relative;
          z-index: 2;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.air {
  .image {
    width: 70px;
    height: 70px;
    background-image: url("~@/assets/images/pm10.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
}
</style>
<style lang="scss" scoped>
//风向
.windDirection {
  .image {
    width: 70px;
    height: 70px;
    background-image: url("~@/assets/images/windDirection.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
}
//风速
.windSpeed {
  .image {
    width: 70px;
    height: 70px;
    background-image: url("~@/assets/images/windSpeed.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
}
//风力
.windForce {
  .image {
    width: 70px;
    height: 70px;
    background-image: url("~@/assets/images/windForce.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
}
</style>
<style lang="scss" scoped>
//噪声
.noise {
  .charts {
    width: 100px;
    height: 100px;
  }
}
</style>
<style lang="scss" scoped>
//湿度
.humidity {
  .charts {
    width: 100px;
    height: 100px;
  }
}
</style>