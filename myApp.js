let express = require('express');
let app = express();

app.get('/', (res, req) => {
    console.log('Hello World');
});

module.exports = app;
