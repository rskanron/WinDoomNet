<template>
  <div id="app">
    <img id="banner" src="./assets/windoomfest_banner_resized.gif"> 

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
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.25em;
    -webkit-font-smoothing: antialiased;
    color: rgb(253, 78, 81);  
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
