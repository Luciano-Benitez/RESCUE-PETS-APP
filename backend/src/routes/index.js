const { Router } = require("express");
const router = Router();
const axios = require("axios");
const pets = require('./pets.js')
const form = require('./form.js');
const roles = require('./roles')
const createShelter = require('./CreateLogsShelters');
const countries = require('./country')
const auth= require('./auth')

router.use('/',pets)
router.use('/',form)
router.use('/',createShelter)
router.use('/',roles)
router.use('/',countries)
router.use('/',auth)

module.exports = router;