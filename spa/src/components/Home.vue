<template>

  <div id="home">

    <h1 class="page_title">WinDoomFest</h1>

    <p>This is Windhamfest's own little spot on the web. Enjoy the sights and sounds of years past and take a look at what's to come.</p>
    
    <h2>In the past</h2>

    <p>We created history by going back to medieval times. Ultimately the world was destroyed and is better for it.</p>

    <p>This year we are headed to the future where Windham is the only oasis left in the Catskill mountains.</p>

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

