const {Pets} = require('../db')

 async function editPet (req, res) {
    let {petId} = req.params;
    let {name, sterilization, weight, description, image, speciesId, temperamentId, ageId, petStatusId, genreId} = req.body;


    try {   
        await Pets.update({
            name: "Poppa",
            sterilization: "false",
            weight: 6,
            description: "Gato que llora mucho",
            image: "https://cdn2.thecatapi.com/images/b5j.jpg",
            speciesId: 1,
            temperamentId: 6,
            ageId: 3,
            petStatusId: 2,
            genreId: 2
        },
            {where: 
            {id: petId}
        });
        res.status(200).json("Pet edited successfully");
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

module.exports = {editPet}