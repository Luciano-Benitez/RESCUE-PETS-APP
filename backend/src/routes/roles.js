const express = require('express')
const router = express.Router()
const {Roles } = require("../db");
const {postRole} = require('../controllers/postRole.js')

router.get('/roles', async (req,res)=>{
    let allRoles = await Roles.findAll();
    console.log(allRoles)
    if (allRoles){
        res.status(200).send(allRoles)
    } else {
        res.status(400).json('Sorry, there is no roles')
    }
})

router.post('/roles', async(req, res) =>{
    const {roleName} = req.body
    if(roleName){
        return res.status(201).json(await postRole(roleName))
    }else{
        return res.status(400)
    }
})



module.exports = router