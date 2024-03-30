"use client"

import Image from "next/image";
import { useState } from "react";

export const Carousel = ({ images }: any) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const goToPrev = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    };
  
    return (
      <div className="relative w-[300px]">

        <div className="overflow-hidden">

          <div className="flex relative w-[300px] h-full  mx-auto transition-transform duration-300 ease-in-out transform -translate-x-full">
            {images.map((image: any, index: any) => (
              <div key={index} className="flex items-center gap-4 w-full h-[400px]">
                <Image
                  src={image.url}
                  alt={`Image ${index + 1}`}
                  fill
                  className={`transition-transform ease-in-out transform shadow-lg rounded-md ${
                    index === currentIndex
                      ? "translate-x-full opacity-[20px]"
                      : "translate-x-0 opacity-100"
                  }`}
                />
              </div>
            ))}
          </div>

        </div>
  
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        >
          {"<"}
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        >
          {">"}
        </button>
      </div>
    );
  };