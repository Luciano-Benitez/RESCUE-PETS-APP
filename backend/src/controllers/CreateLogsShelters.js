const { Shelter, Users } = require("../db");
const { Op } = require("sequelize");

async function createShelter(req, res) {
    try {
        const { name, phoneNumber, description, address, email, password, role } = req.body;

        const User =  await Users.create({
             email:  email,
             password:  password,
             roleId: role
         });

        const createShelter = await Shelter.create({
            name, address, phoneNumber, description, userId : User.id 
        });
       
        res.status(200).send(createShelter);

    } catch (error) {
        res.json('Error en el Catch.');
        console.log(error);
    }
};

const getAllShelters = async () => {
    return await Shelter.findAll({
        include: [{
            model: Cities,
            attributes: ['city'],
            through : {
                attributes: [],
            },
            
        }, {
            model: Users,
            attributes: ['user'],
            through : {
                attributes: [],
            }
        }]
    })
};

module.exports = {createShelter, getAllShelters};