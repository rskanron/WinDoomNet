<template>
  <div id="app">
    <img id="banner" src="./assets/WinDoomFest_banner.png">

    <navigation/>

    <router-view/>
    
    <br><br>
    <p style="text-align: center;">Developed by Rick Skanron</p>
  </div>
</template>

<script>

  import Navigation from './components/navigation'

  export default {
    name: 'App',
    components: {
      'Navigation': Navigation
    }
  }
</script>

<style>
  #app {
    margin: auto; 
    max-width: 1440px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #d45b3d;
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
