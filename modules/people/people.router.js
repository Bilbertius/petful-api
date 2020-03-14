const express = require('express');
const json = require('body-parser').json();
const cors = require('cors');


const PeopleService = require('./people.service');


const router = express.Router();

router.get('/', cors(), (req, res) => {
  const inLine = PeopleService.get();
  res.json(inLine);
});

router.post('/', cors(), json, (req, res) => {
  const adopter = req.body;
  PeopleService.enqueue(adopter);
  res.send(204);
});

module.exports = router;
