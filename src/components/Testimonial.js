import React, { useState } from "react";
import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Testimonial = (props) => {
  const { reviews } = props;
  const [counter, setCounter] = useState(0);

  function leftShiftHandler() {
    
    setCounter((counter - 1 + reviews.length) % reviews.length);

  }

  function rightShiftHandler() {
    setCounter((counter + 1) % reviews.length);

  }

  function surpriseMeHandler() {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setCounter(randomIndex);
  }

  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col items-center justify-center mt-10 p-10 transition-all duration-70      hover:shadow-xl rounded-md">
      <Card review={reviews[counter]} />
      <div className="mt-4 font-bold gap-3 flex justify-center">
        <button
          className="text-center text-violet-300 text-3xl hover:text-violet-500"
          onClick={leftShiftHandler}
        >
          <FiChevronLeft />
        </button>

        <button
          className="text-center text-violet-300 text-3xl hover:text-violet-500"
          onClick={rightShiftHandler}
        >
          <FiChevronRight />
        </button>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-violet-400 capitalize text-white font-bold px-10 py-2 hover:bg-violet-600 transition-all duration-200 rounded-md cursor-pointer"
          onClick={surpriseMeHandler}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
