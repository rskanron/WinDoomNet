<template>

  <div id="home">

    <h1 class="page_title">Windhamfest</h1>

    <div style="text-align: center;">
      <h3>The Best There Is</h3>
      <h3>The Best There Was</h3>
      <h3>The Best There Ever Will Be</h3>
    </div>
    
    <br>
    <hr />
    <br>

    <h2 style="text-align: center;">Do you smell what LaRocca is cookin'?</h2>

    <p style="text-align: center;">The biggest, baddest, Windhamfest ever. Do you think you can hang jabroni?</p>

    <br>
    <br>

    <div id="windoomfest2">
        <iframe src="https://www.youtube.com/embed/NShuitIuKnM?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    
  </div>
  
</template>

<script>

  import WinDoomFest2 from './videos/WinDoomFest2'

  export default {
    name: 'Home'
  }

</script>

<style scoped>

  #windoomfest2 {
    text-align: center;
  }

    iframe {
        min-height: 375px;
        max-width: 700px;
        /* padding-bottom: 40%; */
        /* margin-bottom: -40%; */
        width: 100%;
        height: 100%;
    } 

</style>

