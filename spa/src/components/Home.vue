<template>

  <div id="home">

    <h1 class="page_title">Windhamfest</h1>

    <div style="text-align: center;">
      <h3>The Best There Is</h3>
      <h3>The Best There Was</h3>
      <h3>The Best There Ever Will Be</h3>
    </div>
    
    <br>

    <h2>Do you smell what LaRoc is cookin'?</h2>

    <p>This going to be the biggest, baddest, Windhamfest ever. You don't know what you'll be missing if you pass this one up. Don't be a jabroni.</p>

    <br>

    <br><br>

    <div id="windoomfest2">
        <iframe src="https://www.youtube.com/embed/NShuitIuKnM?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>

    <br>
    
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

