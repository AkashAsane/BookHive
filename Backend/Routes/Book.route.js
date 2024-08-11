const express=require("express")
const getbook=require("../Controllers/Book.controller")

const router=express.Router()

router.get("/",getbook)

module.exports=router;