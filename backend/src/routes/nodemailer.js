const express = require('express')
const router = express.Router()

const { sendEmailExample } = require('../controllers/sendEmailExample')

router.post('/nodemailer/example', sendEmailExample );

module.exports = router
