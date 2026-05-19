var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "BlujayTech is No.1 AWSDevops Traning Center In Hyderabad, <a href=" https://www.youtube.com/@blujaytech " target="_blank">
            
            </a>" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Blujay Trainer HariKrishna Cheruku" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, https://www.youtube.com/@blujaytech!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
