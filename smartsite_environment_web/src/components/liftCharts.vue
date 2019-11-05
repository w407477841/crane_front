<!--
 * @Author: pangyu 
 * @CreateTime: 2018-08-27 14:57:15 
 * @Desc:  环境监测弹窗
-->
<template>
    <div v-if="visible" class="dialog_cover">
        <div class="dialog_box">
            <div class="charts_title">{{title}}</div>
            <div class="charts_box">
                <div ref="charts" class="charts"></div>
            </div>
            <span class="dialog_close" @click="closeDialog">×</span>
        </div>
    </div>
</template>

<script>
    import {
        getTrendListApi
    } from "@/api/project.js";
    import {
        base4
    } from "@/axios/base.js";
    import "moment/locale/zh-cn";
    export default {
        data() {
            return {
                charts: null,
                trendList: [],
                wsTimer: null,
                stompClient: null,
                socket: null
            };
        },
        props: {
            visible: {
                type: Boolean,
                default: function () {
                    return false;
                }
            },
            title: {
                type: String,
                default: function () {
                    return null;
                }
            },
            projectId: {
                type: String,
                default: function () {
                    return null;
                }
            },
            deviceNo: {
                type: String,
                default: function () {
                    return null;
                }
            },
            columnName: {
                type: String,
                default: function () {
                    return null;
                }
            }
        },
        watch: {
            visible: function (val) {
                if (val) {}
            }
        },
        async mounted() {
            let _this = this;
            this.$nextTick().then(() => {
                _this.charts = _this.$echarts.init(this.$refs.charts);
                _this.setCharts();
                window.onresize = function () {
                    _this.charts.resize();
                };
            });
            await this.getTrendList();
            this.initWebSocket();
        },
        beforeDestroy() {
            // 页面离开时断开连接,清除定时器
            this.disconnect();
            clearInterval(this.wsTimer);
        },
        methods: {
            //初始化数据
            async getTrendList() {
                let columnName = this.columnName;
                if (columnName == "windDirection") {
                    columnName = "wind_direction";
                } else if (columnName == "windSpeed") {
                    columnName = "wind_speed";
                } else if (columnName == "tempature") {
                    columnName = "temperature";
                } else if (columnName == "windForce") {
                    columnName = "wind_force";
                }
                let params = {
                    projectId: this.projectId,
                    deviceNo: this.deviceNo,
                    columnName: columnName
                };
                let res = await getTrendListApi(params);
                this.trendList = res.trendList;
                this.updateCharts();
            },
            //注册ws
            initWebSocket() {
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
            },
            //开启ws
            connection() {
                let stompClientPath =
                    "/topic/current/monitor/" + this.projectId + "/" + this.deviceNo;
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
                        this.stompClient.subscribe(stompClientPath, msg => {
                            // 订阅服务端提供的某个topic
                            // msg.body存放的是服务端发送给我们的信息
                            let res = JSON.parse(msg.body);
                            this.trendList.shift();
                            let obj = {
                                deviceTime: res.deviceTime,
                                amount: res[this.columnName]
                            };
                            if (this.columnName == "windDirection") {
                                obj.windDirection = res.windDirection;
                            }
                            this.trendList.push(obj);
                            this.updateCharts();
                        });
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
            //关闭弹窗
            closeDialog() {
                this.$emit("update:visible", false);
            },
            //生成图表
            setCharts() {
                let option = {};
                let _this = this;
                if (this.columnName == "windDirection") {
                    option = {
                        legend: {
                            data: [],
                            textStyle: {
                                color: "#ffffff"
                            },
                            orient: "vertical",
                            x: "right",
                            y: "center"
                        },
                        color: [
                            "#5202f3",
                            "#82fffb",
                            "#ff6205",
                            "#01ff04",
                            "#b401ff",
                            "#fff104",
                            "#e40181"
                        ],
                        radar: {
                            splitNumber: 6,
                            // 设置雷达图中间射线的颜色
                            axisLine: {
                                lineStyle: {
                                    color: "#71a1b0"
                                }
                            },
                            splitLine: {
                                // (这里是指所有圆环)坐标轴在 grid 区域中的分隔线。
                                lineStyle: {
                                    color: "#71a1b0"
                                }
                            },
                            splitArea: {
                                // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                                show: true,
                                areaStyle: {
                                    color: ["rgba(255,255,255,0)"]
                                }
                            },
                            axisLabel: {
                                fontSize: 12,
                                color: "#FFFFFF",
                                showMaxLabel: true, //最大值，即外圈不显示数字30
                                showMinLabel: true, //最小值，即中心点显示0
                                formatter: "{value} m/s",
                                align: "middle",
                                verticalAlign: "middle"
                            },
                            indicator: [{
                                    name: "N",
                                    max: 12
                                },
                                {
                                    name: "",
                                    max: 12
                                    // axisLabel: { show: true }
                                },
                                {
                                    name: "W",
                                    max: 12
                                },
                                {
                                    name: "",
                                    max: 12
                                },
                                {
                                    name: "S",
                                    max: 12
                                },
                                {
                                    name: "",
                                    max: 12
                                },
                                {
                                    name: "E",
                                    max: 12
                                },
                                {
                                    name: "",
                                    max: 12
                                }
                            ]
                        },
                        series: [{
                            type: "radar",
                            areaStyle: {
                                normal: {}
                            },
                            symbol: "circle",
                            data: []
                        }]
                    };
                } else {
                    option = {
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {
                                lineStyle: {
                                    color: "#57617B"
                                }
                            }
                        },
                        color: ["#3997A9"],
                        xAxis: {
                            type: "category",
                            boundaryGap: false,
                            axisLine: {
                                lineStyle: {
                                    color: "#57617B"
                                }
                            },
                            splitLine: {
                                show: false
                            },
                            data: []
                        },
                        yAxis: {
                            type: "value",
                            boundaryGap: [0, "100%"],
                            axisLine: {
                                lineStyle: {
                                    color: "#57617B"
                                }
                            },
                            axisLabel: {
                                margin: 10,
                                textStyle: {
                                    fontSize: 14
                                }
                            },
                            splitLine: {
                                show: false
                            }
                        },
                        series: [{
                            name: _this.title,
                            type: "line",
                            smooth: true,
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        color: "#3997A9"
                                    }
                                }
                            },
                            areaStyle: {
                                color: {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                            offset: 0,
                                            color: "#064D65" // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: "#09092A" // 100% 处的颜色
                                        }
                                    ],
                                    globalCoord: false // 缺省为 false
                                }
                            },
                            data: []
                        }]
                    };
                }
                this.charts.setOption(option);
            },
            //更新图表数据
            updateCharts() {
                ///this.moment(el.trendTime).startOf('day').fromNow();
                let xDatas = [];
                let xDatasTemp = [];
                let yDatas = [];
                // console.log(this.trendList);
                this.trendList.forEach(el => {
                    //   console.log(el.trendTime);
                    // console.log(this.moment(el.trendTime).format("YYYY-MM-DD HH:MM:ss"));
                     xDatasTemp.push(el.trendTime);

                    this.moment().locale("zh-cn");
                    let trendTime = this.moment(el.trendTime)
                      .startOf("hour")
                      .fromNow();
                    // console.log(trendTime);
                    trendTime
                      .replace(" hours ago", "小时前")
                      .replace(" minutes ago", "分钟前")
                      .replace("an", "1");
                    // console.log(trendTime);
                    // let trendTime = this.moment(el.trendTime).format("HH:ss");
                    // xDatas.push(trendTime);
                   
                    if (this.columnName == "windDirection") {
                        let yData = [0, 0, 0, 0, 0, 0, 0, 0];
                        switch (el.windDirection) {
                            case "北":
                                yData[7] = el.windSpeed;
                                yData[1] = el.windSpeed;
                                break;
                            case "西北":
                                yData[0] = el.windSpeed;
                                yData[2] = el.windSpeed;
                                break;
                            case "西":
                                yData[1] = el.windSpeed;
                                yData[3] = el.windSpeed;
                                break;
                            case "西南":
                                yData[2] = el.windSpeed;
                                yData[4] = el.windSpeed;
                                break;
                            case "南":
                                yData[3] = el.windSpeed;
                                yData[5] = el.windSpeed;
                                break;
                            case "东南":
                                yData[4] = el.windSpeed;
                                yData[6] = el.windSpeed;
                                break;
                            case "东":
                                yData[5] = el.windSpeed;
                                yData[7] = el.windSpeed;
                                break;
                            case "东北":
                                yData[6] = el.windSpeed;
                                yData[0] = el.windSpeed;
                                break;
                        }
                        yDatas.push({
                            name: trendTime,
                            value: yData
                        });
                    } else {
                        yDatas.push(el.amount);
                    }
                });
                // console.log(xDatas);
                xDatasTemp = xDatasTemp.sort((a,b)=>{
                    return a - b;
                });
                xDatasTemp.forEach((ee)=>{
                    let aa = this.moment(ee).format("HH:mm");
                    // if(xDatas.indexOf(aa) > -1){
                        xDatas.push(aa);
                    // }
                });
                // console.log(xDatasTemp);
                if (this.columnName == "windDirection") {
                    // 雷达图
                    this.charts.setOption({
                        data: xDatas,
                        series: [{
                            data: yDatas
                        }]
                    });
                } else {
                    this.charts.setOption({
                        xAxis: {
                            data: xDatas
                        },
                        series: [{
                            data: yDatas
                        }]
                    });
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    .dialog_cover {
        * {
            box-sizing: border-box;
        }

        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.75);
        display: flex;
        justify-content: center;
        align-items: center;

        .dialog_box {
            display: inline-block;
            position: relative;
            width: 964px;
            height: 542px;
            background-image: url("~@/assets/images/dialogBG.png");
            background-repeat: no-repeat;
            background-size: contain;
            padding: 30px 50px;

            .charts_title {
                text-align: left;
                font-size: 15px;
                color: #beebfc;
            }

            .charts_box {
                height: 100%;
                width: 100%;
            }

            .dialog_close {
                display: inline-block;
                width: 30px;
                height: 30px;
                line-height: 30px;
                font-size: 24px;
                border-radius: 14px;
                border: 1px solid #fff;
                position: absolute;
                bottom: -35px;
                left: 50%;
                margin-left: -15px;
                opacity: 0.75;
                cursor: pointer;
            }
        }
    }

    .charts {
        width: 100%;
        height: 100%;
    }
</style>