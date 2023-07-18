const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const appRoute = require('./src/routes/route-manganime');
app.use('/', appRoute);

app.listen(port, () => console.log(`Server app listening at http://localhost:${port}`));