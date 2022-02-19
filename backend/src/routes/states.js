const express = require('express')
const router = express.Router()

const getState = require('../controllers/getCountry.js')


router.get('/country', getState);

module.exports = router