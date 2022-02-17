const {Router} = require('express');
const router = Router();

const {createShelter, getAllShelters} = require('../controllers/CreateLogsShelters')
router.post('/createShelter', createShelter);

router.get('/shelters', async (req,res) =>{
    const { name } = req.query
    let allShelters = await getAllShelters();
    if(name){
        const sheltersByName = await getAllShelters();
        let foundSheltersDB = sheltersByName.filter(el => el.name.toLowerCase().includes(name.toLocaleLowerCase()));
        if(foundSheltersDB){
            res.status(200).send(foundSheltersDB);
        } else{
            res.status(400).json('Sorry, Shelter not found')
        }
    } else{
        res.status(200).send(allShelters);
    } 
})

module.exports = router;