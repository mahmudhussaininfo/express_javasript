
const express = require('express');
const path = require('path');
const { homepage, aboutpage } = require('../controllers/controller');
const { marriage, currcheck } = require('../controllers/helpercontroller');

// router init
const router = express();

// express module
module.exports = router;

// Router get folder
router.get('/', homepage);
router.get('/about', aboutpage);
router.post('/agecheck', marriage);
router.get('/currency/:dollar', currcheck);