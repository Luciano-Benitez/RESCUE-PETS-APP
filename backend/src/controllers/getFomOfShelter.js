const {Forms,Questions,Shelter} = require('../db.js') 
    
exports.getFormOfShelter = async(req,res)=>{
        const {userid} = req.params
        const {formtypeid} = req.query
        try{
            let shelterFilter = await Shelter.findOne({
                where:{
                    userId : userid
                }
            })
            let allForms = await Forms.findAll({
                where:{
                    shelterId: shelterFilter.id,
                    formtypeId : formtypeid
                },
                include:{
                    model : Questions,
                    through : {
                        attributes : []
                    }
                }
            })
            if(!allForms) res.status(400).send('not forms found')
        res.status(200).json(allForms)    
        }catch(error){
            return error
        }    
}