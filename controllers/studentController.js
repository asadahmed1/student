const studentModel = require('../models/student')
const Addstudent = (req,res)=>{
    let newStudent = new studentModel(req.body.student)
    newStudent.save((err,student)=>{
        if(err){
            res.status(500).json({
                message:"some technical problem"
            })
        }else{
            res.status(200).json({
                message:"some technical problem",student
            })
        }
    })
}

module.exports = {
    Addstudent
}