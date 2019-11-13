const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const api = require('./routes/index');

const clientApp = path.join(__dirname, '../build');

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(bodyParser.json());
app.use('/api', api);;
app.use('*', express.static(clientApp));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


