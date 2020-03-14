const express = require('express');
const cors = require('cors');
const app = express();
const { config }= require('../../config.js');


app.use(cors());
app.options('*', cors())    ;

app.use('/api/people', require('../people/people.router'));
app.use('/api/pets', require('../pets/pets.router'));

module.exports = app;
