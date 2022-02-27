const {FollowUp, FollowUpStatus, Profiles, Pets  } = require('../db')
// const {Adoptions, Requests, Shelter} = require('../db')


 async function getFollowUpsFromShelter (req, res) {
    let {shelterId} = req.params;

    try {   
        const allFollowUps = await FollowUp.findAll({
            where: {
                shelterId : shelterId
            }
        },
        {
            include: [{
                model: FollowUpStatus, 
                attributes: ['followUpStatus'],
            



            }]
            
          });
        res.status(200).json(allFollowUps);
        
    } catch (error) {
        console.log(error);
        res.json("Didn't found any follow ups");
    }   
};

module.exports = {getFollowUpsFromShelter}