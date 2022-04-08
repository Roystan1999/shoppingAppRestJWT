const mongoose=require('mongoose')
const Schema= mongoose.Schema

const userSchema = new Schema(
    {
        fname: {
            type:String,
            required: true,
            minLength:3,
            maxlength:15
        },
        lname:{
            type:String,
            required:true,
            minlength:3,
            maxlength:10
        },
        email: {
            type:String,
            required:true,
            minlength:5,
            maxlength:20
        },
        password: {
            type:String,
            required:true,
            minlength:8,
            maxlength:16
        },
        role:{
            type:String,
            required:true,
            minlength:3,
            maxlength:10
        }
    }
)

module.exports =mongoose.model("users",userSchema)