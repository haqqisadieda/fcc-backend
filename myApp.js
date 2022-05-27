let express = require('express');
const bodyParser = require('body-parser');
let app = express();

require('dotenv').config();
const absolutePath = __dirname + '/views/index.html';

app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
});

app.get('/json', (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.get(
    '/now',
    (req, res, next) => {
        req.time = new Date().toString();
        next();
    },
    (req, res) => {
        res.json({ time: req.time });
    }
);

app.get('/:word/echo', (req, res) => {
    res.json({ echo: req.params.word });
});

app.route('/name').get((req, res) => {
    res.json({ name: `${req.query.first} ${req.query.last}` });
});

app.post('/name', (req, res) => {
    let firstname = req.body.first;
    let lastname = req.body.last;

    res.json({ name: `${firstname} ${lastname}` });
});

module.exports = app;
