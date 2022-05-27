let express = require('express');
let app = express();

const absolutePath = __dirname + '/views/index.html';

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(absolutePath);
});

module.exports = app;
