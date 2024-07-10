import { Schema, model } from "mongoose";



const userSchema = new Schema({
    name:{type:String, required:true},
    username:{type:String, unique:true,required:true},
    email:{type:String, required:true,unique:true},
    phone:{type:String,unique:true,required:true},
    password:{type:String, required:true, unique:true}

},
{
    timestamps:true
})


export const userModel =model('User',userSchema)