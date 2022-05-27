let express = require('express');
let app = express();

const absolutePath = __dirname + '/views/index.html';
const message = { message: 'Hello json' };

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(absolutePath);
});

app.get('/json', (req, res) => {
    res.json(message);
});

module.exports = app;
