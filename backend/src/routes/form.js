const express = require('express')
const router = express.Router()
const {createForm} = require('../controllers/createform.js')
const {sendAdoption } = require('../controllers/sendAdoption.js')
const {sendRequest} = require('../controllers/sendRequest.js')
const {getForm} = require('../controllers/getForm.js')
const {getFormtypes} = require('../controllers/getFormtypes.js')
const {getFormQuestions} = require('../controllers/getFormQuestions.js')
const { deleteAnswerAdoption } = require('../controllers/deleteAnswerAdoption.js')
const { getFormOfShelter } = require('../controllers/getFomOfShelter.js')

router.post('/createForm/', createForm)

router.post('/sendAdoption/', sendAdoption)

router.post('/sendRequest/', sendRequest)

router.get('/forms/:userid', getForm)

router.get('/formtypes', getFormtypes)

router.get('/formquestions/:shelterid', getFormQuestions)

router.delete('/deleteAnswerForm/:type', deleteAnswerAdoption)

router.get('/getFormOfShelter/:userid', getFormOfShelter)

module.exports = router