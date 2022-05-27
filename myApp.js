let express = require('express');
require('dotenv').config();
let app = express();

const absolutePath = __dirname + '/views/index.html';

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
});

app.get('/json', (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

module.exports = app;
