const request = require('request');

module.exports = {
  sendSMS(producttoken, content, numbers, From) {
    return new Promise((resolve) => {
      let headers = {
        "Content-Type": "application/json",
      };
      let options = {
        url: 'https://gw.cmtelecom.com/v1.0/message',
        method: 'POST',
        headers: headers,
        json: true,
        body: {
          "messages": {
            "authentication": {
              "producttoken": producttoken
            },
            "msg": [{
              "From": From,
              "Body": {
                "Content": content,
                "Type": "auto"
              },
              "customGrouping3": "avans test api",
              "MinimumNumberOfMessageParts": 1,
              "MaximumNumberOfMessageParts": 8,
              "To": [{
                "Number": numbers
              }, ]
            }]
          }
        }
      };
  
      request(options, function (err, res, body) {
          if (res) {
          if (res.statusCode !== 200) {
            console.log('hij komt bij de false in sms validation')
            resolve(false);

          } else {

            console.log('hij komt bij detrue  in valid smsdationhttp')
            resolve(true);
          }
        }
      });
    }); 
  }
};