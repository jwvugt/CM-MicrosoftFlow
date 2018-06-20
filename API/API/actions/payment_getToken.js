const request = require('request');

module.exports = {
    getPaymentToken(clientID, clientSecret) {
        return new Promise((resolve) => {
            let headers = {
                "Content-Type": "application/json",
            };
            let options = {
                url: 'https://api.cmpayments.com/auth/v1/token',
                method: 'POST',
                headers: headers,
                json: true,
                body:
                    {
                    "grant_type": "client_credentials",
                    "client_id": clientID,
                    "client_secret": clientSecret
                    }
            };

            request(options, function (err, res, body) {
                    if (res) {
                        if (res.statusCode !== 200) {
                            console.log('hij komt bij de false in getToken');
                            resolve(false);
                        }
                        else
                        {
                            console.log('hij komt bij de true  in valid getToken');
                            resolve(body.access_token);
                        }
                    }
                }
            );
        });
    }
};