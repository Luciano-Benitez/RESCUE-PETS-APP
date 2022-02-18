const { Shelter, Users, Cities, Countries, Roles } = require("../db");
const { Op } = require("sequelize");

async function createShelter(req, res) {
    try {
        const { name,/*  email, */ phoneNumber, description, /* country, */ city, address, /* user, */ /* password, */ /* role */ } = req.body;

        const createShelter = await Shelter.create({
            name, address, phoneNumber, description, 
        });

    //    /*  const User = await Users.create({
    //         where: {
    //             email:  email
    //             /* user: {
    //                 [Op.in] : user
    //             },
    //             password: {
    //                 [Op.in] : password
    //             } */
    //         }
    //     });
    //     User.map(e => {
    //         createShelter.addUsers(e);
    //     }); */

        
            // const citys = await Cities.create({
            //     where: {    
            //         city: {[Op.in]: city}
            //     }
            // });
            //    citys.map(e => {
            //     createShelter.addCities(citys);
            // });
            // console.log('citys: ', citys);
        // const country1 = await Countries.findOrCreate({ //a consultar..
        //     where: {
        //         country: {
        //             [Op.in] : country
        //         }
        //     }
        // });
        // country1.map(e => {
        //     createShelter.addCountries(e);
        // });

        // const roles = await Roles.findOrCreate({
        //     where: {
        //         role: {
        //             [Op.in] : role
        //         }
        //     }
        // });
        // roles.map(e => {
        //     createShelter.addRoles(e)
        // });
        
        console.log('createShelter: ', createShelter);
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
}

module.exports = {createShelter, getAllShelters};