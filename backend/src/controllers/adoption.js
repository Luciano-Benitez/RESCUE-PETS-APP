// const {adoption} = require('../db.js')//Requiero  model adoption para hacerle post

exports.adoption = (data) => {
    if(data){
        adoption.create({
            data_db = data
        })
    }
}