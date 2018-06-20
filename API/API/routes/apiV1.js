const express = require('express');
const router = express.Router();
const domainCheckerController = require('../flows/domain_checker_controller');
const paymentController = require('../flows/payment_controller');
const voiceController = require('../flows/voice_controller');
const smsController = require('../flows/sms_controller');

//
// Catch all
//

router.all("*", function (req, res, next) {

    //logging or something
    next();
});

//
router.post('/domain_checker', domainCheckerController.flowDomainChecker);
router.post('/payment', paymentController.paymentLinkGetter);
router.post('/voice', voiceController.sendVoice);
router.post('/sms', smsController.sendSMS);

module.exports = router;