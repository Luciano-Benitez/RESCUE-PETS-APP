const express = require('express')
const router = express.Router()
const {petsIdShelter} = require('../controllers/petsidshelters.js')

router.get('/pets/:idShelters', async (req,res)=>{
    const {idShelters} = req.params
    if(idShelters){
        return res.status(200).json(await petsIdShelter(idShelters))
    }else{
        return res.status(400)
    }
})

module.exports = router