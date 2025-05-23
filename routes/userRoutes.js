import express from "express"
import { register } from "./controller/userController";

const userRoutes = express.Router();

//get


//post

userRoutes.post("/register",(req,res)=>{
    //const{name}=req.body;
    //res.status(200).json({data:`Welcome ${name}`})
    userRoutes.post("/register",register)
})




export default userRoutes
