const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const apiRouter = require('./routes/apiRouter').router;
const cors = require('cors');

app.use(cors());

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('Salut !');
});

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.use('/api/', apiRouter);

app.listen(port, () => {
    console.log('Server listening on port : ' + port)
});