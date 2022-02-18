const { Countries } = require("../db");

const postCountry= async(req, res) => {
    try{
        const {countryName} = req.body
        
            let countryCreated = await Countries.create({
                country : countryName,
            })

            res.status(200).json(countryCreated)
        
    }catch(error){
        return error
    }    
};

module.exports = postCountry;