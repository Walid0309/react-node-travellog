const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const cors = require('cors')
const morgan = require("morgan")
const helmet= require("helmet")

dotenv.config({
  path: './config/config.env'
})

connectDB()
const app = express()

app.use(morgan('common'))
app.use(helmet())
app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000

app.listen(PORT)
