<template>

    <div style="max-width: 300px; text-align: center; display: flex; flexbox-diretion: column; flex-wrap: wrap">

        <br>
        
        <div class="input-group payment-column" style="white-space: nowrap;">

            <span class="input-group-addon">$</span>

            <input class="form-control" v-model="amount" aria-label="Amount (to the nearest dollar)" style="text-align: right; width: 60px;">

            <span class="input-group-addon">.00</span>

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
        padding: 10px;
    }
</style>

<script>

    let enteredAmount = 300

    export default {
        name: 'Main',
        data () {
            return  {
                amount : enteredAmount,
                success : false,
                error : false
            }
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
                let paymentAmount = enteredAmount + '.00'

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
