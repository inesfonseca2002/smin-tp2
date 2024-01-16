const router = require('express').Router();
const lojasRouter = require('./lojas');
const carrosrouter = require('./carros');

router.use('/lojas', lojasRouter);
router.use('/carros',carrosrouter);

module.exports = router;