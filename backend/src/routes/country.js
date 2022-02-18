const {Countries } = require("../db");
const express = require('express')
const router = express.Router()

const postCountry = require('../controllers/postCountry')
const countries = require('../utils/countries.json')

router.post('/country',postCountry);


router.get('/country', async (req,res)=>{

    let data = countries.countries

    data.forEach(element => {
        Countries.findOrCreate({
            where: {
                id : element.id,
                country: element.name
            }
        })
    });
    const AllCountries = await Countries.findAll()

    res.status(200).send(AllCountries)
});

module.exports = router