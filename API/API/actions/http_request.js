var request = require('request');

module.exports = {
    isUp(url) {
        return new Promise((resolve) => {
            request(url, function (err, res, body) {
                if (res) {
                    if (res.statusCode !== 200) {
                        resolve(false);
                    } else {
                        resolve(true);

                    }
                } else {
                    resolve(false);
                }
            });
        });
    }
};