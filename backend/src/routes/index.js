const { Router } = require("express");
const router = Router();
const axios = require("axios");
const petsidshelter = require('./pets.js')

router.use('/',petsidshelter)

module.exports = router;