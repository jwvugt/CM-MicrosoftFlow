var httpRequest = require('../actions/http_request');
var numberValidation = require('../actions/number_validation');
var sendSms = require('../actions/send_sms');

module.exports = {
    flowDomainChecker(req, res) {
        let json = req.body;
        httpRequest.isUp(json.url).then((bool) => {
            if (bool) {
                numberValidation.validateNumer(json.phoneNumber, json.token).then((bool) => {
                    if (bool) {
                        sendSms.sendSMS(json.token, json.message, json.phoneNumber, json.from).then((bool) =>{
                            if (bool) {
                                res.status(200);
                                res.send({
                                    "Message": "SMS send out"
                                });
                            }
                            else{
                                res.status(0);
                            }
                        });
                    }
                });
            }
        });
    }
};