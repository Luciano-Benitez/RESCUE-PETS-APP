const postRefugios = require('../src/utils/postsRefugios.json')
const {Shelter,Users} = require('../src/db')

exports.setShelters =  async() => {
    try{
        postRefugios.refugios.forEach(async element => {
            await Users.findOrCreate({
                where: {
                    email: element.email,
                    password: element.password,
                    roleId : 1
                }
            })
            await Shelter.findOrCreate({
                where: {
                    id: element.id,
                    name: element.name ,
                    address: element.address ,
                    phoneNumber: element.phoneNumber ,
                    description: element.description ,
                    userId: element.userId,
                    cityId: element.cityId
                }
            })
        });
    }catch(error){
        return error
    }
}