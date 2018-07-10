<template>

  <div id="home">

    <h1 class="page_title">WinDoomFest</h1>
    
    <p>Get your post apocalyptic gear ready as we head to Valhala for WinDoomFest</p>

    <p>Check out part 2 of this year's trailer from Geoff Thomas ...</p>

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
    
    p {
      text-align: center;
      margin: 20px 50px;
    }

</style>

