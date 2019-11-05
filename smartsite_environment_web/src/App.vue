<template>
  <div id="app">
    <router-view :key="key"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: ""
    };
  },
  watch: {
    $route(to) {
      console.log(to);
      if (to.query.projectId) {
        this.key = to.query.projectId;
      } else {
        this.key = "";
      }
    }
  }
};
</script>

<style lang="scss">
html {
  height: 100%;
  min-height: 768px;
  overflow: hidden;
  body {
    height: 100%;
    min-height: 768px;
    overflow: hidden;
    #app {
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      height: 100%;
    }
  }
}
</style>
