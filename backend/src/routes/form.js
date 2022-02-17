const express = require('express')
const router = express.Router()
const {createForm} = require('../controllers/createform.js')

router.post('/adoption/', async (req,res)=>{
    const {type,questions} = req.body
    if(type && questions){
        return res.status(200).json(await createForm(type,questions))
    }else{
        return res.status(400)
    }
})

module.exports = router