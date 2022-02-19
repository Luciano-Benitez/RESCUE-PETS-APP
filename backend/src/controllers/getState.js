const { response } = require('express')
const { States } = require('../db')
const states = require('../utils/states.json')

 const getState = async(req, res= response) =>{
    const { id, countryId } = req.query

    let data = states.states

    data.forEach(element => {
        States.findOrCreate({
            where: {
                id : element.id,
                state: element.name,
                countryId: `${element.id_country}`
            }
        })
    });

    const AllStates = await States.findAll()

    try {
        if (id) {
            let stateID = AllStates.filter((e) =>
              e.id == id
            );
            stateID.length
              ? res.status(200).send(stateID)
              : res.status(404).send("state Not Found");
          } 
          else if (countryId) {
            let stateIDxcountry = AllStates.filter((e) =>
              e.countryId === countryId
            );
            stateIDxcountry.length
              ? res.status(200).send(stateIDxcountry)
              : res.status(404).send("state Not Found");
          } 
        else {
            res.status(200).send(AllStates);
          }
    } catch (error) {
        console.log(error)
    }

    // mañana cambiar filter por find all where
    
}

module.exports=getState