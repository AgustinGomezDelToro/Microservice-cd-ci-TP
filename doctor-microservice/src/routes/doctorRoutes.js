const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.get('/', doctorController.getHomePage);

module.exports = router;
