const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

router.get('/', patientController.getHomePage);

module.exports = router;
