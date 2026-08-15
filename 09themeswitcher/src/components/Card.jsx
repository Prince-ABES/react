import React from "react";

export default function Card() {
  return (
    <div className="w-[280px] max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
      
      <img
        className="w-full h-[160px] object-cover"
        src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="product"
      />

      <div className="p-4">

        <h5 className="text-lg font-semibold text-gray-900">
          Apple Watch Series 7 GPS
        </h5>

        <div className="flex items-center mt-2 mb-4">
          <span className="text-yellow-400 text-sm">
            ★ ★ ★ ★ ☆
          </span>

          <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
            4.0
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            $599
          </span>

          <button className="bg-blue-700 text-white text-sm px-3 py-2 rounded-lg">
            Add to cart
          </button>
        </div>

      </div>
    </div>
  );
}
