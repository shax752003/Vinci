import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";



const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
          <ProductDetailsCarousel/>
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
            Dora Maar in an Armchair
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                        Pablo Picasso Painting
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="text-lg font-semibold">
                           MRP : ₹ 1,90,695.00 
                        </div>
                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* PRODUCT SIZE RANGE START */}
                        <div className="mb-10">
                            {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size (in inches)
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            {/* HEADING END */}

                            {/* SIZE START */}
                            <div className="grid grid-cols-3 gap-2">
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                  8 x 12      
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                  12 x 16      
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                  16 x 20      
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                                  20 x 28      
                                </div>
                            </div>
                            {/* SIZE END */}

                            {/* SHOW ERROR START */}
                                <div className="text-red-600 mt-1">
                                    Size selection is required
                                </div>
                            {/* SHOW ERROR END */}
                        </div>
                        {/* PRODUCT SIZE RANGE END */}
                        
                        {/* ADD TO CART BUTTON START */}
                        <button
                            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                        >
                            Add to Cart
                        </button>
                        {/* ADD TO CART BUTTON END */}

                        {/* WHISHLIST BUTTON START */}
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        {/* WHISHLIST BUTTON END */}

                        <div>
                           <div className="text-lg font-bold mb-5">
                           Product Details
                            </div>
                            <div className="text-md mb-5">
                            Dora Maar in an Armchair from the Pablo Picasso Art Paintings Collection is produced on Premium Museum Grade Canvas and Hahnemuhle Fine Art Media. This beauiful Pablo Picasso Art Paintings Print product is made with matte finish and premium quality with vibrant colors. These  Pablo Picasso Art Paintings Prints are produced with the most extreme shading precision and using the most advanced giclee printing technique in the world. 
                            </div>
                            <div className="text-md mb-5">
                            Care Instructions: Must be protected from direct sunlight, extreme temperature, dust and moisture to ensure long life. 
                            </div> 
                        </div>

          </div>
          {/* right column end */}
        </div>

        <RelatedProducts/>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
