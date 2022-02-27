const { Users,Profiles } = require("../db");


async function CreateProfileUser(req, res) {

    try {
        const { name, lastName, phoneNumber, address, userId, email ,roleId} = req.body;
      


        const User =  await Users.create({
             email: email,
             password : 123456789,
             roleId: roleId
         });

        const createProfile = await Profiles.create({
            name, lastName, phoneNumber, address, userId : User.id
        });
       
        res.status(201).send({
            ok: true,
            createProfile,
            Userid: User.id,
            email: User.email,
         });

    } catch (error) {
        res.json('Error en el Catch.');
        console.log(error);

    }

  } 


const getAllProfiles = async () => {
  return await Profiles.findAll({
      include:{
          model: Users
      }
     });
  };

module.exports = { CreateProfileUser, getAllProfiles };
