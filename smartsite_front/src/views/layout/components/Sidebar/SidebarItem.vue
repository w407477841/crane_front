<template>
  <div v-if="item.children">
    <div v-if="!item.hidden&&item.children&&checkPermssion(item.permission,permission)" class="menu-wrapper">
      <router-link v-if="hasOneShowingChild(item.children) && !onlyOneChild.children&&!item.alwaysShow" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
          <i class="icon" v-if="onlyOneChild.meta&&onlyOneChild.meta.icon" :class="onlyOneChild.meta.icon"></i>
          <span v-if="onlyOneChild.meta&&onlyOneChild.meta.title" slot="title">{{onlyOneChild.meta.title}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="item.name||item.path">
        <template slot="title">
          <i class="icon" v-if="item.meta&&item.meta.icon" :class="item.meta.icon"></i>
          <span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
        </template>

        <template v-for="child in item.children" v-if="!child.hidden &&checkPermssion(child.permission,permission)">
          <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :item="child" :key="child.path" :base-path="resolvePath(child.path)"></sidebar-item>

          <router-link v-else :to="resolvePath(child.path)" :key="child.name">
            <el-menu-item :index="resolvePath(child.path)">
              <i class="icon" v-if="child.meta&&child.meta.icon" :class="child.meta.icon"></i>
              <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </div>
  </div>
  <div v-else>
    <router-link v-if="!item.hidden &&checkPermssion(item.permission,permission)" :to="resolvePath(item.path)">
      <el-menu-item :index="resolvePath(item.path)" :class="{'submenu-title-noDropdown':!isNest}">
        <i class="icon" v-if="item.meta&&item.meta.icon" :class="item.meta.icon"></i>
        <span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
      </el-menu-item>
    </router-link>
  </div>
</template>

<script>
import path from 'path';

export default {
  name: 'SidebarItem',
  props: {
    // route配置json
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      onlyOneChild: null,
      permission: sessionStorage.getItem('userOperations')
    };
  },
  methods: {
    hasOneShowingChild(children) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          // temp set(will be used if only has one showing child )
          this.onlyOneChild = item;
          return true;
        }
      });
      if (showingChildren.length === 1) {
        return true;
      }
      return false;
    },
    checkPermssion: function(str, strs) {
      if (!str) {
        return true;
      }
      return strs.indexOf(str) > -1 ? true : false;
    },
    resolvePath(...paths) {
      return path.resolve(this.basePath, ...paths);
    }
  }
};
</script>

<style lang="scss" scoped>
i.icon {
  width: 18px;
}
</style>
