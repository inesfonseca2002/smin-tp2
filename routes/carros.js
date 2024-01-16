const carrosrouter = require('express').Router();
const controller = require('../controllers/carros');

carrosrouter.get('/', controller.getAll); //read all

module.exports = carrosrouter;