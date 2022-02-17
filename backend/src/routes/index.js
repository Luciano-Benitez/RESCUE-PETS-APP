const { Router } = require("express");
const router = Router();
const axios = require("axios");
const petsidshelter = require('./pets.js')
const adoption = require('./form.js');
const createShelter = require('./CreateLogsShelters');

router.use('/',petsidshelter)
router.use('/',adoption)
router.use('/',createShelter)

module.exports = router;