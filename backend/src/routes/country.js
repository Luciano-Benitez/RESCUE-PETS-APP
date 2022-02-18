const {Countries } = require("../db");
const express = require('express')
const router = express.Router()

const postCountry = require('../controllers/postCountry')

router.post('/country',postCountry);


router.get('/country', async (req,res)=>{
    let allCountries = await Countries.findAll();
    if (allCountries){
        res.status(200).send(allCountries)
    } else {
        res.status(400).json('Sorry, there is no Countries')
    }
});

module.exports = router