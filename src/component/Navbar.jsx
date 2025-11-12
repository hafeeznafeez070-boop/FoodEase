import React from "react";

export default function Navbar() {
  return (
    <div className="lg:flex pl-20 mt-8 justify-center bg-white hidden">
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
      <i className="ri-user-2-line"></i>{" "}
    </div>
  );
}
