const {Forms, Questions} = require('../db.js')//Requiero  model adoption para hacerle post
const {Formtype} = require('../db.js')
exports.createForm = async (req,res) => {
    const {type,questions,idshelter} = req.body
    try{
        if(type && questions){   
            let ft = await Formtype.findOne({
                where:{
                    id : type
                }
            })
            let f = await Forms.create({
                formName: ft.typeName,
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
            return res.status(201).json(f)    
        }else{
            return res.status(400).send('wrong data')
        }
    }catch(error){
        return res.status(500).send('server error')
    }    
}