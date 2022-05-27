let express = require('express');
let app = express();

const absolutePath = __dirname + '/view/index.html';

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
});

module.exports = app;
