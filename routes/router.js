const express = require('express');
const router = express.Router();

const { getPays, getData } = require('../services/countryService');

router.get('/pays', getPays);
router.get('/info', getData);

module.exports = router;