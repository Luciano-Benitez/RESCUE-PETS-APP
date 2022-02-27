const { Shelter, Users, Cities, Countries, Roles } = require("../db");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const { generateJWT } = require("../../helpers/jwt");

async function createShelter(req, res) {

    try {
        const { name, phoneNumber, description, address, email, password ,cityId,  role, img } = req.body;
      

        const errors= validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                ok: false,
                errors : errors.mapped()
            })
        }

        const salt = bcrypt.genSaltSync()

       
        const hash = bcrypt.hashSync(password, salt)

        const User =  await Users.create({
             email: email,
             password : hash,
             roleId: role
         });

         const token = await generateJWT(User.id, User.email)

        const createShelter = await Shelter.create({
            name, address, phoneNumber, description, userId : User.id , cityId, img
        });
       
        res.status(201).send({
            ok: true,
            createShelter,
            id: User.id,
            email: User.email,
            token
         });

    } catch (error) {
        res.json('Error en el Catch.');
        console.log(error);

    }

  } 


const getAllShelters = async () => {
  return await Shelter.findAll({
    //  include:{ all: true, nested: true}
      include:{
          model: Cities
      }
     });
  };

module.exports = { createShelter, getAllShelters };
