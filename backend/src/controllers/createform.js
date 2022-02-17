const {Forms, Questions} = require('../db.js')//Requiero  model adoption para hacerle post
const {Formtype} = require('../db.js')
exports.createForm = async (type,questions,idshelter) => {
    if(type && questions){
        
        let ft = await Formtype.findOne({
            where:{
                id : type
            }
        })
        let f = await Forms.create({
            name: ft.Type,
            formtypeId: ft.id,
            shelterId : idshelter
        })
        if(Array.isArray(questions)){
            questions.map(async question => {
                let q = await Questions.findOne({
                    where:{
                        id : question
                    }
                })
                f.addQuestions(q)
            })
        }
        return f
    }
}