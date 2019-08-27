const courseModel = require('../models/course')
const Addcourse = (req,res)=>{
    let newCourse = new courseModel(req.body.course)
    newCourse.save((err,course)=>{
        if(err){
            res.status(500).json({
                message:"some technical problem"
            })
        }else{
            res.status(200).json({
                message:"some technical problem",course
            })
        }
    })
}

module.exports = {
    Addcourse
}