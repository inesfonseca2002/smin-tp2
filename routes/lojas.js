const lojasrouter = require('express').Router();
const controller = require('../controllers/lojas');

lojasrouter.get('/', controller.getAll); //read all

module.exports = lojasrouter;