const { Shelter } = require("../db");

async function createShelter(req, res) {
    try {
        const { name, address, phoneNumber, description } = req.body;

        const createShelter = await Shelter.create({
            name, address, phoneNumber, description
        });

        res.status(200).send(createShelter)

    } catch (error) {
        res.json('Error en el Catch.');
        console.log(error);
    }
};

module.exports = {createShelter};