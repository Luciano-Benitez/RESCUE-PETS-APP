const { Router } = require("express");
const router = Router();
const axios = require("axios");
const pets = require('./pets.js')
const form = require('./form.js');
const createShelter = require('./CreateLogsShelters');

router.use('/',pets)
router.use('/',form)
router.use('/',createShelter)

module.exports = router;