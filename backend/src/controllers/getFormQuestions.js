const {Forms,Questions} = require('../db')

exports.getFormQuestions = async(req,res)=>{
    const {formid} = req.params
    let formquestions = await Forms.findAll({
        where: {
            id: formid
        },
        include : {
            model: Questions,
            through: {
                attributes :[]
            }
        }
    })
    return res.status(200).json(formquestions)
}