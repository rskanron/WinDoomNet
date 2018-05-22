<template>

  <div class="container">

    <div id="backToWinhamfestVideo" style="margin: auto;" class="embed-container">

      <iframe src="https://player.vimeo.com/video/176507100" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      
    </div>

    <p class="vimeo-description">
      <a href="https://vimeo.com/176507100">Back to Windhamfest-Trailer 3</a> from <a href="https://vimeo.com/hunglowfilms">Hung Low Films</a> on <a href="https://vimeo.com">Vimeo</a>.
    </p>

    <h2 style="text-align: center">Pay Here</h2>

    <paypal style="margin: auto;"></paypal>

  </div>
  
</template>

<script>

  import Paypal from './Paypal'

  export default {
    name: 'Main',
    // data () {
    // },
    components: {
      'paypal': Paypal
    }, 
  }

</script>

<style scoped>
  .embed-container {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
      max-width: 95%;
  }

  .embed-container iframe,
  .embed-container object,
  .embed-container embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
  }
</style>

