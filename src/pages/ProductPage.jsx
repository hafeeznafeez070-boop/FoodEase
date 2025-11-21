import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api/products";
import { use } from "react";
import bannerImg from "../../public/banner-img.png";
import logo_1 from "../../public/Vector.png";
import logo_2 from "../../public/zara-logo-1 1.png";
import logo_3 from "../../public/gucci-logo-1 1.png";
import logo_4 from "../../public/prada-logo-1 1.png";
import logo_5 from "../../public/Group.png";

function ProductPage() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");
  // useEffect(() => {
  //   getAllProducts()
  //     .then((res) => {
  //       setProducts(res.data);
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       setError("Failed to load products");
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) return <h2 className="p-6">Loading...</h2>;
  // if (error) return <h2 className="p-6 text-red-500">{error}</h2>;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Some Thing Went Wrong");
        setLoading(false);
      });
  }, [loading]);
  console.log(products);
  //if (loading) return <h2 className="p-6">Loading...</h2>;
  //if (error) return <h2 className="p-6 text-red-500">{error}</h2>;
  return (
    // <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    //   {products.map((product) => (
    //     <div
    //       key={product.id}
    //       className="border p-4 rounded-lg shadow hover:shadow-lg transition"
    //     >
    //       <img
    //         src={product.image}
    //         alt={product.title}
    //         className="h-40 mx-auto"
    //       />
    //       <h3 className="mt-2 font-semibold">{product.title}</h3>
    //       <p className="text-green-600 font-bold mt-1">${product.price}</p>
    //     </div>
    //   ))}
    // </div>
    <div>
      <div className=" bg_img_div flex  items-center p-10">
        <div className=" ml-5 lg:w-1/2 w-full">
          <p className=" font-bold text-[64px] leading-16">
            FIND CLOTHES <br />
            THAT MATCHES YOUR STYLE
          </p>
          <p className="text-[16px] opacity-60 mt-[29px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-[16px] text-white rounded-3xl mt-[35px] shadow w-[210px] h-[52px]">
            Shop Now
          </button>
          <div className="flex  mt-7">
            <div className="border-r pr-8 border-[#00000010] ">
              <p className="text-[40px] font-bold ">200+</p>
              <p className="text-[16px] opacity-60">International Brand</p>
            </div>
            <div className="border-r pr-8 pl-8  border-[#00000010] ">
              <p className="text-[40px] font-bold">2,000+</p>
              <p className="text-[16px] opacity-60">High-Quality Products</p>
            </div>
            <div className="pl-8 pr-8">
              <p className="text-[40px] font-bold">30,000+</p>
              <p className="text-[16px] opacity-60">Happy Customers</p>
            </div>
          </div>
        </div>
        <div>{/* <img src={bannerImg} alt="Image" /> */}</div>
      </div>
      <div className="bg-black text-white flex justify-around py-11">
        <div>
          <img src={logo_1} />
        </div>
        <div>
          <img src={logo_2} />
        </div>
        <div>
          <img src={logo_3} />
        </div>
        <div>
          <img src={logo_4} />
        </div>
        <div>
          <img src={logo_5} />
        </div>
      </div>
      {/* {products.map((product, id) => (
        <div key={id}>
          <img src={product.image} />
          <h1>{product.title}</h1>
        </div>
      ))} */}
    </div>
  );
}

export default ProductPage;
