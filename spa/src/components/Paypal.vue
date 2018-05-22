<template>

    <div style="text-align: center;">

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
                Friday ($300)
            </p>
            <select id="selectNumWeekend" class="form-control" v-model="selectNumWeekend">
                <option v-for="n in 21" :value="n-1">{{ n-1 }}</option>
            </select>
        </div>        

        <div class="payment-column">
            <p>Total: {{ totalAmountEntered }}</p>
        </div>


        <div id="paypal-button-container" class="payment-column"></div>
        
        <div v-if="success" class="alert alert-success">
            <strong>Success!</strong> You're going to celebrate life with no rules and other decent punks like yourself! Ahem, however, there are rules at this celebration.
        </div>

        <div v-if="error" class="alert alert-danger">
            <strong>Ooops!</strong>  something went wrong
        </div>

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

    export default {
        name: 'Main',
        data () {
            return data
        },
        computed: {
            totalAmountEntered : getAmount
        }
    }

    paypal.Button.render(

        {
            env: 'sandbox', // sandbox | production
            
            commit: true,

            client: {
                sandbox: 'AaBlyzD7AUWU4FSkK_1wZ6LgFjn0XBozBpMA4ypfdo85tu4PNouFBKJ5VQXBcKDf1acCRuVKdcFtK03q'
            },

            payment: (data, actions) => {
                let paymentAmount = getAmount() + '.00'

                return actions.payment.create({
                    payment: {
                        transactions: [
                            {
                                amount: { 
                                    total: paymentAmount, 
                                    currency: 'USD' 
                                }
                            } 
                        ]
                    }
                })
            },

            onAuthorize: (data, actions) => {

                // var data = {
                //     paymentID: data.paymentID,
                //     payerID: data.payerID,
                //     amount:this.amount
                // };

                return actions.payment.execute().then(function(payment) {
                    window.alert('Payment Complete! ' + data.paymentID);
                });
            }
        },

        '#paypal-button-container'
    );

</script>
