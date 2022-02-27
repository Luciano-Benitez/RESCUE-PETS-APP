const {Requests} = require('../db.js')//Requiero  model adoption para hacerle post
exports.sendRequest = async (req,res) => {
    const {idform,answer, profileId} = req.body
    try{
        if(idform && answer){
            let requestCreated = await Requests.create({
                answers : answer,
                formId : idform
            })

            return res.status(201).json(requestCreated)
        }else{
            return res.status(400).send('wrong data')
        }
    }catch(error){
        return res.status(500).send(error)
    }    
}