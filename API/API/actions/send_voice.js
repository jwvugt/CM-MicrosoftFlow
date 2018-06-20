const request = require('request');

module.exports = {

    sendVoice(token, callee, caller, anonymous, message) {
        return new Promise((resolve) => {
            let headers = {
                "Content-Type": "application/json",
                "X-CM-PRODUCTTOKEN": token
            };
            let options = {
                url: 'https://api.cmtelecom.com/voiceapi/v2/Notification',
                method: 'POST',
                headers: headers,
                json: true,
                body: {
                    "callee": callee,
                    "caller": caller,
                    "anonymous": anonymous,
                    "prompt": message,
                    "prompt-type": "TTS",
                    "voice": {
                        "language": "en-GB",
                        "gender": "Female",
                        "number": 1
                    }
                }
            };

            request(options, function (err, res, body) {
                if (res) {
                    if (res.statusCode !== 200) {
                        console.log(res.statusCode)
                        console.log('hij komt bij de false in voice validation')
                        resolve(false);
                    } else {
                        console.log('hij komt bij de true in voice validation')
                        resolve(true);
                    }
                }
            });
        });
    }
};