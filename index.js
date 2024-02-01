import express from 'express'
import APPROUTES from './src/routes/index.js'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(APPROUTES)
app.listen(PORT,()=>{console.log(`app is listening to  ${PORT}`)})