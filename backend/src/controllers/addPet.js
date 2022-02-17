const { response } = require('express')
const { Pets } = require('../db')

 exports.addPet = async(req, res= response) =>{
    const {name, sterilization,weight,description, speciesId, shelterId, temperamentId}= req.body
 

    try {
        if(name, sterilization, weight, description){
            const PetsCreated = await Pets.create({ name, sterilization, weight, description, speciesId, shelterId,temperamentId})            
            res.json({
                ok:true,
                PetsCreated
            })
        }

        else {
            res.status(400).json({
                ok: false,
                msg: 'Missing Data'
            })
        }
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error connecting to the database'
        })
    }
    
}