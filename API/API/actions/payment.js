const request = require('request');

module.exports = {
    getPayment(amount, merchantReference, paymentToken ) {
        return new Promise((resolve) => {
            let headers = {
                "Content-Type": "application/json",
                "Authorization": paymentToken,
            };
            let options = {
                url: 'https://api.cmpayments.com/paymentlink/v1',
                method: 'POST',
                headers: headers,
                json: true,
                body:
                    {
                        "amount": amount,
                        "merchant_reference": merchantReference
                    }
            };

            request(options, function (err, res, body) {
                    if (res) {
                        if //Fail
                        (res.statusCode !== 201) {
                            console.log('hij komt bij de false in getPayment');
                            resolve(false);
                        }
                        else //Success
                        {
                            console.log('hij komt bij de true  in valid getPayment');
                            resolve(body);
                        }
                    }
                }
            );
        });
    }
};