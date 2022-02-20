const express = require("express");
const { addPet } = require("../controllers/addPet.js");
const router = express.Router();
const { petsIdShelter } = require("../controllers/petsidshelters.js");
const { getPets } = require("../controllers/getPets.js");
const { filterTemperament } = require("../controllers/filterTemperament.js");
const { postVaccines } = require("../controllers/petsVaccines");

router.get("/pets/:idCity", getPets);

// router.get("/pets/:idShelter", petsIdShelter);

router.post("/pets", addPet);

// router.get("/pets/:idTemperament", filterTemperament);

router.post("/postVaccines", postVaccines);

module.exports = router;
