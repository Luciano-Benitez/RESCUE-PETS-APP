const express = require('express')
const router = express.Router()

const {addFollowUp} = require('../controllers/addFollowUp')
const {getFollowUpsFromShelter} = require('../controllers/getFollowUps')

router.post('/addFollowUp', addFollowUp );
router.get('/getFollowUps/:shelterId', getFollowUpsFromShelter );

module.exports = router