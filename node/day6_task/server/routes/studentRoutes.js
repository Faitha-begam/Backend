import express from 'express'
import addStudent from '../controllers/addStudent.js'


const route = express.Router()
route.get('/test',addStudent)

export default route

// http://localhost:5000/api/studentData/test