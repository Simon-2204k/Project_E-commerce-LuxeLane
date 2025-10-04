import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import FooterFAQ from "./FooterFAQ";

const FooterPanel = () => {
  return (
    <>
      <footer className="bg-black text-white w-full">
        <FooterFAQ />
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-lg font-semibold">About LUXELANE</h2>
            <p className="text-sm text-gray-300">
              LUXELANE is a premium lifestyle brand offering high-quality
              products and exceptional services. Our mission is to deliver
              luxury and comfort in every purchase.
            </p>
            <p className="text-sm text-gray-300">
              We focus on sustainable practices and innovative designs to
              enhance customer experience across all our offerings.
            </p>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
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

            <div className="flex space-x-4 mt-2">
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

        <div className="bg-black border-t border-gray-800 py-4">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm space-y-2 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-1 rounded-full">
                <span className="font-bold text-sm">L</span>
              </div>
              <span>LUXELANE</span>
            </div>
            <div>Copyright 2029© LUXELANE</div>
            <div className="flex space-x-4">
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
