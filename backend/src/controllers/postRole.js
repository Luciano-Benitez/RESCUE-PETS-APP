const { Roles } = require("../db");

exports.postRole = async ({roleName}) => {
    try{
        if(roleName){
            let roleCreated = await Roles.create({
                role : roleName,
            })

            return roleCreated
        }
    }catch(error){
        return error
    }    
}