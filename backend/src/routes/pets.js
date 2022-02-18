const express = require("express");
const { addPet } = require("../controllers/addPet.js");
const router = express.Router();
const { petsIdShelter } = require("../controllers/petsidshelters.js");
const { getPets } = require("../controllers/getPets.js");
const { filterTemperament } = require("../controllers/filterTemperament.js");
const { postVaccines } = require("../controllers/petsVaccines");
const {petsId}= require("../controllers/petsId");
const { getAllPetsinDB } = require("../controllers/getAllPetsinDB.js");


router.get("/pets/:idCity", getPets);

// router.get("/pets/:idShelter", petsIdShelter);

router.post("/pets", addPet);

// router.get("/pets/:idTemperament", filterTemperament);

router.post("/postVaccines", postVaccines);

router.get('/petDetail/:idPets',petsId )

router.get("/petDetail", async (req, res) => {
    
    let allPets = await getAllPetsinDB();
   
      if (allPets.length > 0) {
        res.status(200).send(allPets);
      } else {
        res.status(400).json("Sorry,pet not found");
      }
   
  });


module.exports = router;
