const express = require('express')
const router = express.Router()

const {addFollowUp} = require('../controllers/addFollowUp')
const {editFollowUp} = require('../controllers/editFollowUp')
const {getFollowUpsFromShelter} = require('../controllers/getFollowUps')
const {deleteFollowUp} = require('../controllers/deleteFollowUp')

router.get('/getFollowUps/:shelterId', getFollowUpsFromShelter );
router.post('/addFollowUp', addFollowUp );
router.put('/editFollowUp/:followUpId', editFollowUp );
router.delete('/deleteFollowUp/:followUpId', deleteFollowUp );

module.exports = router