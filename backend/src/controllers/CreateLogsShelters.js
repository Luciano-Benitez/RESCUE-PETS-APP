const { Shelter, Users, Cities, Countries, Roles } = require("../db");
const { Op } = require("sequelize");

async function createShelter(req, res) {
    try {
        const { name, email, phoneNumber, description, country, city, address, user, password, role } = req.body;

        const createShelter = await Shelter.create({
            name, address, phoneNumber, description, 
        });

        // const User = await Users.create({
        //     where: {
        //         email: {
        //             [Op.in] : email
        //         },
        //         user: {
        //             [Op.in] : user
        //         },
        //         password: {
        //             [Op.in] : password
        //         }
        //     }
        // });
        // User.map(e => {
        //     createShelter.addUsers(e);
        // });

        // for(let element of city ){
        //     const cities = await Cities.create({
        //         where: {    
        //             city: {
        //                 [Op.in] : city
        //             }
        //         }
        //     });
        //        await createShelter.addCities(cities);
        // };

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

module.exports = {createShelter};