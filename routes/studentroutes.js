var express = require('express')
var router = express.Router()
var studentController = require('../controllers/studentController')
var courseController = require('../controllers/courseController')
var enrollController = require('../controllers/enrollcontroller')
//student routes
router.post('/addstudent',studentController.Addstudent)


//courses routes
router.post('/addcourse',courseController.Addcourse)

//enroll routes
router.post('/enroll',enrollController.addEnroll)

module.exports = router