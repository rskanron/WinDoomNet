<template>
    <div id="video_reel">

        <h1 class="page_title">Videos</h1>
 <br>
        <windoomfest2></windoomfest2>
         <br>
        <div id="windhamfestTrailer" class="windhamfest-video video-responsive">
            <iframe src="https://player.vimeo.com/video/52329817" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
 <br>
        <div id="windievalTimesRockumentary" class="windhamfest-video video-responsive">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/n0GoiWoX7bU?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
 <br>
        <div id="super_windhamfest_rockumentary" class="windhamfest-video video-responsive">
            <iframe src="https://player.vimeo.com/video/96666573" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
 <br>
        <div id="backToWinhamfestVideo" class="windhamfest-video video-responsive">
            <iframe src="https://player.vimeo.com/video/176507100" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
 <br>
        <div id="backToWinhamfestVideo2" class="windhamfest-video video-responsive">
            <iframe src="https://player.vimeo.com/video/174276567" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
 <br>
        <div id="right_things_motos" class="windhamfest-video video-responsive">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/B8yUvynCf-g?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
 <br>
        <div id="swim_race" class="windhamfest-video video-responsive">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ZXHXnmQ1vHI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        
        <br>

        <p style="text-align: center;" class="vimeo-description">
            Videos Produced by Geoff Thomas - <a href="https://vimeo.com/hunglowfilms">Hung Low Films</a>
        </p>

    </div>
</template>

<script>
    import WinDoomFest2 from './videos/WinDoomFest2'

    export default {
        name: 'VideoReel',
        components: {
            'windoomfest2': WinDoomFest2
        }
    }

</script>


<style>

    .windhamfest-video {
        /* margin: auto; */
        /* position: relative; */
    }

    #video-reel {

    }

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