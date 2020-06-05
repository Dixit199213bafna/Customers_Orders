<template>
  <div id="app" class="container-fluid">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import Header from "./component/Header";
export default {
  name: 'app',
  components: {
    appHeader: Header
  },
}
</script>

<style>
  body {
    padding: 30px;
  }
</style>
