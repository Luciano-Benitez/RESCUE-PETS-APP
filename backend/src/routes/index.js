const { Router } = require("express");
const router = Router();
const axios = require("axios");
const pets = require('./pets.js')
const form = require('./form.js');
const roles = require('./roles')
const createShelter = require('./CreateLogsShelters');
const countries = require('./country')
const cities = require('./cities')
const auth= require('./auth')
const temperaments = require('./temperaments')
const states = require('./states')
const Search = require('./Search');
const ShelterAndCityId = require('./Shelter&CityId');
const Shelter = require('./Shelter');

router.use('/',pets)
router.use('/',form)
router.use('/',createShelter)
router.use('/',roles)
router.use('/',countries)
router.use('/',Search)

router.use('/',auth)

router.use('/',states)
router.use('/',cities)
router.use('/',temperaments)
router.use('/',ShelterAndCityId)
router.use('/',Shelter)

module.exports = router;