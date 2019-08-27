# Student form USing Composite ,foreign keys,Slat and hash encryption 

## Add Student
## route:
## Request: Post
## Route :localhost:5000/api/addstudent
## data:
{
	"student":{
		"studentName":"bilal",
		"mobile":"1gerefdsew234"
	}
}


## Add Course
## route:
## Request: Post
## Route :localhost:5000/api/addcourse
## data:
{
	"course":{
		"courseCode":"68998",
		"courseName":"physics"
	}
}

## Enrollment in course
## Request: Post
## Route :localhost:5000/api/enroll
## data:
{
	"enroll":{
		"StudId":"5d63c38ce128671484182f0f",
		"CId":"5d63c4ade128671484182f10"
	}
}