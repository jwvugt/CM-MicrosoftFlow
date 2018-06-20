const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.all('*', function(req, res, next){
    next();
});

app.use('/api', require('./routes/apiV1'));

let port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('De server draait op port ' + port);
})
module.exports = app;