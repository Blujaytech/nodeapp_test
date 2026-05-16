var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "BlujayTech is No.1 AWSDevops Traning Center" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Blujay Trainer HariKrishna Cherukuu" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, Get Knowledge from Blujaytech1!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
