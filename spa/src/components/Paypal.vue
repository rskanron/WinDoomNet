<template>

    <div style="text-align: center;">
        <h2 style="text-align: center">Pay Here</h2>

        <p>How many refugees are you bringing?</p>

        <div class="payment-column">

            <p aria-label="Number of people for thursday.">
                Thursday ($50)
            </p>

            <select id="selectNumThursday" class="form-control" v-model="selectNumThursday">
                <option v-for="n in 21" :value="n-1">{{ n-1 }}</option>
            </select>

        </div>

        <div class="payment-column">

            <p aria-label="Number of people for friday.">
                Weekend ($300)
            </p>

            <select id="selectNumWeekend" class="form-control" v-model="selectNumWeekend">
                <option v-for="n in 21" :value="n-1">{{ n-1 }}</option>
            </select> 
            
        </div>        

        <div class="payment-column">
            <p>Total: ${{ totalAmountEntered }}</p>
        </div>


        <a :href="paymentLink" target="_blank">
            <img id="pay" src="../assets/clicktopay.png">
        </a>

    </div>

</template>

<style scoped>
    .payment-column {
        margin: auto;
        padding: 10px;
        
    }
    .payment-column > * {
        display: inline;
    }
</style>

<script>

    let data =  {
        selectNumThursday : 0,
        selectNumWeekend : 0,
        success : false,
        error : false,
    }

    function getAmount() {
        return (data.selectNumThursday * 50) + (data.selectNumWeekend * 300)
    }

    function getLink() {
        let amount = getAmount()
        return "https://www.paypal.me/windhamfest/" + amount
    }

    export default {
        name: 'PayPal',
        data () {
            return data
        },
        computed: {
            totalAmountEntered : getAmount,
            paymentLink : getLink
        }
    }

</script>

