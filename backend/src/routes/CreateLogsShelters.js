const {Router} = require('express');
const {check} = require('express-validator')
const router = Router();

const {createShelter, getAllShelters} = require('../controllers/CreateLogsShelters')
router.post('/createShelter',
[ check('name','Name is required').not().isEmpty(), 
  check('email','Email is required').not().isEmpty(),
  check('email','Should be an email').isEmail(),
  check('password','Password must be at least 6 characters').isLength({min: 6})
]
,
createShelter);

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