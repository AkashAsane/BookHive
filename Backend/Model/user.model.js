const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minlength:8
    }
})

const userModel=mongoose.model("User",UserSchema)

module.exports=userModel