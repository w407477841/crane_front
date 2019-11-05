<template>
    <div class="card-panel-aa card-weather-panel">
        <div class="card-weather-title">
            <div class="name">今天</div>
            <div class="val">{{today}}</div>
        </div>
        <div class="card-weather-box">
            <div class="card-weather-img">
                <div class="img">
                    <svg v-if="weatherData.type == '晴'" class="icon" aria-hidden="true">
                        <use xlink:href="#el-icon-ziyuan15"></use>
                    </svg>
                    <svg v-else-if="weatherData.type == '多云转晴' || this.weatherData.type == '晴转多云'" class="icon" aria-hidden="true">
                        <use xlink:href="el-icon-ziyuan14"></use>
                    </svg>
                    <svg v-else-if="weatherData.type == '雨'" class="icon" aria-hidden="true">
                        <use xlink:href="#el-icon-ziyuan13"></use>
                    </svg>
                    <svg v-else-if="weatherData.type == '雪'" class="icon" aria-hidden="true">
                        <use xlink:href="#el-icon-ziyuan4"></use>
                    </svg>
                    <svg v-else-if="weatherData.type == '雷'" class="icon" aria-hidden="true">
                        <use xlink:href="#el-icon-ziyuan5"></use>
                    </svg>
                    <svg v-else class="icon" aria-hidden="true">
                        <use xlink:href="#el-icon-ziyuan16"></use>
                    </svg>
                </div>
                <div class="text">
                    <div class="val">{{weatherData.wendu}}℃</div>
                    <div class="range">{{weatherData.low}}℃~{{weatherData.high}}℃</div>
                </div>
            </div>
            <div class="card-weather-info">
                <div class="info-item">

                    <span class="name">风向</span>
                    <span class="val">{{weatherData.fengxiang}}</span>
                </div>
                <div class="info-item">
                    <span class="name">风力</span>
                    <span class="val">{{weatherData.fengli}}</span>
                </div>
                <div class="info-item">
                    <span class="name">空气等级</span>
                    <span class="val">{{weatherData.aqi}}</span>
                    <span :class="{'status':true,'status-red':weatherData.redColor}">{{weatherData.level}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getWeatherApi } from '@/views/api/dustHome.js';
    export default {
        data() {
            return {
                today:this.moment(new Date()).format('YYYY-MM-DD'),
                //天气数据
                weatherData:{
                    icon:'el-icon-ziyuan16'
                },
            };
        },
        created(){
            //获取天气
            getWeatherApi({city:'南通'}).then((data)=>{
                let d = JSON.parse(data).data;
                // console.log(d);
                this.weatherData.aqi = d.aqi;
                this.weatherData.wendu = d.wendu;
                this.weatherData.fengxiang = d.forecast[0].fengxiang;
                this.weatherData.type = d.forecast[0].type;
                let fengli = d.forecast[0].fengli;
                let reg1 = /<!\[CDATA\[(.*)\]\]>/;
                let fl = fengli.match(reg1);
                if(fl && fl[1]){
                    this.weatherData.fengli = fl[1];
                }
                let high = d.forecast[0].high;
                let low = d.forecast[0].low;
                let h = high.match(/[^\d]*(\d+)[^\d]*/);
                let l = low.match(/[^\d]*(\d+)[^\d]*/);
                if(h && h[1]){
                    this.weatherData.high = h[1];
                }
                if(l && l[1]){
                    this.weatherData.low = l[1];
                }
                if(this.weatherData.aqi<=50){
                    this.weatherData.level = "优";
                }else if(this.weatherData.aqi<=100){
                    this.weatherData.level = "良好";
                }else if(this.weatherData.aqi<=200){
                    this.weatherData.level = "轻度污染";
                    this.weatherData.redColor = true;
                }else if(this.weatherData.aqi<=300){
                    this.weatherData.level = "中度污染";
                    this.weatherData.redColor = true;
                }else if(this.weatherData.aqi>300){
                    this.weatherData.level = "重度污染";
                    this.weatherData.redColor = true;
                }
                // console.log(this.weatherData.type,10000);
                this.$forceUpdate();
            });
        }

    };
</script>

<style lang="scss" scoped>
        .card-panel-aa {
            height: 180px;
            font-size: 12px;
            position: relative;
            overflow: hidden;
            color: #666;
            background: #fff;
            box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
            border-color: rgba(0, 0, 0, 0.05);

            &::before {
                content: ' ';
                display: inline-block;
                width: 100%;
                height: 4px;
                position: absolute;
                left: 0;
                top: 0;
            }
        }

    //天气
    .card-weather-panel {
        &::before {
            background-color: #ffba00;
        }

        .card-weather-title {
            display: flex;
            justify-content: space-between;
            font-size: 20px;
            padding: 14px 30px 10px;
            border-bottom: 1px solid #e5ebec;

            .name {
                color: #000;
                font-weight: bold;
            }

            .val {
                color: #ffba00;
            }
        }

        .card-weather-box {
            display: flex;
            height: 132px;
            align-items: center;
            justify-content: space-around;

            .card-weather-img {
                display: flex;

                .img {
                    width: 80px;
                    height: 80px;
                    font-size: 68px;
                    margin-right: 10px;
                }

                .text {
                    align-self: center;

                    .val {
                        font-size: 30px;
                        color: #000;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }

                    .range {
                        font-size: 16px;
                        color: #999;
                    }
                }
            }

            .card-weather-info {
                .info-item {
                    width: 158px;
                    margin: 10px 0;
                    font-size: 14px;

                    .name {
                        color: #999;
                    }

                    .val {
                        color: #000;
                        margin-left: 5px;
                    }

                    .status {
                        margin-left: 5px;
                        display: inline-block;
                        padding: 2px 5px 0;
                        background-color: #00b034;
                        border-radius: 2px;
                        font-size: 12px;
                        color: #fff;
                    }
                    .status-red {
                        background-color: red;
                    }
                }
            }
        }
    }
</style>