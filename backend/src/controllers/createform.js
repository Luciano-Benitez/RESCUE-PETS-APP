const {Forms, Questions} = require('../db.js')//Requiero  model adoption para hacerle post
const {Formtype} = require('../db.js')
exports.createForm = async (type,questions) => {
    if(type && questions){
        let q = await Questions.findOne({
            where:{
                id : questions
            }
        })
        let ft = await Formtype.findOne({
            where:{
                id : type
            }
        })
        let f = await Forms.create({
            name: ft.Type,
            formtypeId: ft.id
        })
        
        f.addQuestions(q)
    }
}