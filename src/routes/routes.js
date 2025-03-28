const express = require('express');
const router = express.Routers();

const FarmaceuticaController = require('../controllers/farmaceutica');

router.get('/farmaceutica', FarmaceuticaController.listarFarmaceutica);

module.exports = router;