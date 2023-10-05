
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";

const Cart = () => {
  return (
    <div className="w-full md:py-20 bg-gray-100">
      <Wrapper>
        {/* Cart Heading */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight text-gray-800">
            Your Cart <FiShoppingCart className="inline-block ml-2" />
          </div>
        </div>

        {/* Cart Content */}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/* Cart Items */}
          <div className="flex-[2]">
            <div className="text-lg font-bold mb-4 text-gray-800">
              Cart Items
            </div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          {/* Summary */}
          <div className="flex-[1]">
            <div className="text-lg font-bold mb-4 text-gray-800">Summary</div>

            {/* Summary Card */}
            <div className="bg-white p-5 rounded-xl shadow-lg">
              {/* Summary Details */}
              <div className="flex justify-between mb-4">
                <div className="uppercase text-md md:text-lg font-medium text-gray-800">
                  Subtotal
                </div>
                <div className="text-md md:text-lg font-medium">₹ 1,90,695.00</div>
              </div>

              {/* Additional Summary Information */}
              <div className="text-sm md:text-md mb-6">
                The subtotal reflects the total price of your order, including
                duties and taxes, before any applicable discounts. It does not
                include delivery costs and international transaction fees.
              </div>

              {/* Checkout Button */}
              <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 hover:bg-opacity-90">
                Checkout <AiOutlineArrowRight className="inline-block ml-2" />
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Cart;

