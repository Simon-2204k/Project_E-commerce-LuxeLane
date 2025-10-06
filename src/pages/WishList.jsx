import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../feature/wishList";
import { setSelectedProduct } from "../feature/pageDetails";
import logo from "../assets/images/new.png";

const WishList = () => {
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.wishlist.items);

  const handleReadMore = (item) => {
    dispatch(setSelectedProduct(item));
  };

  return (
    <>
      {/* Header with logo and back to home link */}
      <div className="fixed top-0 w-screen h-[10vh] overflow-hidden backdrop-blur-md flex justify-between items-center bg-white/20 border-b border-gray-300 px-10">
        <Link to="/home">
          <img
            src={logo}
            className="h-[25vh] mt-3 -ml-9 object-contain"
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

      {/* Main wishlist container */}
      <div className="min-h-screen bg-white text-black font-sans py-12 px-6">
        <div className="flex justify-end mb-8">
          <Link
            to="/home"
            className="text-black font-semibold hover:text-gray-600 transition"
          >
            ← Go to Home
          </Link>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-8 sm:p-6">
          <h1 className="font-[font1] text-3xl md:text-4xl sm:text-2xl font-bold mb-8 text-black">
            My Wishlist
          </h1>

          {/* Wishlist grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wishlist.length === 0 ? (
              <p className="text-center col-span-full text-gray-500">
                Your wishlist is empty.
              </p>
            ) : (
              wishlist.map((item) => (
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
                    <h2 className="font-[font3] text-lg sm:text-base md:text-lg font-semibold mb-2 text-black">
                      {item.title}
                    </h2>

                    <div
                      className="p-2 bg-amber-50 opacity-70 h-[6vh] rounded-2xl 
          w-[30%] sm:w-[25%] md:w-[20%] lg:w-[10vw] 
          text-center absolute top-[6%] left-[10%] text-xs sm:text-sm md:text-base"
                    >
                      rating : {item.rating.rate}★
                    </div>

                    <p className="text-black font-bold mb-2 text-sm sm:text-base md:text-base">
                      ${item.price}
                    </p>

                    <div className="flex justify-between items-center gap-2">
                      <button
                        onClick={() =>
                          dispatch(removeFromWishlist({ id: item.id }))
                        }
                        className="text-black flex items-center gap-1 sm:gap-2 text-sm sm:text-base hover:text-gray-600 transition"
                      >
                        <FaTrash className="sm:text-base text-sm" /> Remove
                      </button>

                      <Link to="/productsdetails">
                        <button
                          className="bg-black text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base hover:bg-gray-800 transition font-semibold"
                          onClick={() => handleReadMore(item)}
                        >
                          Refer-More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
