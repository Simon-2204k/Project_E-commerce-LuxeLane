import React from "react";
import { FaTrash, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/new.png";
const WishList = () => {
  const wishlist = [
    {
      id: 1,
      title: "Dark Yellow Lace Swing Dress",
      price: 84.0,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=700&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Elegant Mechanical Keyboard",
      price: 120.0,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=701&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Blue Denim Pinafore Dress",
      price: 76.0,
      rating: 3,
      image:
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=702&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <div className="fixed top-0 w-screen h-[10vh] overflow-hidden backdrop-blur-md flex justify-between items-center bg-white/20 border-b border-gray-300 px-10">
        <Link to="/home">
          <img
            src={logo}
            className="h-[25vh] mt-3  -ml-9 object-contain" // logo taller than header
            alt="luxelane"
          />
        </Link>

        <Link
          to="/home"
          className="text-black font-semibold hover:text-gray-700 transition"
        >
          ← Go to Home
        </Link>
      </div>
      <div className="min-h-screen bg-white text-black font-sans py-12 px-6">
        {/* Go Home */}
        <div className="flex justify-end mb-8">
          <a
            href="/"
            className="text-black font-semibold hover:text-gray-600 transition"
          >
            ← Go to Home
          </a>
        </div>

        {/* Main container */}
        <div className="max-w-screen-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-8">
          <h1 className="font-[font1]  text-3xl md:text-4xl font-bold mb-8 text-black">
            My Wishlist
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden relative hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover grayscale"
                />
                <div className="p-4">
                  <h2 className="font-[font3] text-lg font-semibold mb-2 text-black">
                    {item.title}
                  </h2>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < item.rating ? "text-gray-900" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-black font-bold mb-2 text-sm sm:text-base md:text-base">
                    ${item.price}
                  </p>
                  <div className="flex justify-between items-center gap-2">
                    <button className="text-black flex items-center gap-1 sm:gap-2 text-sm sm:text-base hover:text-gray-600 transition">
                      <FaTrash className="sm:text-base text-sm" /> Remove
                    </button>
                    <button className="bg-black text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base hover:bg-gray-800 transition font-semibold">
                      Refer-More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
