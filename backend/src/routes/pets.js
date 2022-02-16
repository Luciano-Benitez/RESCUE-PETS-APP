const express = require('express')
const router = express.Router()
const getpetidshelter = require('../controllers/petsidshelters')

router.get('/pets/:idShelters', (req,res)=>{
    const {idShelter} = req.params
    if(getpetidshelter.petsIdShelter(idShelter)){
        return res.status(200).json(getpetidshelter.petsIdShelter(idShelter))
    }else{
        return res.status(400)
    }
})

module.exports = router