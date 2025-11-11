import React from "react";

import { RiHeartFill } from "@remixicon/react";

export default function Navbar() {
  return (
    <div className="flex pl-20 mt-8 justify-center bg-white">
      <p className="text-[32px] font-bold">SHOP.CO</p>
      <div className="flex  w-80 justify-around text-xs ml-20 pt-3">
        <select className="mb-5" name="ShopOptions" id="shopOptions">
          <option value="Shop">Shop</option>
          <option value="Shop1">Shop1</option>
          <option value="Shop2">Shop2</option>
          <option value="Shop3">Shop3</option>
        </select>
        <p>On Sale</p>
        <p>New Arrivals</p>
        <p>Brand</p>
      </div>
      <div className="w-80 bg-[#F0F0F0] ml-8 h-10 flex align-middle">
        <input
          className="w-100"
          type="search"
          placeholder="Search for products"
        />
      </div>
      <RiHeartFill
        size={36} // set custom `width` and `height`
        color="red" // set `fill` color
        className="my-icon" // add custom class name
      />
    </div>
  );
}
