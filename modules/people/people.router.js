const express = require('express');
const json = require('body-parser').json();



const PeopleService = require('./people.service');


const router = express.Router();

router.get('/', (req, res) => {
  const inLine = PeopleService.get();
  res.json(inLine);
});

router.post('/', json, (req, res) => {
  const adopter = req.body;
  PeopleService.enqueue(adopter);
  res.send(204);
});

module.exports = router;
