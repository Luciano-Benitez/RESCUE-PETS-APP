const { response } = require('express')
const { Shelter } = require('../db')

 exports.addShelter = async(req, res= response) =>{
    const {name, address, phoneNumber,description}= req.body
 

  
}