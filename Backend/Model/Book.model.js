
const mongoose=require("mongoose")


const bookSchema=mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    category:String,
    title:String
})

const Book=mongoose.model("Book",bookSchema)

module.exports= Book