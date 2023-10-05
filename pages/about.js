// pages/about.js
import React from "react";
import Wrapper from "@/components/Wrapper";
import AboutComponent from "@/components/About";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
        
      <Wrapper className="flex-grow">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8"> {/* Modified max-width */}
          <AboutComponent />
        </div>
      </Wrapper>

      <div className="bg-white py-10">
        <Wrapper>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Our Vision and Mission
          </h2>
          <p className="text-gray-700">
            We strive to provide the best experience to our customers by
            offering a curated collection of artwork and ensuring exceptional
            customer service. Our mission is to make art accessible to all and
            promote talented artists globally.
          </p>
        </Wrapper>
      </div>
    </div>
  );
};

export default AboutPage;


