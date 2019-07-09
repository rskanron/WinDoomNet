<template>
  <div id="app">
    <img id="banner" src="./assets/windham_wrestling_federation_main.jpg"> 

    <navigation/>

    <br>

    <div id="container">
      <router-view/>  
    </div>
    
    <br><br>
    
    <p style="text-align: center;">By Windham Techies</p>
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
    font-size: 1.4em;
    -webkit-font-smoothing: antialiased;
    color: #0d49fc;
    background-color: black;
    height: 100%;
  }

  #banner {
    width: 100%;
    margin-bottom: 0px;
  }

  body {
    background-color: black;
  }

  #container {
    margin: 0px 1em;
  }

  .page_title {
    text-align: center;
    text-decoration: underline;
    margin-bottom: 1.8em;
    font-size: 2.5em;
  }

  p {
    color: #cccccc;
  }

  h2, h3, h4, h5 {
    color: #e3df09;
  }

  a, a:visited {
      color: #00b4eb;
      /* text-decoration: none; */
  }

</style>
