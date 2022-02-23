const express = require('express')
const router = express.Router()
const {createForm} = require('../controllers/createform.js')
const {sendAdoption } = require('../controllers/sendAdoption.js')
const {sendRequest} = require('../controllers/sendRequest.js')
const {getForm} = require('../controllers/getForm.js')
const {getFormtypes} = require('../controllers/getFormtypes.js')
const {getFormQuestions} = require('../controllers/getFormQuestions.js')

router.post('/createForm/', createForm)

router.post('/sendAdoption/', sendAdoption)

router.post('/sendRequest/', sendRequest)

router.get('/forms/:userid', getForm)

router.get('/formtypes', getFormtypes)

router.get('/formquestions/:formid', getFormQuestions)

module.exports = router