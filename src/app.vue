<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <router-view/>
    <notifications/>
  </div>
</template>

<script lang="ts">
export default {
  name: 'app',
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";
@import "../node_modules/bootstrap-vue/dist/bootstrap-vue.min.css";
@import '../node_modules/vue-good-table/dist/vue-good-table.css';
@import "src/assets/scss/app";
</style>
