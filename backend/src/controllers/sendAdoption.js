const {Adoptions} = require('../db.js')//Requiero  model adoption para hacerle post
exports.sendAdoption = async (idform,idpet,answer) => {
    try{
        if(idform && idpet && answer){
            let adoptionCreated = await Adoptions.create({
                answers : answer,
                formId : idform
            })

            return adoptionCreated
        }
    }catch(error){
        return error
    }    
}