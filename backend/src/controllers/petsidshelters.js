const {Pets,Shelter} = require('../db.js') 

exports.petsIdShelter = async(idShelter)=>{
        if(isNaN(idShelter)) return 'no string'
        let petsWithIdShelter = await Pets.findAll({
            where:{
                shelterId : idShelter
            },
            include: Shelter
        })
        if(petsWithIdShelter.length){
            return petsWithIdShelter
        }else{
            return 'no pets with this ID_Shelter'
        }
}