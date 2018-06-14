<template>

  <div id="home">

    <windoomfest2></windoomfest2>

    <br>

    <paypal style="margin: auto;"></paypal>
    
  </div>
  
</template>

<script>

  import Paypal from './Paypal'
  import WinDoomFest2 from './videos/WinDoomFest2'

  export default {
    name: 'Home',
      components: {
        'paypal': Paypal,
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

</style>

