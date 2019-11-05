<!--
 * @Author: pangyu 
 * @CreateTime: 2018-08-28 15:03:08 
 * @Desc: 顶部新增批量删除按钮组 
-->
<template>
  <el-form-item>
    <el-button v-if="validateOperation('insert') && hasInsert" type="primary" size="mini" :icon="this.title.icon" @click="handleInsert">{{this.title.add}}</el-button>
    <el-button v-if="validateOperation('delete') && hasDelete" :disabled="disDelete" type="danger" size="mini" icon="el-icon-delete" @click="handleDelete">{{this.title.del}}</el-button>
    <el-button v-if="validateOperation('binding') && hasBinding" type="success" size="mini" icon="el-icon-edit" @click="handleBinding">绑定智慧工地</el-button>
  </el-form-item>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    hasInsert: {
      type: Boolean,
      default: function() {
        return true;
      }
    },
    hasDelete: {
      type: Boolean,
      default: function() {
        return true;
      }
    },
    hasBinding: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    title: {
      type: Object,
      default: function() {
        return {
          add: "新增",
          del: "批量删除",
          icon: "el-icon-plus"
        };
      }
    },
    check: {
      type: String,
      default: function() {
        return null;
      }
    },
    checkFalse: {
      type: String,
      default: function() {
        return null;
      }
    },
    operationPrex: String,
    sels: Array
  },
  computed: {
    //根据传入参数判断按钮是否置灰
    disDelete() {
      let disabled = false;
      if (this.sels != null && this.sels.length > 0) {
        disabled = false;
        if (this.check) {
          let checks = this.check.split("=");
          let key = checks[0];
          let val = checks[1];
          this.sels.forEach(el => {
            //console.log("key值" + key);

            if (el.callTimes > 0) {
              disabled = true;
            } else if (el[key] == val) {
              disabled = true;
            } else if(el.uuid != null && el.uuid != '' && el.uuid != undefined) {
              disabled = true;
            }
          });
        } else if (this.checkFalse) {
          let checksFalse = this.checkFalse.split("=");
          let key = checksFalse[0];
          let val = checksFalse[1];
          this.sels.forEach(el => {
            if (el[key] != val) {
              disabled = true;
            }
          });
        }
      } else {
        disabled = true;
      }
      return disabled;
    }
  },
  methods: {
    //新增
    handleInsert() {
      this.$emit("clickInsert", {});
    },
    //删除
    handleDelete() {
      this.$emit("clickDelate", this.sels);
    },
    handleBinding() {
      this.$emit("clickBinding", this.sels);
    }
  }
};
</script>
