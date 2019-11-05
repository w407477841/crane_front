<template>
  <div class="base">
    <div class="base__title">
      <h1>某某楼层基站数据监测</h1>
      <div class="base__title-line"></div>
    </div>
    <div class="base__main">
      <div class="base__main-left">
        <div class="base__main-building">
          <div class="base__main-floorBox">
            <div class="base__main-floorBlockS"></div>
            <div class="base__main-floorBlock"></div>
            <div class="base__main-floorBlock"></div>
            <div class="base__main-floorBlock"></div>
          </div>
        </div>
        <div class="base__main-floors">
          <div class="base__main-floorsbox">
            <p class="base__main-floorItemS">28F</p>
            <p class="base__main-floorItem">27F</p>
            <p class="base__main-floorItem">26F</p>
            <p class="base__main-floorItem">25F</p>
            <p class="base__main-floorItem">24F</p>
            <p class="base__main-floorItem">23F</p>
            <p class="base__main-floorItem">22F</p>
            <p class="base__main-floorItem">21F</p>
          </div>
        </div>
      </div>
      <div class="base__main-middle">
        <div class="base__middle-top">
          <div class="base__middle-buildNum">
            <h1>17F</h1>
          </div>
          <div class="base__middle-buildMap"></div>
        </div>
        <div class="base__middle-bottom">
          <div class="base__middle-table">
            <table class="base__middle-tableMian">
              <tr class="base__middle-thr">
                <th>姓名</th>
                <th>身份证</th>
                <th>时间</th>
                <th>标签号</th>
              </tr>
              <div class="base__middle-tdrBox">
                <tr class="base__middle-tdr">
                  <td>徐伟</td>
                  <td>320682199202020679</td>
                  <td>2019.03.08</td>
                  <td>794564658</td>
                </tr>
                <tr class="base__middle-tdr">
                  <td>徐伟</td>
                  <td>320682199202020679</td>
                  <td>2019.03.08</td>
                  <td>794564658</td>
                </tr>
                <tr class="base__middle-tdr">
                  <td>徐伟</td>
                  <td>320682199202020679</td>
                  <td>2019.03.08</td>
                  <td>794564658</td>
                </tr>
                <tr class="base__middle-tdr">
                  <td>徐伟</td>
                  <td>320682199202020679</td>
                  <td>2019.03.08</td>
                  <td>794564658</td>
                </tr>
                <tr class="base__middle-tdr">
                  <td>徐伟</td>
                  <td>320682199202020679</td>
                  <td>2019.03.08</td>
                  <td>794564658</td>
                </tr>
                <tr class="base__middle-tdr">
                  <td>徐伟</td>
                  <td>320682199202020679</td>
                  <td>2019.03.08</td>
                  <td>794564658</td>
                </tr>
                <tr class="base__middle-tdr">
                  <td>徐伟</td>
                  <td>320682199202020679</td>
                  <td>2019.03.08</td>
                  <td>794564658</td>
                </tr>
                <tr class="base__middle-tdr">
                  <td>徐伟</td>
                  <td>320682199202020679</td>
                  <td>2019.03.08</td>
                  <td>794564658</td>
                </tr>
                <tr class="base__middle-tdr">
                  <td>徐伟</td>
                  <td>320682199202020679</td>
                  <td>2019.03.08</td>
                  <td>794564658</td>
                </tr>
                <tr class="base__middle-tdr">
                  <td>徐伟</td>
                  <td>320682199202020679</td>
                  <td>2019.03.08</td>
                  <td>794564658</td>
                </tr>
              </div>
            </table>
          </div>
        </div>
      </div>
      <div class="base__main-right">
        <div class="base__right-item">
          <div class="base__right-title1">
            <img src="../assets/images/baseStation.png">
            <h1>8</h1>
          </div>
          <div class="base__right-data">
            <div class="base__right-label">基站编号：</div>
            <div class="base__right-main">
              <span>23434701</span>
              <span>23434701</span>
              <span>23434701</span>
              <span>23434701</span>
              <span>23434701</span>
              <span>23434701</span>
              <span>23434701</span>
              <span>23434701</span>
            </div>
          </div>
        </div>
        <div class="base__right-item">
          <div class="base__right-title2">
            <img src="../assets/images/person.png">
            <h1>8</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import { base } from "@/axios/base.js";
import { VueLoading } from "vue-loading-template";
export default {
  data() {
    return {};
  },
  computed: {
    params() {
      let param = {};
      return param;
    }
  },
  methods: {},
  components: {
    VueLoading
  }
};
</script>

<style lang="scss">
.base {
  width: 100%;
  height: 100%;
  background-image: url(../assets/images/background.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &__title {
    width: 100%;
    margin-bottom: 2vh;
    h1 {
      display: block;
      height: 4vh;
      line-height: 4vh;
      width: 46vw;
      font-size: 30px;
      color: #cfe2ef;
      border-bottom: solid 1px rgba(207, 226, 239, 0.2);
      margin: 0 auto 2vh;
      padding-top: 2vh;
    }
    &-line {
      width: 100%;
      height: 1px;
      background-image: linear-gradient(
        270deg,
        #000628 0%,
        #0567bc 51%,
        #0f0f35 99%,
        #0f0f35 100%
      );
    }
  }
  &__main {
    width: 98vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    &-left {
      width: 16vw;
      height: 100vh;
      display: flex;
    }
    &-building {
      width: 13vw;
      height: 100vh;
      background-color: rgba(255, 255, 255, 0.06);
      border-radius: 8vw 8vw 0vw 0vw;
      bottom: 0;
      left: 1vw;
      flex-shrink: 0;
      position: absolute;
    }
    &-floorBox {
      width: 11vw;
      margin: 13.2vh auto 0;
    }
    &-floorsbox {
      width: 4vw;
      height: 50vh;
      position: absolute;
      right: 0;
      top: 0;
      margin-top: 3vh;
    }
    &-floors {
      width: 3vw;
      height: 50vh;
      border-radius: 2vw;
      background-color: rgba(255, 255, 255, 0.1);
      position: absolute;
      left: 14vw;
    }
    &-floorBlock {
      width: 11vw;
      height: 16px;
      background-color: #253050;
      margin-bottom: 1vh;
    }
    &-floorBlockS {
      width: 11vw;
      height: 16px;
      background-image: linear-gradient(270deg, #41ffd2 0%, #0088e3 100%);
      margin-bottom: 1vh;
    }
    &-floorItem {
      width: 3vw;
      height: 16px;
      color: #cfe2ef;
      margin-bottom: 1vh;
      padding-left: 1vw;
    }
    &-floorItemS {
      width: 3vw;
      height: 16px;
      background-image: linear-gradient(315deg, #41ffd2 0%, #3e5eff 100%);
      margin-bottom: 1vh;
      border-radius: 2vw;
      padding-left: 1vw;
    }
    &-middle {
      width: 61vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
    &-right {
      width: 20vw;
    }
  }
  &__middle {
    &-top {
      width: 61vw;
      height: 50%;
      display: flex;
      margin-left: 3vw;
    }
    &-bottom {
      width: 61vw;
      height: 50%;
    }
    &-buildNum {
      width: 5vw;
      height: 5vw;
      line-height: 5vw;
      background-image: url("../assets/images/circle.png");
      background-repeat: no-repeat;
      background-size: cover;
      margin-right: 3vw;
      h1 {
        font-size: 2vw;
        color: #ffffff;
      }
    }
    &-buildMap {
      width: 50vh;
      height: 50vh;
      background-image: url("../assets/images/map.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
    &-table {
      background-color: rgba(255, 255, 255, 0.06);
      border-radius: 1vw;
      margin-top: 1vw;
    }
    &-tableMian {
      width: 100%;
      height: 100%;
      color: rgba(207, 226, 239, 0.8);
    }
    &-thr {
      padding-left: 3vw;
      padding-right: 3vw;
      height: 3vw;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom: 1px solid rgba(207, 226, 239, 0.2);
      th {
        width: 25%;
        text-align: left;
      }
    }
    &-tdr {
      height: 3vw;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom: 1px solid rgba(207, 226, 239, 0.2);
      padding-left: 2vw;
      padding-right: 2vw;
      td {
        width: 25%;
        text-align: left;
      }
    }
    &-tdrBox {
      margin-left: 1vw;
      margin-right: 1vw;
      height: 22vw;
      overflow-y: scroll;
    }
  }
  &__right {
    &-item {
      width: 17vw;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 1vw;
      display: flex;
      flex-direction: column;
      margin-bottom: 1vh;
      padding: 1.5vw;
    }
    &-title1 {
      display: flex;
      align-items: center;

      img {
        display: block;
        width: 2.5vw;
        height: 2.5vw;
        margin-right: 1vw;
      }
      h1 {
        font-size: 40px;
        color: #f6b70a;
      }
    }
    &-title2 {
      display: flex;
      align-items: center;

      img {
        display: block;
        width: 2.5vw;
        height: 2.5vw;
        margin-right: 1vw;
      }
      h1 {
        font-size: 40px;
        color: #41ffd2;
      }
    }
    &-data {
      display: flex;
    }
    &-label {
      width: 5vw;
      font-size: 1vw;
      color: rgba(207, 226, 239, 0.8);
    }
    &-main {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 10vw;
      span {
        font-size: 1vw;
        color: #cfe2ef;
      }
    }
  }
}
</style>