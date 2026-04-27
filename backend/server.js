import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import dns from 'dns'
import habitRoutes from "./routes/habitRoutes.js"
dns.setDefaultResultOrder('ipv4first')
dns.setServers(['8.8.8.8', '8.8.4.4'])

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/habits", habitRoutes)


mongoose.connect(process.env.MONGO_URI,{

     serverSelectionTimeoutMS: 10000,
  ssl: true,
  tls: true,
    
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Connection error:', err))
  

app.get('/', (req, res) => {
  res.json({ message: 'Habit tracker API is running' })
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})