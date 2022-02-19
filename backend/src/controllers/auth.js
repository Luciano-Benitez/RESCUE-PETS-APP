const { Users } = require("../db");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const { generateJWT } = require("../../helpers/jwt");
const { response } = require("express");


exports.loginUser = async(req, res= response) =>{

    const {email, password}= req.body


    try {
        
        const User= await Users.findOne({
            where:{
                email: email
            }
        })
       
        if(!User){
            return res.status(400).json({
                ok: false,
                msg: 'User or Password is invalid'
            })
        }

        
        const validPassword= bcrypt.compareSync(password,User.password)

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'User or Password is invalid'
            })
        }

        const token = await generateJWT(User.id, User.email)

        res.json({
            ok: true,
            email,
            token
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error connecting to the database'
        })
    }
    
}

exports.revalidateToken= async(req, res= response) =>{
    const id= req.id
    const email= req.email

    const token = await generateJWT(id, email)

    res.json({
        ok: true,
        token
    })
}