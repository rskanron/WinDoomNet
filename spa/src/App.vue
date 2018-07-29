<template>
  <div id="app">
    <img id="banner" src="./assets/windoomfest_banner_resized.gif"> 

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
    font-size: 1.25em;
    -webkit-font-smoothing: antialiased;
    /* color:  rgb(235, 82, 55);   */
    color: #D82427;
    background-color: black;
    height: 100%;
  }

  #banner {
    width: 100%;
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
    margin-bottom: 1.75em;
  }

  p {
    color: #bbbbbb;
  }

  h2, h3, h4, h5 {
    color: #1B3D9F;
  }

</style>
