const express = require('express');

const bodyParser = require('body-parser');

const feedRoutes = require('./routes/routes');

const app = express();

app.use(bodyParser.json());

app.listen(8080);