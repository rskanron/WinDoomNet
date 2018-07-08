<template>

  <div id="home">

    <h1 class="page_title">Home</h1>
    
    <p>Get your post apocalyptic gear ready as we head to Valhala for WinDoomFest</p>

    <p>Check out part 2 of this year's trailer from Geoff Thomas ...</p>

    <br><br>

    <windoomfest2></windoomfest2>

    <br>
    
  </div>
  
</template>

<script>

  import WinDoomFest2 from './videos/WinDoomFest2'

  export default {
    name: 'Home',
      components: {
        'windoomfest2': WinDoomFest2
      }, 
    }

</script>

<style>
.video-responsive{
        overflow:hidden;
        padding-bottom:56.25%;
        position:relative;
        max-width: 90%;
        margin: auto;
        /* height:0; */
    }
    .video-responsive iframe{
        left:0;
        top:0;
        height:100%;
        width:100%;
        position:absolute;
    }
    p {
      text-align: center;
      margin: 20px 50px;
    }

</style>

