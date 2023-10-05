
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";


const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <Wrapper className="flex flex-col md:flex-row justify-between py-8">
        <div className="flex flex-col md:w-2/3">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                Discover
              </div>
              <div className="text-sm text-gray-400 hover:text-white cursor-pointer">
                Paintings
              </div>
              <div className="text-sm text-gray-400 hover:text-white cursor-pointer">
                Sculptures
              </div>
              <div className="text-sm text-gray-400 hover:text-white cursor-pointer">
                Artists
              </div>
              <div className="text-sm text-gray-400 hover:text-white cursor-pointer">
                Collections
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                Help & Info
              </div>
              <div className="text-sm text-gray-400 hover:text-white cursor-pointer">
                Shipping & Delivery
              </div>
              <div className="text-sm text-gray-400 hover:text-white cursor-pointer">
                Returns & Exchanges
              </div>
              <div className="text-sm text-gray-400 hover:text-white cursor-pointer">
                FAQ
              </div>
              <div className="text-sm text-gray-400 hover:text-white cursor-pointer">
                Contact Us
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-end gap-5">
          <div
            onClick={() => window.open("https://facebook.com", "_blank")}
            className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white cursor-pointer"
          >
            <FaFacebookF size={20} />
          </div>
          <div
            onClick={() => window.open("https://twitter.com", "_blank")}
            className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white cursor-pointer"
          >
            <FaTwitter size={20} />
          </div>
          <div
            onClick={() => window.open("https://youtube.com", "_blank")}
            className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white cursor-pointer"
          >
            <FaYoutube size={20} />
          </div>
          <div
            onClick={() => window.open("https://instagram.com", "_blank")}
            className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white cursor-pointer"
          >
            <FaInstagram size={20} />
          </div>
        </div>
      </Wrapper>

      <Wrapper className="flex flex-col md:flex-row justify-between py-4">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-xs text-gray-400 text-center md:text-left">
            © 2023 Vinci. All Rights Reserved
          </div>

          <div className="flex items-center">
            <div className="text-xs text-gray-400">
              Developed by shax752003
            </div>

            <img
              src="/sha.png"
              alt="Your Logo"
              className="ml-2 w-16 h-16 md:w-20 md:h-20"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-center md:text-left">
          <div className="text-gray-400 hover:text-white cursor-pointer">
            Terms of Use
          </div>
          <div className="text-gray-400 hover:text-white cursor-pointer">
            Privacy Policy
          </div>
          <div className="text-gray-400 hover:text-white cursor-pointer">
            Return Policy
          </div>
          <div className="text-gray-400 hover:text-white cursor-pointer">
            Careers
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
