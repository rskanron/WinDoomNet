<template>

  <div class="container">

    <h2 style="text-align: center">Please donate to a weekend of mayhem for Apocalypse Survivors</h2>

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
