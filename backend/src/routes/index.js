const { Router } = require("express");
const router = Router();

const pets = require('./pets.js')
const form = require('./form.js');
const roles = require('./roles')
const createShelter = require('./CreateLogsShelters');
const countries = require('./country')
const cities = require('./cities')
const auth= require('./auth')
const Search = require('./Search')

const states = require('./states')

router.use('/',pets)
router.use('/',form)
router.use('/',createShelter)
router.use('/',roles)
router.use('/',countries)
router.use('/',Search)

router.use('/',auth)

router.use('/',states)
router.use('/',cities)


module.exports = router;