"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          // centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  const data = [
    {
      name: "A",
      age: 20,
      review:
        "Hello i am fahad and i want to say that styling is fun and i love it.",
      img: "./images/product-1.jpg", // Replace with a valid image URL
    },
    {
      name: "B",
      age: 25,
      review:
        "GST Registration was never this easy, Register your sales tax with Befiler Now.  ",
      img: "./images/product-2.jpg", // Replace with a valid image URL
    },
    {
      name: "C",
      age: 30,
      review:
        "GST Registration was never this easy, Register your sales tax with Befiler Now",
      img: "./images/product-3.jpg", // Replace with a valid image URL
    },
  ];

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20 ">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div className="m-5 bg-white h-[450px] text-black rounded-xl max-w-sm overflow-hidden shadow-lg transition duration-300 transform hover:scale-105">
              <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                <img
                  src={d.img}
                  className="w-44 h-44 rounded-full object-cover"
                  alt={d.name}
                />
              </div>
              <div className="flex flex-col justify-center items-center   p-5">
                <p className="text-lg font-semibold">{d.name}</p>
                <p className="text-center">Age: {d.age}</p>
                <p className="text-gray-800">{d.review}</p>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default carousel;

























