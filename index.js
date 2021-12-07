const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const apiRouter = require('./routes/apiRouter').router;
const cors = require('cors');

app.use(cors());

app.use('/api/', apiRouter);

app.listen(port, () => {
    console.log('Server listening on port : ' + port)
});

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('Salut ! C\'est Marques Adrien !');
});