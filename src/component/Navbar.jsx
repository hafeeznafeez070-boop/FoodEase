import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex pl-20 mt-8 justify-center">
      <p className="text-[32px] font-bold">SHOP.CO</p>
      <div className="flex  w-80 justify-around text-xs ml-20 pt-3">
        <p>shop</p>
        <p>On Sale</p>
        <p>New Arrivals</p>
        <p>Brand</p>
      </div>
      <div className="w-80 bg-[#F0F0F0] ml-8 h-10 flex align-middle">
        <input type="search" placeholder="Search for products" />
      </div>
      <FaShoppingCart />
    </div>
  );
}
