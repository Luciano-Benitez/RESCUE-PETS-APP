const {Requests} = require('../db.js')//Requiero  model adoption para hacerle post
exports.sendRequest = async (idform,answer) => {
    try{
        if(idform && answer){
            let requestCreated = await Requests.create({
                answers : answer,
                formId : idform
            })

            return requestCreated
        }
    }catch(error){
        return error
    }    
}