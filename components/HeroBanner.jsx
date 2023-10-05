import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importing carousel CSS styles
import { Carousel } from "react-responsive-carousel"; // Importing Carousel component from react-responsive-carousel
import { BiArrowBack, BiChevronLeft, BiChevronRight } from "react-icons/bi"; // Importing arrow icon from react-icons


const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
      {/* Carousel Component */}
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          /* Customizing previous arrow */
          <div
            onClick={clickHandler}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer hover:text-gray-800"
          >
            <BiChevronLeft className="text-3xl" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          /* Customizing next arrow */
          <div
            onClick={clickHandler}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer hover:text-gray-800"
          >
            <BiChevronRight className="text-3xl" />
          </div>
        )}
      >
        {/* Carousel Slides */}
        <div>
          <img
            src="/slide-1.jpg"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
          Shop Unique Artworks
          </div>
        </div>

        <div>
          <img
            src="/slide-2.jpg"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
          Explore Exquisite Paintings
          </div>
        </div>

        <div>
          <img
            src="/slide-3.jpg"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
          Discover Masterful Sculptures
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;











