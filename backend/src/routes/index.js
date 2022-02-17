const { Router } = require("express");
const router = Router();
const axios = require("axios");
const petsidshelter = require('./pets.js')
const adoption = require('./form.js');

router.use('/',petsidshelter)
router.use('/',adoption)

module.exports = router;