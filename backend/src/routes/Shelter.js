const express = require('express');
const { getSheltersById, updateShelter } = require('../controllers/getShelter');
const { validateJWT } = require('../middleware/validate-token');
const router = express.Router()



router.get('/Shelter/:id', validateJWT,getSheltersById );
router.put('/Shelter/:id',validateJWT ,updateShelter );

module.exports = router
