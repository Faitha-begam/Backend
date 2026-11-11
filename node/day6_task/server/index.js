import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import route from './routes/studentRoutes.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/studentdata',route)

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log('server running successfully on...', PORT);
})

// http://localhost:5000/api/studentData