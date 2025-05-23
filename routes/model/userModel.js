import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name:{type:String},
        email:{type:String},
        phoneNumber:{type:Number, unique:true,required:true},
        password:{type:String}
    },
    {
        timestamps:true
    }
)

const User = mongoose.model("users",userSchema)
export default User