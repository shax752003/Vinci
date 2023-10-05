// import React from "react";
// import Image from "next/image";
// import { FiHeart } from "react-icons/fi";
// import Wrapper from "@/components/Wrapper";
// import LikedItem from "@/components/LikedItem";
// import { AiOutlineArrowRight } from "react-icons/ai";


// const LikedItems = () => {
//   return (
//     <div className="w-full md:py-20 bg-gray-100">
//       <Wrapper>
//         {/* Liked Items Heading */}
//         <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
//           <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight text-gray-800">
//             Liked Items <FiHeart className="inline-block ml-2" />
//           </div>
//         </div>

//         {/* Liked Items Content */}
//         <div className="flex flex-col lg:flex-row gap-12 py-10">
//           {/* Liked Items */}
//           <div className="flex-[2]">
//             <div className="text-lg font-bold mb-4 text-gray-800">
//               Liked Items
//             </div>
//             {/* Display liked items using CartItem component */}
//             <LikedItem />
//             <LikedItem />
//             <LikedItem/>
//           </div>

//           {/* Summary (Can be different for liked items page) */}
//           <div className="flex-[1]">
            

//             {/* Summary Card (Can be different for liked items page) */}
//             <div className="bg-white p-5 rounded-xl shadow-lg">
//               {/* Summary Details (Can be different for liked items page) */}
//               <div className="flex justify-between mb-4">
//                 <div className="uppercase text-md md:text-lg font-medium text-gray-800">
//                 Get it now
//                 </div>
                
//               </div>

//               {/* Additional Summary Information (Can be different for liked items page) */}
            

//               {/* Checkout Button (Can be different for liked items page) */}
//               <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 hover:bg-opacity-90">
//                 Move to cart <AiOutlineArrowRight className="inline-block ml-2" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </Wrapper>
//     </div>
//   );
// };

// export default LikedItems;

import React from "react";
import { FiHeart } from "react-icons/fi";
import Wrapper from "@/components/Wrapper";
import LikedItem from "@/components/LikedItem";
import { AiOutlineArrowRight } from "react-icons/ai";

const LikedItems = () => {
  return (
    <div className="w-full bg-gray-100">
      <Wrapper>
        <div className="py-10">
          <div className="flex items-center justify-center">
            <div className="text-4xl font-bold text-gray-800">
              Liked Items <FiHeart className="inline-block ml-2 text-5xl" />
            </div>
          </div>

          <div className="mt-10">
            <LikedItem />
            <LikedItem />
            <LikedItem />
           
          </div>

          <div className="flex justify-center mt-12">
            <button className="py-4 px-12 bg-black text-white text-lg font-medium rounded-full hover:bg-opacity-90 transition-transform active:scale-95">
              Move to Cart <AiOutlineArrowRight className="inline-block ml-2" />
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default LikedItems;


