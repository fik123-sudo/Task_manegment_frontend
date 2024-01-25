const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/',(req, res) => {
    res.send("data syncornized");
});

app.get('/block',(req, res) => {
    res.send("data syncornized block");
});
module.exports = app