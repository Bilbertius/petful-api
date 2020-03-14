const express = require('express');
const json = require('body-parser').json();

const PetsService = require('./pets.service');


const PetsRouter = express.Router();

PetsRouter.get('/',(req, res) => {
        const pets = PetsService.get();
		res.json(pets);
	});
	PetsRouter.delete('/dog', json, (req, res) => {
		res.status(200).send(PetsService.dequeue('dog'));
	});
	PetsRouter.delete('/cat',json, (req, res) => {
		res.status(200).send(PetsService.dequeue('cat'));
	});
module.exports = PetsRouter;
