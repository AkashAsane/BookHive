
const Book=require("../Model/Book.model")


const getBook=async(req,res)=>{
    try {
         const  book= await Book.find()
         res.status(200).json(book)
    } catch (error) {
        console.log("Error",error);
        res.json(500).json(error)
    }
}

module.exports=getBook