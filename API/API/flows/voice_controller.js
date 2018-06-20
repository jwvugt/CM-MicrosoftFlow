const voice = require('../actions/send_voice');

module.exports = {
    sendVoice(req, res) {
        let json = req.body;

        voice.sendVoice(json.token, json.callee, json.caller, json.anonymous, json.prompt).then((bool) => {
            console.log(bool);
            if (bool) {
                res.status(200);
                res.send({
                    "Message": "Call send out"
                });
            }
            else{
                res.status(0);
            }
        });
    }
};