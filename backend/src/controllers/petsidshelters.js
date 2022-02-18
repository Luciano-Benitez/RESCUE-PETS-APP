const {Pets,Shelter,Age, Temperament,
Species, PetStatus, Vaccines} = require('../db.js') 

exports.petsIdShelter = async(idShelter)=>{
    try{
        if(isNaN(idShelter)) return 'no string'
        let petsWithIdShelter = await Pets.findAll({
            where:{
                shelterId : idShelter
            },
            include : [Age, Temperament, Vaccines, Species, PetStatus, Shelter]
        })
        if(petsWithIdShelter.length){
            return petsWithIdShelter
        }else{
            return 'no pets with this ID_Shelter'
        }
    }catch(error){
        return error
    }    
}