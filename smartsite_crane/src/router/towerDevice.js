import Layout from "@/views/layout";
export default [
  {
    path: "/tower",
    component: Layout,
    alwaysShow: false,
    name: "tower",
    permission: "crane:home:menu",
    meta: {
      title: "首页",
      icon: "el-icon-shouye"
    },
    children: [
      {
        path: "/tower/towerhome",
        component: () => import("@/views/crane/master/home/index.vue"),
        name: "towerhome",
        permission: "crane:home:menu",
        alwaysShow: true,
        meta: {
          title: "首页",
          noCache: true
        }
      },
      // {
      //   path: "/tower/towerhome",
      //   component: () => import("@/views/information/master/home/index_td.vue"),
      //   name: "towerhome",
      //   permission: "crane:home:menu",
      //   alwaysShow: true,
      //   meta: {
      //     title: "塔吊首页",
      //     noCache: true
      //   }
      // }
    ]
  },
  {
    path: "/mapMain",
    component: Layout,
    alwaysShow: true,
    permission: "crane:map:menu",
    meta: {
      title: "地图管理",
      icon: "el-icon-ditu"
    },
    children: [
      {
        path: "/craneMap",
        name: "craneMap",
        permission: "crane:map:crane:menu",
        meta: {
          title: "塔吊电子地图"
        },
        component: () => import("@/views/information/master/craneMap/index.vue")
      }
    ]
  },
  {
    path: "/monitorMain",
    component: Layout,
    permission: "crane:real:menu",
    alwaysShow: true,
    meta: {
      title: "实时监控",
      icon: "el-icon-jiankong"
    },
    children: [
      {
        path: "/realTimeMonitoring",
        name: "realTimeMonitoring",
        permission: "crane:real:tower:menu",
        meta: {
          title: "实时监控(塔吊)"
        },
        component: () =>
          import(
            "@/views/information/master/realTimeMonitoring(towerCrane)/realTimeMonitoring(towerCrane).vue"
          )
      },
      {
        path: "/craneStatus/:deviceNo",
        name: "craneStatus",
        meta: {
          title: route => `监控状态-${route.params.deviceNo}`
        },
        hidden: true,
        component: () =>
          import(
            "@/views/information/master/realTimeMonitoring(towerCrane)/monitorStatus.vue"
          )
      },
      {
        path: "/craneData/:deviceNo",
        name: "craneData",
        meta: {
          title: route => `运行数据-${route.params.deviceNo}`
        },
        hidden: true,
        component: () =>
          import(
            "@/views/information/master/realTimeMonitoring(towerCrane)/runData.vue"
          )
      },
      {
        path: "/realTimeMonitoring/operationChart",
        name: "operationChart",
        meta: {
          title: "运行数据",
          parentPath: "/realTimeMonitoring",
          tagHidden: true
        },
        hidden: true,
        component: () =>
          import(
            "@/views/information/master/realTimeMonitoring(towerCrane)/operationChart.vue"
          )
      },
      {
        path: "/craneRunTime/:deviceNo",
        name: "craneRunTime",
        meta: {
          title: route => `运行时间-${route.params.deviceNo}`
        },
        hidden: true,
        component: () =>
          import(
            "@/views/information/master/realTimeMonitoring(towerCrane)/runTime.vue"
          )
      },
      {
        path: "/craneWeight/:deviceNo",
        name: "craneWeight",
        meta: {
          title: route => `吊重数据-${route.params.deviceNo}`
        },
        hidden: true,
        component: () =>
          import(
            "@/views/information/master/realTimeMonitoring(towerCrane)/hoistingData.vue"
          )
      }
    ]
  },
  {
    path: "/deviceMain",
    component: Layout,
    alwaysShow: true,
    permission: "crane:device:menu",
    meta: {
      title: "设备管理",
      icon: "el-icon-shebei"
    },
    children: [
      {
        path: "/crane",
        name: "crane",
        permission: "crane:device:crane:menu",
        meta: {
          title: "塔吊"
        },
        component: () => import("@/views/device/master/crane/index.vue")
      },
      {
        path: "/crane/video",
        name: "video",
        permission: "dust:monitor:device:menu",
        meta: {
          title: "视频监控预览"
        },
        hidden: true,
        component: () => import("@/views/device/master/crane/video.vue")
      },
      {
        path: "/recharge",
        name: "recharge",
        permission: "recharge:menu",
        meta: {
          title: "充值"
        },
        component: () => import("@/views/crane/master/recharge/index.vue")
      }
    ]
  },
  {
    path: "/infoMain",
    component: Layout,
    permission: "crane:infoMain:menu",
    alwaysShow: true,
    //permission: 'crane:infoMain:menu',
    meta: {
      title: "信息管理",
      icon: "el-icon-xinxi"
    },
    children: [
      {
        path: "/craneDataModel",
        name: "craneDataModel",
        permission: "crane:infoMain:craneDataModel:menu",
        meta: {
          title: "塔吊数据模板"
        },
        component: () =>
          import("@/views/information/master/craneDataModel/index.vue")
      },
      {
        path: "/craneDataModel/craneDataModelDetail",
        name: "craneDataModelDetail",
        meta: {
          title: "塔吊数据模板详情",
          tagHidden: true
        },
        hidden: true,
        component: () =>
          import("@/views/information/master/craneDataModel/details.vue")
      },
      {
        path: "/targetSetCrane",
        name: "targetSetCrane",
        permission: "crane:infoMain:targetSetCrane:menu",
        meta: {
          title: "塔吊指标设置"
        },
        component: () =>
          import("@/views/information/master/targetSetCrane/index.vue")
      }
    ]
  },
  {
    path: "/report",
    component: Layout,
    alwaysShow: true,
    permission: "statisticsreport:menu",
    meta: {
      title: "报表统计",
      icon: "el-icon-baobiao-copy-copy"
    },
    children: [
      {
        path: "/craneOnline",
        name: "craneOnline",
        permission: "deviceonline:menu",
        meta: {
          title: "设备在线统计"
        },
        component: () => import("@/views/crane/master/online/index.vue")
      },
      {
        path: "/craneOffline",
        name: "craneOffline",
        permission: "deviceoffline:device",
        meta: {
          title: "设备离线统计"
        },
        component: () => import("@/views/crane/master/offline/index.vue")
      },
      {
        path: "/craneAccount",
        name: "craneAccountList",
        permission: "deviceparameter:menu",
        meta: {
          title: "设备台帐"
        },
        component: () => import("@/views/crane/master/account/index.vue")
      },
      {
        path: "/craneWorking",
        name: "craneWorking",
        permission: "devicework:menu",
        meta: {
          title: "设备工作(分时段)统计"
        },
        component: () => import("@/views/crane/master/working/index.vue")
      },
      {
        path: "/craneWorkDay/:id",
        name: "craneWorkDay",
        meta: {
          title: route =>
            `${route.query.type == 2 ? "分时统计" : "全天统计"}-${
              route.query.name
            }`
        },
        hidden: true,
        component: () => import("@/views/crane/master/working/craneWorkDay.vue")
      },
      {
        path: "/craneReport",
        name: "craneReport",
        permission: "deviceflow:menu",
        meta: {
          title: "设备流量统计"
        },
        component: () => import("@/views/crane/master/flow/index.vue")
      },
      {
        path: "/craneTime",
        name: "craneTime",
        permission: "devicecycleworkingtime:menu",
        meta: {
          title: "设备循环工作时长"
        },
        component: () => import("@/views/crane/master/workTime/index.vue")
      },
      {
        path: "/craneTorque/:deviceNo",
        name: "craneTorque",
        hidden: true,
        meta: {
          title: route => `力矩百分比分析-${route.params.deviceNo}`
        },
        component: () => import("@/views/crane/master/workTime/torque.vue")
      },
      {
        path: "/craneFilter/:deviceNo",
        name: "craneFilter",
        hidden: true,
        meta: {
          title: route => `力矩百分比过滤-${route.params.deviceNo}`
        },
        component: () => import("@/views/crane/master/workTime/filter.vue")
      },
      {
        path: "/craneTimeWeight/:deviceNo",
        name: "craneTimeWeight",
        hidden: true,
        meta: {
          title: route => `吊重次数-${route.params.deviceNo}`
        },
        component: () => import("@/views/crane/master/workTime/weight.vue")
      },
      {
        path: "/craneEarly",
        name: "craneEarlyList",
        permission: "warninformation:menu",
        meta: {
          title: "预警信息一览"
        },
        component: () => import("@/views/crane/master/earlyAlarm/index.vue")
      },
      {
        path: "/craneEarly/:deviceNo",
        name: "craneEarly",
        hidden: true,
        meta: {
          title: route => `预警信息-${route.params.deviceNo}`
        },
        component: () => import("@/views/crane/master/earlyAlarm/index.vue")
      },
      {
        path: "/craneCall",
        name: "craneCallList",
        permission: "alarminformation:menu",
        meta: {
          title: "报警信息一览"
        },
        component: () => import("@/views/crane/master/callAlarm/index.vue")
      },
      {
        path: "/craneCall/:deviceNo",
        name: "craneCall",
        meta: {
          title: route => `报警信息-${route.params.deviceNo}`
        },
        hidden: true,
        component: () => import("@/views/crane/master/callAlarm/index.vue")
      },
      {
        path: "/craneViolation",
        name: "craneViolationList",
        permission: "illegalinformation:menu",
        meta: {
          title: "违章信息一览"
        },
        component: () => import("@/views/crane/master/violation/index.vue")
      },
      {
        path: "/craneViolation/:deviceNo",
        name: "craneViolation",
        meta: {
          title: route => `违章信息-${route.params.deviceNo}`
        },
        hidden: true,
        component: () => import("@/views/crane/master/violation/index.vue")
      },
      {
        path: "/workLevel",
        name: "workLevel",
        permission: "worklevel:menu",
        meta: {
          title: "工作等级统计"
        },
        component: () => import("@/views/crane/master/workLevel/index.vue")
      },
      {
        path: "/craneProcess/:deviceNo",
        name: "craneProcess",
        hidden: true,
        meta: {
          title: route => `处理单-${route.params.deviceNo}`
        },
        component: () => import("@/views/crane/master/process/index.vue")
      }
    ]
  }
];
