import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import listdata from "../assets/list.json";
import Cards from "./Cards";
import axios from "axios"
import { useBooks } from "./Course/Bookcontext";

function Freebook() {

  const{book,setBook}=useBooks()

  useEffect(()=>{
    const getbook=async()=>{
      try {
       const response= await axios.get("http://localhost:4001/book")
       const data=response.data.filter((data) => data.category === "free")
       setBook(data)
      } catch (error) {
        console.log("error while fetching data",error)
      }
    }
    getbook()
},[])

  // const filterData = listdata.filter((data) => data.category === "Free");
 
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container px-4 mx-auto max-w-screen-2xl md:px-20">
        <div>
          <h1 className="font-bold pb-3 text-xl">Free Offered Books</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            eius quas? Fugit labore voluptatibus eos.
          </p>
        </div>

        <div className="container px-4 mx-auto max-w-screen-2xl md:px-20">
          <Slider {...settings}>
            {book.map((item)=>(
                <Cards item={item} key={item.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
