import React from "react";
import "./Marquee.css";

const Marquee = () => {
  return (
    <div className="container mx-auto px-4 sm:px-12 py-8">
      <h1 className="text-center font-bold text-4xl tracking-wider">
        Infinite Scroll Carousel
      </h1>
      <p className="text-center">
        Best suited for marquee of logos and small pictures
      </p>

      {/* Carousel 1 */}
      <h1 className="mt-12 font-semibold mb-4 text-xl">
        1. Carousel with scroll and slide-track
      </h1>
      <div className="slider">
        <div className="slide-track">
          <div className="slide bg-red-500">1</div>
          <div className="slide bg-purple-500">2</div>
          <div className="slide bg-blue-500">3</div>
          <div className="slide bg-indigo-500">4</div>
          <div className="slide bg-pink-500">5</div>
          <div className="slide bg-green-500">6</div>
          <div className="slide bg-yellow-500">7</div>
          <div className="slide bg-red-500">8</div>
          <div className="slide bg-gray-500 text-white">9</div>
          <div className="slide bg-blue-800">0</div>
          {/* Same 9 slides doubled (duplicate) */}
          <div className="slide bg-red-500">1</div>
          <div className="slide bg-purple-500">2</div>
          <div className="slide bg-blue-500">3</div>
          <div className="slide bg-indigo-500">4</div>
          <div className="slide bg-pink-500">5</div>
          <div className="slide bg-green-500">6</div>
          <div className="slide bg-yellow-500">7</div>
          <div className="slide bg-red-500">8</div>
          <div className="slide bg-gray-500 text-white">9</div>
          <div className="slide bg-blue-800">0</div>
        </div>
      </div>

      {/* Carousel 2 */}
      <h1 className="mt-12 mb-4 font-semibold text-xl">
        2. Carousel 2 with scroll2 and slide-track2
      </h1>
      <div className="slider">
        <div className="slide-track2">
          <div className="slide bg-red-500">1</div>
          <div className="slide bg-purple-500">2</div>
          <div className="slide bg-blue-500">3</div>
          <div className="slide bg-green-500">4</div>
          <div className="slide bg-pink-500">5</div>

          {/* Same 5 slides doubled (duplicate) */}
          {/* <div className="slide bg-red-500">1</div>
          <div className="slide bg-purple-500">2</div>
          <div className="slide bg-blue-500">3</div>
          <div className="slide bg-green-500">4</div>
          <div className="slide bg-pink-500">5</div> */}
          {/* Same 5 slides tripled (duplicate 2) */}
          {/* <div className="slide bg-red-500">1</div>
          <div className="slide bg-purple-500">2</div>
          <div className="slide bg-blue-500">3</div>
          <div className="slide bg-green-500">4</div>
          <div className="slide bg-pink-500">5</div> */}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
