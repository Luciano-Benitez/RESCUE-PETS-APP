const {Adoptions} = require('../db.js')//Requiero  model adoption para hacerle post
exports.sendAdoption = async (req,res) => {
    const {idform,idpet,answer} = req.body
    try{
        if(idform && idpet && answer){
            let adoptionCreated = await Adoptions.create({
                answers : answer,
                formId : idform,
                petId : idpet
            })

            return res.status(201).json(adoptionCreated)
        }else{
            return res.status(400).send('wrong data')
        }
    }catch(error){
        return res.status(500).send(error)
    }    
}