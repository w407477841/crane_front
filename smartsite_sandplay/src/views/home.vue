<template>
  <div class="home">
    <div class="controller__protocol">
      <div class="controller__protocol-title">沙盘控制器</div>
      <div class="controller__protocol-line"></div>
      <div class="controller__protocol-option">
        <div class="controller__protocol-item" :class="{'controller__protocol-itemS': protocolList[0].selected}">
          <span>{{protocolList[0].name}}</span>
          <transition name="fade">
            <div v-if="notOn" :class="{'controller__loading-box':notOn,'controller__loading-boxS':!notOn}">
              <span class="controller__connecting">连接中...</span>
              <vue-loading type="spin" color="#fff" :size="{ width: '20px', height: '20px' }"></vue-loading>
            </div>
          </transition>
        </div>
        <div class="controller__protocol-item" :class="{'controller__protocol-itemS': protocolList[1].selected}">{{protocolList[1].name + " " + comSelected}}</div>
        <!--div class="controller__protocol-item" :class="{'controller__protocol-itemS': protocolList[0].selected}" @mouseover="overProtocol(0)" @mouseout="backProtocol(0)" @click="changeProtocol(0)">{{protocolList[0].name}}</div>
            <div class="controller__protocol-item" :class="{'controller__protocol-itemS': protocolList[1].selected}" @mouseover="overProtocol(1)" @mouseout="backProtocol(1)" @click="changeProtocol(1)">{{protocolList[1].name + " " + comSelected}}</div-->
        <div v-show="protocolList[1].selected" class="controller__com">
          <div class="controller__com-item" :class="{'controller__com-itemS':comIndex == index}" v-for="(item,index) in comList" :key="index" @click="changeCom(index)" @mouseover="overCom(index)" @mouseout="backCom">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="controller__main" id="controllerMain">
      <div class="controller__global">
        <div v-show="isControllerGlobal" class="controller__global-mian" @click="openAll()"></div>
      </div>
      <div class="controller__local">
        <div class="controller__local-box swiper-container">
          <div class="swiper-wrapper" id="swiperWrapper">
            <div class="controller__local-item swiper-slide" :class="{'controller__local-itemS':item.selected}" style="transform: translateX(1000px);" v-for="(item,index) in controllerItemList" :key="index" @mouseover="overLocal(index)" @mouseout="backLocal(index)">
              <div class="controller__local-img" @click="changeLocal(index)">
                <div v-if="item.selected" :style="{backgroundImage:'url(' + require('../assets/images/controllerItem_'+ index +'.png') + ')'}"></div>
                <div v-else :style="{backgroundImage:'url(' + require('../assets/images/controllerItem_gray_'+ index +'.png') + ')'}"></div>
              </div>
              <p>{{item.name}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="controller__switch">
      <div class="controller__switch-item" :class="{'controller__switch-itemS' : switchIndex == 0}" @click="controllerSwitch(0)">全景视图</div>
      <div class="controller__switch-item" :class="{'controller__switch-itemS' : switchIndex == 1}" @click="controllerSwitch(1)">局部视图</div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';
import { base } from '@/axios/base.js';
import { VueLoading } from 'vue-loading-template';
// import {} from "@/api/home";
import {
  getComTrans,
  chooseCom,
  lift1,
  lift2,
  lift3,
  crane,
  lamp,
  weight,
  spray,
  allOpen,
  getStatus
} from '@/api/home';
var isAllOpenAble = true;
export default {
  name: 'home',
  data() {
    return {
      protocolIndex: '', //连接方式下标
      protocolOld: '', //保留老的连接方式的下标
      switchIndex: 0, //右侧切换按钮下标
      localIndex: '', //设备按钮下标
      localOld: '', //保留老的设备按钮下标
      comIndex: '', //com下标
      comOld: '', //保留老的com
      comSelected: '',
      protocolList: [
        {
          selected: true,
          name: 'Tcp'
        },
        {
          selected: false,
          name: '串口'
        }
      ],
      controllerItemList: [
        {
          selected: false,
          name: '升降机'
        },
        {
          selected: false,
          name: '塔吊机'
        },
        // {
        //   selected: false,
        //   name: "闸机"
        // },
        {
          selected: false,
          name: '太阳能路灯'
        },
        {
          selected: false,
          name: '智能地磅'
        },
        {
          selected: false,
          name: '喷淋系统'
        },
        {
          selected: false,
          name: '升降机轿箱'
        }
      ],
      comList: [],
      mySwiper: null,
      isControllerGlobal: true,
      isControllerLocal: false,
      notOn: false,
      slidesPerView: 5
    };
  },
  computed: {
    params() {
      let param = {};
      return param;
    }
  },
  methods: {
    getMedia(widths) {
      return window.matchMedia(widths).matches;
    },
    openAll() {
      if (this.notOn) return;
      if (isAllOpenAble) {
        isAllOpenAble = false;

        let para = {
          sendType: 0
        };
        if (this.protocolList[0].selected) {
          para.sendType = 0;
        } else {
          para.sendType = 1;
        }

        allOpen(para).then(res => {
          console.log('成功了');
          console.log(res);
          isAllOpenAble = true;
        });
      }
    },
    //右侧按钮切换事件
    controllerSwitch(index) {
      let that = this;
      if (this.switchIndex !== index) {
        this.switchIndex = index;
        if (index == 0) {
          this.isControllerGlobal = true;
          this.mySwiper.slideTo(0);
          let controllerMain = anime({
            targets: '#controllerMain',
            translateX: 0,
            duration: 3000,
            easing: 'easeOutExpo'
          });
          let controllerLocal = anime({
            targets: '#swiperWrapper .swiper-slide',
            translateX: 1000,
            easing: 'easeOutExpo',
            delay: function(el, i, l) {
              return i * 100;
            }
          });
          this.localOld = '';
          this.localIndex = '';
          this.isControllerLocal = false;
        } else if (index == 1) {
          this.isControllerLocal = true;
          this.$nextTick(function() {
            that.mySwiper = new Swiper('.swiper-container', {
              slidesPerView: that.slidesPerView,
              initialSlide: 0
            });
            let controllerMain = anime({
              targets: '#controllerMain',
              translateX: '-' + document.documentElement.clientWidth,
              duration: 3000,
              easing: 'easeOutExpo'
            });
            setTimeout(function() {
              let controllerLocal = anime({
                targets: '#swiperWrapper .swiper-slide',
                translateX: 0,
                easing: 'easeOutExpo',
                delay: function(el, i, l) {
                  return i * 100;
                }
              });
              that.isControllerGlobal = false;
            }, 100);
          });
        }
      }
    },
    //鼠标划过连接方式按钮事件
    overProtocol(index) {
      let that = this;
      if (this.protocolIndex !== index) {
        this.protocolList[index].selected = true;
        if (index === 1) {
          let cssProperties = anime({
            targets: '.controller__com',
            height: ['0px', 40 * that.comList.length + 'px'],
            easing: 'easeInOutQuad',
            duration: 200
          });
          this.protocolList[0].selected = false;
        } else if (index === 0) {
          document.getElementsByClassName('controller__com')[0].height = '0px';
          this.protocolList[1].selected = false;
        }
      }
    },
    //鼠标离开连接方式按钮事件
    backProtocol(index) {
      if (this.protocolOld !== index) {
        this.protocolList[index].selected = false;
      }
    },
    //改变串口
    changeProtocol(index) {
      if (this.protocolOld !== index) {
        if (this.protocolOld !== '') {
          this.protocolList[this.protocolOld].selected = false;
        }
        this.protocolList[index].selected = true;
        this.protocolOld = index;
        if (index === 0) {
          this.comSelected = '';
        }
      }
    },
    //鼠标移入切换设备按钮
    overLocal(index) {
      if (this.localIndex !== index) {
        this.controllerItemList[index].selected = true;
      }
    },
    //鼠标移除切换设备按钮
    backLocal(index) {
      if (this.localOld !== index) {
        this.controllerItemList[index].selected = false;
      }
    },
    //单类型设备选择
    changeLocal(index) {
      if (this.notOn) return;
      if (this.localOld !== index) {
        if (this.localOld !== '') {
          this.controllerItemList[this.localOld].selected = false;
        }
        this.controllerItemList[index].selected = true;
        this.localOld = index;
      }

      let para = {
        sendType: 0
      };
      if (this.protocolList[0].selected) {
        para.sendType = 0;
      } else {
        para.sendType = 1;
      }
      console.log(this.localOld);
      if (this.localOld == '0') {
        lift2(para).then(res => {
          console.log('成功了');
          console.log(res);
        });

        setTimeout(() => {
          lift3(para).then(res => {
            console.log('成功了');
            console.log(res);
          });
        }, 500);
      } else if (this.localOld == '1') {
        crane(para).then(res => {
          console.log('成功了');
          console.log(res);
        });
      } else if (this.localOld == '2') {
        lamp(para).then(res => {
          console.log('成功了');
          console.log(res);
        });
      } else if (this.localOld == '3') {
        weight(para).then(res => {
          console.log('成功了');
          console.log(res);
        });
      } else if (this.localOld == '4') {
        spray(para).then(res => {
          console.log('成功了');
          console.log(res);
        });
      } else if (this.localOld == '5') {
        lift1(para).then(res => {
          console.log('成功了');
          console.log(res);
        });
      }
      // else if (this.localOld == "6") {

      // }
    },
    //鼠标移入Com
    overCom(index) {
      this.protocolList[1].selected = true;
      if (this.comIndex !== index) {
        this.comIndex = index;
        this.protocolList[1].selected = true;
      }
    },
    backCom() {
      if (this.protocolOld !== 0) {
        this.protocolList[this.protocolOld].selected = true;
      }
      this.comIndex = this.comBack;
    },
    changeCom(index) {
      let that = this;
      if (this.comBack !== index) {
        this.comBack = index;
        this.protocolList[0].selected = false;
        this.protocolList[1].selected = true;
        this.protocolOld = 1;
        let cssPropertiesBack = anime({
          targets: '.controller__com',
          height: [40 * that.comList.length + 'px', '0px'],
          easing: 'easeInOutQuad',
          duration: 500
        });
        console.log('改变串口233:' + index);
        this.comSelected = this.comList[index].name;
        console.log('改变串口');
        console.log('改变串口' + index);
        chooseCom({
          comStr: this.comList[index].name,
          bpsStr: '9600'
        }).then(res => {
          console.log('成功了');
          console.log(res);
        });
      } else if (this.comBack === index) {
        let cssPropertiesBack = anime({
          targets: '.controller__com',
          height: [40 * that.comList.length + 'px', '0px'],
          easing: 'easeInOutQuad',
          duration: 500
        });
      }
    },
    getStatusAll() {
      getStatus().then(res => {
        console.log(res);
        // isAllOpenAble = true;
        if (res == 'no') {
          this.notOn = true;
        } else if (res == 'ok') {
          this.notOn = false;
        }
      });
    }
  },
  mounted() {
    if (this.getMedia('(max-width:500px)')) {
      this.slidesPerView = 1;
      if (document.documentElement.clientHeight < 600) {
        document.querySelector('.controller__local').style =
          'align-items: flex-end;position: relative;top: -60px;';
      }
    } else if (this.getMedia('(min-width:500px) and (max-width:1000px)')) {
      this.slidesPerView = 3;
    } else if (this.getMedia('(min-width:1000px)')) {
      this.slidesPerView = 5;
    }
    console.log(this.slidesPerView);
    let width = document.documentElement.clientWidth;
    document.getElementsByClassName('controller__main')[0].style.width =
      width * 2 + 'px';
    document.getElementsByClassName('controller__global')[0].style.width =
      width + 'px';
    document.getElementsByClassName('controller__local')[0].style.width =
      width + 'px';
    document.getElementsByClassName('controller__global-mian')[0].style.height =
      ((width * 0.6) / 1000) * 680 + 'px';
    window.onresize = function() {
      width = document.documentElement.clientWidth;
      document.getElementsByClassName('controller__main')[0].style.width =
        width * 2 + 'px';
      document.getElementsByClassName('controller__global')[0].style.width =
        width + 'px';
      document.getElementsByClassName('controller__local')[0].style.width =
        width + 'px';
    };
    this.mySwiper = new Swiper('.swiper-container', {
      slidesPerView: this.slidesPerView,
      initialSlide: 0
    });
    getComTrans({}).then(res => {
      console.log('成功了');
      console.log(res.data);
      this.comList = res.data;
      console.log(this.comList);
    });
    let timer;
    let that = this;
    async function start() {
      that.getStatusAll();
      timer = setTimeout(start, 3000);
    }
    start();
  },
  components: {
    VueLoading
  }
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/bg.png');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  .controller__protocol {
    width: 320px;
    text-align: left;
    position: absolute;
    top: 8%;
    left: 6%;
    z-index: 99;
    .controller__protocol-title {
      font-size: 32px;
      font-weight: bold;
      font-style: italic;
      color: #bbc5d5;
      margin-bottom: 16px;
    }
    .controller__protocol-line {
      width: 100%;
      height: 3px;
      background-image: url('../assets/images/line.png');
      margin-bottom: 16px;
    }
    .controller__protocol-option {
      .controller__protocol-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        font-style: italic;
        font-weight: bold;
        color: #bbc5d5;
        padding-left: 18px;
        cursor: pointer;
        opacity: 0.3;
        .controller__loading-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 80px;
          .controller__connecting {
            font-size: 14px;
          }
          .vue-loading {
            line-height: 20px;
          }
        }
        .controller__loading-boxS {
          width: 0;
        }
        .fade-enter-active,
        .fade-leave-active {
          transition: opacity 0.4s;
        }
        .fade-enter,
        .fade-leave {
          opacity: 0;
        }
      }
      .controller__protocol-itemS {
        background-image: url('../assets/images/tab.png');
        opacity: 1;
      }
      .controller__com {
        width: 100%;
        padding-left: 30px;
        overflow: hidden;
        .controller__com-item {
          height: 40px;
          line-height: 40px;
          font-size: 16px;
          font-style: italic;
          font-weight: bold;
          cursor: pointer;
          opacity: 0.3;
          color: #bbc5d5;
          padding-left: 10px;
        }
        .controller__com-itemS {
          height: 40px;
          line-height: 40px;
          font-size: 16px;
          font-style: italic;
          font-weight: bold;
          cursor: pointer;
          color: #bbc5d5;
          opacity: 1;
          background-image: url('../assets/images/tab.png');
          padding-left: 10px;
        }
      }
    }
  }
  .controller__switch {
    display: flex;
    justify-content: space-between;
    width: 144px;
    position: absolute;
    top: 20%;
    right: 6%;
    z-index: 99;
    .controller__switch-item {
      font-size: 16px;
      font-weight: bold;
      font-style: italic;
      color: rgba(187, 197, 213, 0.3);
      cursor: pointer;
    }
    .controller__switch-itemS {
      color: #bbc5d5;
      opacity: 1;
    }
  }
  .controller__main {
    display: flex;
    height: 680px;
    position: absolute;
    z-index: 0;
    .controller__global {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      .controller__global-mian {
        width: 60%;
        background-image: url('../assets/images/shapan.png');
        background-size: cover;
        cursor: pointer;
      }
    }
    .controller__local {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      .controller__local-box {
        display: flex;
        width: 70%;
        height: 60%;
        .swiper-wrapper {
          display: flex;
          align-items: center;
          .controller__local-item {
            display: flex;
            width: 100%;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            // filter: Gray;
            // -webkit-filter: grayscale(1);
            cursor: pointer;
            transform: translateX(1000px);
            .controller__local-img {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 90%;
              border-radius: 10px;
              div {
                width: 85%;
                height: 80%;
                border-radius: 10px;
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
              }
            }
            p {
              font-size: 24px;
              font-weight: bold;
              font-style: italic;
              color: rgba(214, 251, 254, 0.3);
            }
          }
          .controller__local-itemS {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100%;
            // -webkit-filter: grayscale(1);
            cursor: pointer;
            // filter: none;
            -webkit-filter: grayscale(0);
            .controller__local-img {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 90%;
              border-radius: 10px;
              div {
                width: 90%;
                height: 85%;
                border-radius: 10px;
              }
            }
            p {
              font-size: 28px;
              font-weight: bold;
              font-style: italic;
              color: #d6fbfe;
            }
          }
        }
      }
    }
  }
}
</style>