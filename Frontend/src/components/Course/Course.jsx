import React, { useEffect, useState } from "react";
import { useBooks } from "./Bookcontext";
import Cards from "../Cards";
import {Link} from "react-router-dom"
import axios from "axios"

function Course() {
  const{book,setBook}=useBooks()

  useEffect(()=>{
      const getbook=async()=>{
        try {
         const response= await axios.get("http://localhost:4001/book")
         console.log(response.data)
         setBook(response.data)
        } catch (error) {
          console.log("error while fetching data",error)
        }
      }
      getbook()
  },[])
  return (
    <>
      <div className="container px-4 mx-auto max-w-screen-2xl md:px-20">
      <div className="pt-20 grid grid-cols-1 md:grid-cols-4    gap-4 ">
            {
                book.map(item=>(
                    <Cards item={item} key={item.id}/>
                ))
            }
        </div>
        <div className="mt-28 items-center text-center justify-center mb-5">
          <h1 className="text-2xl md-text-4xl">
            We are happy you visted <span className="text-pink-800">us :)</span>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quod asperiores natus suscipit enim alias nostrum minus! Aperiam magni dicta dolorem delectus ducimus quisquam dolor, accusantium placeat alias iusto nesciunt?
          </p>
         <Link to="/">
         <button className="bg-orange-600 text-white p-3 rounded-lg mt-4">Back</button>
         </Link>
          
        </div>
       
      </div>
    </>
  );
}

export default Course;
