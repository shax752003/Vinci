import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cartitem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
         <img src="product-1.webp"/>
      </div>
      {/* IMAGE END */}

      <div className="w-full flex flex-col">
            <div className="flex flex-col md:flex-row justify-between">
                  {/* PRODUCT TITLE */}
                  <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                        Dora Maar in an Armchair
                  </div>

                  {/* PRODUCT SUBTITLE */}
                  <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                        Pablo Picasso Painting
                  </div>

                  {/* PRODUCT PRICE */}
                  <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                        MRP : ₹ 1,90,695.00
                  </div>
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-md font-medium text-black/[0.5] hidden md:block">
                        Pablo Picasso Painting   
            </div>

            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                    <div className="flex items-center gap-1">
                        <div className="font-semibold">Size:</div>
                        <select className="hover:text-black">
                            <option value="1">8 x 12</option>
                            <option value="2">12 x 16</option>
                            <option value="3">16 x 20</option>
                            <option value="4">20 x 28</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-1">
                        <div className="font-semibold">Quantity:</div>
                        <select className="hover:text-black">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                </div>
                <RiDeleteBin6Line
                        className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
                    />
            </div>

      </div>
    </div>
  );
};

export default Cartitem;
