const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>BlujayTech</h1>

        <h2>No.1 AWSDevOps Training Center In Hyderabad </h2>

        <a href="https://www.youtube.com/@blujaytech" target="_blank">
            Visit YouTube Channel
        </a>
    `);
});

app.get('/will', (req, res) => {
    res.send('Blujay Trainer HariKrishna Cheruku');
});

app.get('/ready', (req, res) => {
    res.send('Get AwsDevOps Knowledge From BlujayTech!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
