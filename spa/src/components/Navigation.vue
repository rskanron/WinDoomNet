<template>
    <div class="topnav" id="myTopnav" v-on:click="toggleNav">
        <a class="link-spacer" href="#">&nbsp;</a>

        <router-link tag="a" to="/">Home</router-link>
        <router-link tag="a" to="/videos">Videos</router-link>
        <router-link tag="a" to="/music">Music</router-link>
        <router-link tag="a" to="/pay">Pay</router-link>

        <a href="javascript:void(0);" class="icon" >
            <i class="fa fa-bars"></i>
        </a>
    </div>    
</template>

<style scoped>
    #myTopnav {
        margin-top: -5px;
    }

    /* for mobile mode, so that the first item isn't showing at the top */
    .link-spacer {
        margin-left: -60px;
    }

    /* Add a black background color to the top navigation */
    .topnav {
        /* background-color: #CD2F0C; */
        background-image: linear-gradient(#F24817, #FEF18B);
        overflow: hidden;
        text-align: center;
        /* margin-left: -60px; */
    }

    .topnav > * {
        height: 1.15em;
    }

    /* Style the links inside the navigation bar */
    .topnav a {
        display: inline-block;
        
        color: black;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 1em;
    }

    /* Change the color of links on hover */
    .topnav a:not(.link-spacer):hover {
        background-color: #000024; 
        color: white;
    }

    /* Add an active class to highlight the current page */
    .active-nav {
        background-image: linear-gradient(#FEF18B, #F24817);
        /* background-color: #4384D4;  */
        color: white;
    }

    /* Hide the link that should open and close the topnav on small screens */
    .topnav .icon {
        display: none;
    }

    /* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
    @media screen and (max-width: 600px) {
        .topnav a:not(:first-child) {display: none;}
        
        .topnav a.icon {
            float: right;
            display: block;
        }
    }

    /* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
    @media screen and (max-width: 600px) {
        .topnav.responsive {position: relative;}
        .topnav.responsive a.icon {
            position: absolute;
            right: 0;
            top: 0;
        }

        .topnav.responsive a {
            float: none;
            display: block;
            text-align: left;
        }
        
    }

</style>

<script>

    function toggleNav() {
        if (window.innerWidth <= 600) {
            var x = document.getElementById("myTopnav");
            
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }            
        }
    }

    export default {
        name: 'Navigation',
        methods: {
            toggleNav: toggleNav
        }
    }

</script>

