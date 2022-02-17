const express = require('express')
const router = express.Router()
const {createForm} = require('../controllers/createform.js')
const {sendAdoption } = require('../controllers/sendAdoption.js')
const {sendRequest} = require('../controllers/sendRequest.js')

router.post('/createForm/', async (req,res)=>{
    const {type,questions,idshelter} = req.body
    if(type && questions && idshelter){
        return res.status(201).json(await createForm(type,questions,idshelter))
    }else{
        return res.status(400)
    }
})

router.post('/sendAdoption/', async (req,res) => {
    const {idform,idpet,answer} = req.body
    if(idform && idpet && answer){
        return res.status(201).json(await sendAdoption(idform,idpet,answer))
    }else{
        return res.status(400)
    }
})

router.post('/sendRequest/', async (req,res) => {
    const {idform,answer} = req.body
    if(idform && answer){
        return res.status(201).json(await sendRequest(idform,answer))
    }else{
        return res.status(400)
    }
})

module.exports = router