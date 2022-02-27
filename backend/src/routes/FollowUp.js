const express = require('express')
const router = express.Router()

const {addFollowUp} = require('../controllers/addFollowUp')

router.post('/addFollowUp', addFollowUp );

module.exports = router