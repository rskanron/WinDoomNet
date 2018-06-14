<template>

    <div id="video_reel">

        <windoomfest2></windoomfest2>

        <div id="backToWinhamfestVideo" style="margin: auto;" class="embed-container">
            <iframe src="https://player.vimeo.com/video/176507100" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <p class="vimeo-description">
            <a href="https://vimeo.com/176507100">Back to Windhamfest-Trailer 3</a> from <a href="https://vimeo.com/hunglowfilms">Hung Low Films</a> on <a href="https://vimeo.com">Vimeo</a>.
        </p> -->

        <div style="margin: auto;" class="embed-container">
            <iframe src="https://player.vimeo.com/video/272444046" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <p>
            <a href="https://vimeo.com/272444046">WinDoomFest - Part 1</a> from <a href="https://vimeo.com/hunglowfilms">Hung Low Films</a> on <a href="https://vimeo.com">Vimeo</a>.
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


    /* YouTube Styles */
    /* .embed-container { */
        /* position: relative;
        padding-bottom: 56.25%; */
        /* height: 0; */
        /* overflow: hidden; */
        /* max-width: 95%;
        max-height: 95%; */
    /* }  */

    /* .embed-container iframe,
    .embed-container object,
    .embed-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: auto;
    } */

</style>