import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/database.js'
import authRouter from './routes/authRoutes.js'
import bookRouter from './routes/bookRoutes.js'


dotenv.config()
connectDB()

const app = express();

app.use(express.json());
app.use(cors())

app.use("/api/auth/",authRouter)
app.use("/api/books/",bookRouter)

const PORT = process.env.PORT || 5000

app.get("/",(req,res)=>{
    res.send("SERVER is live")
})

app.listen(PORT,()=>{
    console.log(`Server is connected on : http://localhost:${PORT}`);
    
})