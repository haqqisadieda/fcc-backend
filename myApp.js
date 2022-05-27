let express = require('express');
require('dotenv').config();
let app = express();

const absolutePath = __dirname + '/views/index.html';

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
});

app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({ message: 'Hello World'.toUpperCase() });
    }

    res.json({ message: 'Hello World' });
});

module.exports = app;
