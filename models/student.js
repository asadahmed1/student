require
var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')
SALT_WORK_FACTOR=10

const studentSchema = mongoose.Schema({
    studentName:{
        type:String,
        lowercase:true
    },
    mobile:{
        type:String,
        lowercase:true
    }

})
//encryption on phone
studentSchema.pre("save", function(next){

    //to call schema
    var student = this
    if(!student.isModified('mobile')) return next()

    bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){

        if(err)
        return next (err)

        bcrypt.hash(student.mobile,salt,null,function(err,hash){
            if(err)
            return next (err)

            student.mobile =hash
            next()
        })

    })
})
studentSchema.methods.compareMobile = function(candidateMobile,cb){
    bcrypt.compare(candidateMobile,this.mobile,function(err,isMatch){
        if(err) return cb(err)
        cb(null,isMatch)
    })
}

module.exports = mongoose.model('student',studentSchema)