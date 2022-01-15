const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const indexRoutes = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRoutes);

app.listen(3000);