const express = require('express');
const router = express.Router();
const { signup, signin, sendTxt, readTxt } = require('../controller/service');

router.post('/register', signup)

router.post('/login', signin)

router.post('/texts', sendTxt)

router.get('/texts', readTxt)

module.exports = router;