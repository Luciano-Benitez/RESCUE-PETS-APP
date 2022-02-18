const express = require("express");
const { addPet } = require("../controllers/addPet.js");
const router = express.Router();
const { petsIdShelter } = require("../controllers/petsidshelters.js");
const { getPets } = require("../controllers/getPets.js");

router.get("/pets", getPets);

router.get("/pets/:idShelter", petsIdShelter);

router.post("/pets", addPet);

module.exports = router;
