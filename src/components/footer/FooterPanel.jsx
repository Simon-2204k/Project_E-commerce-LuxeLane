// Import social media icons and FAQ component
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import FooterFAQ from "./FooterFAQ";

// FooterPanel component to display footer section with FAQ, about info, links, and social media
const FooterPanel = () => {
  return (
    <>
      <footer className="bg-black text-white w-full">
        {/* Collapsible FAQ section */}
        <FooterFAQ />

        {/* About and Quick Links section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* About LUXELANE */}
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-lg sm:text-lg md:text-xl font-semibold">
              About LUXELANE
            </h2>
            <p className="text-sm sm:text-sm md:text-base text-gray-300">
              LUXELANE is a premium lifestyle brand offering high-quality
              products and exceptional services. Our mission is to deliver
              luxury and comfort in every purchase.
            </p>
            <p className="text-sm sm:text-sm md:text-base text-gray-300">
              We focus on sustainable practices and innovative designs to
              enhance customer experience across all our offerings.
            </p>
          </div>

          {/* Quick links and social icons */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-lg sm:text-lg md:text-xl font-semibold">
              Quick Links
            </h2>
            <div className="grid grid-cols-2 gap-2 text-sm sm:text-sm md:text-base text-gray-300">
              <div className="hover:text-gray-400 cursor-pointer">Homepage</div>
              <div className="hover:text-gray-400 cursor-pointer">Products</div>
              <div className="hover:text-gray-400 cursor-pointer">
                Our Amazing Services
              </div>
              <div className="hover:text-gray-400 cursor-pointer">About Us</div>
              <div className="hover:text-gray-400 cursor-pointer">
                Contact Us
              </div>
            </div>

            {/* Social media icons */}
            <div className="flex space-x-4 mt-2 text-sm sm:text-base md:text-lg">
              <div className="hover:text-gray-400 cursor-pointer">
                <FaFacebook />
              </div>
              <div className="hover:text-gray-400 cursor-pointer">
                <FaXTwitter />
              </div>
              <div className="hover:text-gray-400 cursor-pointer">
                <FaInstagram />
              </div>
              <div className="hover:text-gray-400 cursor-pointer">
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="bg-black border-t border-gray-800 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row justify-between items-center text-sm sm:text-sm md:text-base space-y-2 md:space-y-0">
            {/* Logo and brand name */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-1 rounded-full">
                <span className="font-bold text-sm sm:text-sm md:text-base">
                  L
                </span>
              </div>
              <span className="text-sm sm:text-sm md:text-base">LUXELANE</span>
            </div>

            {/* Copyright */}
            <div className="text-sm sm:text-sm md:text-base">
              Copyright 2029© LUXELANE
            </div>

            {/* Social icons repeated for bottom bar */}
            <div className="flex space-x-4 text-sm sm:text-sm md:text-base">
              <div className="hover:text-gray-400 cursor-pointer">
                <FaFacebook />
              </div>
              <div className="hover:text-gray-400 cursor-pointer">
                <FaXTwitter />
              </div>
              <div className="hover:text-gray-400 cursor-pointer">
                <FaLinkedin />
              </div>
              <div className="hover:text-gray-400 cursor-pointer">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterPanel;
