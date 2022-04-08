const mongoose=require('mongoose')
const Schema= mongoose.Schema

//defining the schema
const productSchema = new Schema({
    pName:{
        type:String,
        required:true
    },
    pDesc:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
})


//exporting the model
module.exports = mongoose.model('Products', productSchema) //collection name , schema name
