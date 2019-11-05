<template>
  <div class="home">
    <div class="home__title">
      <h1>某某楼层基站数据监测</h1>
      <div class="home__title-line"></div>
    </div>
    <div class="home__main">
      <div class="home__main-left">
        <div class="home__mian-buildingGroup">
          <div class="home__main-building">
            <span>1号楼</span>
            <img src="../assets/images/building-small.png">
          </div>
        </div>
        <img class="home__main-bigBuilding" src="../assets/images/building-big.png">
      </div>
      <div class="home__main-right">
        <div class="home__main-title">
          <span>1号楼数据统计</span>
          <button class="home__main-button">查看楼层详情</button>
        </div>
        <div class="home__main-account">
          <div class="home__main-accountItem">
            <h1>45</h1>
            <div>
              <img src="../assets/images/floor.png">
              <span>楼层</span>
            </div>
          </div>
          <div class="home__main-accountItem">
            <h1>13</h1>
            <div>
              <img src="../assets/images/baseStation.png">
              <span>基站个数</span>
            </div>
          </div>
          <div class="home__main-accountItem">
            <h1>240</h1>
            <div>
              <img src="../assets/images/person.png">
              <span>基站实时人数</span>
            </div>
          </div>
        </div>
        <div class="home__main-table">
          <table class="home__main-tableMian">
            <tr class="home__main-thr">
              <th>姓名</th>
              <th>身份证</th>
              <th>时间</th>
              <th>标签号</th>
            </tr>
            <div class="home__main-tdrBox">
              <tr class="home__main-tdr">
                <td>徐伟</td>
                <td>320682199202020679</td>
                <td>2019.03.08</td>
                <td>794564658</td>
              </tr>
              <tr class="home__main-tdr">
                <td>徐伟</td>
                <td>320682199202020679</td>
                <td>2019.03.08</td>
                <td>794564658</td>
              </tr>
              <tr class="home__main-tdr">
                <td>徐伟</td>
                <td>320682199202020679</td>
                <td>2019.03.08</td>
                <td>794564658</td>
              </tr>
              <tr class="home__main-tdr">
                <td>徐伟</td>
                <td>320682199202020679</td>
                <td>2019.03.08</td>
                <td>794564658</td>
              </tr>
              <tr class="home__main-tdr">
                <td>徐伟</td>
                <td>320682199202020679</td>
                <td>2019.03.08</td>
                <td>794564658</td>
              </tr>
              <tr class="home__main-tdr">
                <td>徐伟</td>
                <td>320682199202020679</td>
                <td>2019.03.08</td>
                <td>794564658</td>
              </tr>
              <tr class="home__main-tdr">
                <td>徐伟</td>
                <td>320682199202020679</td>
                <td>2019.03.08</td>
                <td>794564658</td>
              </tr>
              <tr class="home__main-tdr">
                <td>徐伟</td>
                <td>320682199202020679</td>
                <td>2019.03.08</td>
                <td>794564658</td>
              </tr>
              <tr class="home__main-tdr">
                <td>徐伟</td>
                <td>320682199202020679</td>
                <td>2019.03.08</td>
                <td>794564658</td>
              </tr>
              <tr class="home__main-tdr">
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
  </div>
</template>

<script>
import anime from "animejs";
import { base } from "@/axios/base.js";
import { VueLoading } from "vue-loading-template";
// import {} from "@/api/home";
export default {
  name: "home",
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
.home {
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
    width: 76vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    &-left {
      width: 13vw;
      height: 50vw;
      background-color: rgba(255, 255, 255, 0.06);
      border-radius: 1vh;
      position: relative;
    }
    &-buildingGroup {
      position: absolute;
    }
    &-bigBuilding {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
    }
    &-building {
      width: 14vw;
      height: 2vw;
      background-image: linear-gradient(270deg, #41ffd2 0%, #0088e3 100%);
      border-radius: 0vw 1vw 1vw 0vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      img {
        align-self: flex-end;
      }
      span {
        padding-left: 10px;
        color: #cfe2ef;
      }
    }
    &-title {
      width: 62vw;
      height: 4vw;
      background-color: rgba(255, 255, 255, 0.06);
      border-radius: 1vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        padding-left: 20px;
        font-size: 1vw;
        color: #cfe2ef;
      }
      button {
        width: 8vw;
        height: 3vw;
        background-color: #0a7cff;
        border-radius: 1vw;
        color: #cfe2ef;
        border: none;
        margin-right: 10px;
      }
    }
    &-account {
      width: 62vw;
      height: 12vw;
      background-color: rgba(255, 255, 255, 0.06);
      border-radius: 1vw;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 1vw;
    }
    &-accountItem {
      display: flex;
      flex-direction: column;
      h1 {
        font-size: 4vw;
        color: #cfe2ef;
      }
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
        }
        span {
          font-size: 1vw;
          color: #cfe2ef;
        }
      }
    }
    &-table {
      width: 62vw;
      height: 32vw;
      background-color: rgba(255, 255, 255, 0.06);
      border-radius: 1vw;
      margin-top: 1vw;
    }
    &-tableMian {
      width: 100%;
      height: 28vw;
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
      height: 28vw;
      overflow-y: scroll;
    }
  }
}
</style>