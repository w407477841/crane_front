<template>
  <div class="sidebar-container">
    <div class="sidebar-title">
      <div class="sidebar-logo"></div>
      <div class="sidebar-text"></div>
    </div>
    <div class="menu-container">
      <div class="device-menu">
        <el-scrollbar wrapClass="scrollbar-wrapper">
          <ul>
            <router-link
              v-for="(item,index) in routes"
              v-if="item.alwaysShow && checkPermssion(item.permission,permission)"
              :to="{name:item.name}"
              :key="item.name"
            >
              <li
                :class="['deviceItem',item.name==active?'active':'']"
                @click="routerClick(routes,index)"
              >
                <i :class="['icon',item.meta.icon]"></i>
                <div>{{item.meta.title}}</div>
              </li>
            </router-link>
            <!-- <li v-for="(item,index) in routes" v-if="item.alwaysShow && checkPermssion(item.permission,permission)" :key="item.name" :class="['deviceItem',item.navActive?'active':'']" @click="routerClick(routes,index)">
              <i :class="['icon',item.meta.icon]"></i>
              <div>{{item.meta.title}}</div>
            </li>-->
          </ul>
        </el-scrollbar>
      </div>
      <div class="route-menu">
        <div class="hamburger_box">
          <hamburger
            class="hamburger-container"
            :toggleClick="toggleSideBar"
            :isActive="sidebar.opened"
          ></hamburger>
        </div>
        <el-scrollbar wrapClass="scrollbar-wrapper">
          <el-menu
            mode="vertical"
            unique-opened
            :show-timeout="200"
            :default-active="$route.path"
            :collapse="isCollapse"
            background-color="#ffffff"
            text-color="#8d9498"
            active-text-color="#0078bc"
          >
            <sidebar-item
              v-for="route in childRoutes"
              :key="route.name"
              :item="route"
              :base-path="route.path"
            ></sidebar-item>
          </el-menu>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import Hamburger from "@/components/Hamburger";

import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";

export default {
  components: {
    SidebarItem,
    Hamburger
  },
  data() {
    return {
      active: "",
      childRoutes: [],
      permission: sessionStorage.getItem("userOperations")
    };
  },
  computed: {
    ...mapGetters(["sidebar"]),
    routes() {
      let name = this.$route.matched[0].name;
      let routes = this.$router.options.routes;
      //设置初始选中模块
      routes.forEach(el => {
        if (el.name == name) {
          el.navActive = true;
        }
      });
      return routes;
    },
    isCollapse() {
      return !this.sidebar.opened;
    }
  },
  watch: {
    $route: {
      handler(to, from) {
        if (to.matched.length > 0) {
          this.active = to.matched[0].name;
          this.$router.options.routes.forEach(el => {
            if (el.name == this.active) {
              this.childRoutes = [];
              el.children.forEach(_el => {
                console.log(_el);
                if (!_el.hidden || _el.hidden == false) {
                  this.childRoutes.push(_el);
                }
              });
            }
          });
        }
      },
      immediate: true
    }
  },
  mounted() {},
  methods: {
    checkPermssion: function(str, strs) {
      if (!str) {
        return true;
      }
      return strs.indexOf(str) > -1 ? true : false;
    },
    toggleSideBar() {
      this.$store.dispatch("ToggleSideBar");
    },
    routerClick(items, index) {
      // console.log(this.$router.options.routes,items)
      items.forEach(el => {
        el.navActive = false;
      });
      items[index].navActive = true;
      this.childRoutes = items[index].children;
    }
  }
};
</script>
