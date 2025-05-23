import User from "../model/userModel";



export const register = async(req,res) =>{
    const{name, email, phoneNmber, password}=req.body;
    try{
        const user = await User.Create({
            name, email, phoneNmber, password
        })
        res.status(200).json
    }catch(error){
        console.log(error)
        res.status(500).json({message:error})
    }
}