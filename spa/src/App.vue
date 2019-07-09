<template>
  <div id="app">
    <img id="banner" src="./assets/windham_wrestling_federation_main.jpg"> 

    <navigation/>

    <br>

    <div id="container">
      <router-view/>  
    </div>
    
    <br><br>
    
    <p style="text-align: center;">By Windhamtech</p>
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
    color: #051FCA;
    background-color: black;
    height: 100%;
  }

  #banner {
    width: 100%;
    margin-bottom: 0px;
    /* height: auto; */
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
    margin-bottom: 1em;
    font-size: 2em;
  }

  p {
    color: #bbbbbb;
  }

  h2, h3, h4, h5 {
    color: rgb(170, 180, 81);
  }

</style>
