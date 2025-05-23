import express from "express"
import dotenv from "dotenv"
dotenv.config()

import cors from "cors"
import connectDB from "./database/connectDb.js"
import userRoutes from "./routes/userRoutes.js"


const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/user",userRoutes)

app.get("/",(req,res)=>{
    //const{name}=req.body;
    res.status(200).json({Message:"Api Successfully loaded"})
})
app.get("/api/heart-beat",(req,res)=>{
    res.status(200).json({data:"Heart beat was sucessfull"})
})

app.listen(process.env.PORT, ()=>{
    console.log(`server running successfully at port ${process.env.PORT}`)
})

connectDB();
