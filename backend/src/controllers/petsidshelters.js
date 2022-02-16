// const {pets} = require('../db.js') //Requiero model pets para busqueda por id

exports.petsIdShelter = async(idShelter)=>{
    if(idShelter !== undefined){
        let petsWithIdShelter = await pets.findAll({
            where:{
                ID_Shelter: idShelter
            }
        })
        if(petsWithIdShelter.length){
            return petsWithIdShelter
        }else{
            return 'no pets with this ID_Shelter'
        }
    }
}