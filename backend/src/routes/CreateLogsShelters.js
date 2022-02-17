const {Router} = require('express');
const router = Router();

const {createShelter} = require('../controllers/CreateLogsShelters')
router.post('/createShelter', createShelter);

module.exports = router;