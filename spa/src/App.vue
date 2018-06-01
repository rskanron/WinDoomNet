<template>
  <div id="app">
    <img id="banner" src="./assets/windoomfest_banner.png">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    margin: auto; 
    max-width: 1920px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    /* -moz-osx-font-smoothing: grayscale; */
    /* text-align: center; */
    color: #d45b3d;
    /* margin-top: 30px;
     */

    background-color: black;
    height: 100%;
  }

  #banner {
    width: 100%;
    height: auto;
  }

  body {
    background-color: black;
  }

</style>
