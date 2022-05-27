let express = require('express');
let app = express();

app.use((res, req) => {
    console.log('Hello World');
});

module.exports = app;
