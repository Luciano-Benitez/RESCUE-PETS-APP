const express = require('express')
const { addPet } = require('../controllers/addPet.js')
const { filterTemperament } = require('../controllers/filterTemperament.js')
const router = express.Router()
const {filterTemperament} = require('../controllers/filterTemperament.js')

router.get('/pets/:idShelters', async (req,res)=>{
    const {idShelters} = req.params
    if(idShelters){
        return res.status(200).json(await petsIdShelter(idShelters))
    }else{
        return res.status(400)
    }
})

router.post('/pets', addPet)
router.get("/pets/:idTemperament", filterTemperament);

module.exports = router