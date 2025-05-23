import express from "express"
import { register } from "../controller/userController.js";


const userRoutes = express.Router();

//get


//post

userRoutes.post("/register",register)

//userRoutes.post("/send-message",)
// userRoutes.post("/register",(req,res)=>{
    //const{name}=req.body;
    //res.status(200).json({data:`Welcome ${name}`})



export default userRoutes
