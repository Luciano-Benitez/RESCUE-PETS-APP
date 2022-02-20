const postpets = require('../src/utils/postPets.json')
const {Pets} = require('../src/db')

exports.setPets =  async() => {
    try{
        postpets.pets.forEach(async element => {
            await Pets.findOrCreate({
                where: {
                    name: element.name,
                    sterilization: element.sterilization,
                    weight : element.weight,
                    description : element.description,
                    image : element.image,
                    speciesId : element.speciesId,
                    shelterId : element.shelterId,
                    temperamentId : element.temperamentId,
                    ageId : element.ageId,
                    petStatusId : element.petStatusId 
                }
            })
        });
    }catch(error){
        return error
    }
}