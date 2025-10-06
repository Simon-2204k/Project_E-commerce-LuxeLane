import logo from "../assets/images/new.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFunctionality } from "../feature/cartFuncSlice";
import { addToWishlist } from "../feature/wishList"; // ✅ Import wishlist action

const ProductdetailsPage = () => {
  const dispatch = useDispatch();

  // Get the selected product from Redux
  const productDetails = useSelector((state) => state.product.selectedProduct);

  // Local state
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);

  // Guard clause if no product is selected
  if (!productDetails) return null;

  // Add to Cart handler
  const handleAddToCart = () => {
    dispatch(addFunctionality({ ...productDetails, quantity }));
  };

  // Add to Wishlist handler
  const handleAddToWishlist = () => {
    dispatch(addToWishlist(productDetails));
  };

  return (
    <>
      {/* Header */}
      <div className="fixed top-0 w-screen h-[10vh] overflow-hidden backdrop-blur-md flex justify-between items-center bg-white/20 border-b border-gray-300 px-10 z-50">
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

      {/* Main Product Section */}
      <div className="min-h-screen w-full py-12 px-6 font-font6">
        <div className="max-w-screen-2xl mx-[7vw] my-[5vw] bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.25)] overflow-hidden p-8 sm:mr-[2vw] md:mr-[4vw]">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Product Image & Branding */}
            <div className="flex flex-row gap-6">
              <div className="flex-1 w-[25vw]">
                <img
                  src={productDetails.image}
                  alt={productDetails.title}
                  className="w-[35vw] rounded-xl shadow-lg border border-gray-300 md:w-[30vw] sm:w-[45vw]"
                />
              </div>
              <div className="flex items-center bg-black justify-center w-[25vw] md:w-[20vw] sm:w-[18vw]">
                <h1 className="font-[font3] text-[12vh] md:text-[9vh] sm:text-[7vh] xs:text-[20px] text-white rotate-90">
                  LUXELANE
                </h1>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex-1 mt-6 lg:mt-0 font-[font5]">
              <h1 className="text-3xl md:text-2xl sm:text-xl lg:text-4xl font-font1 font-bold mb-2 text-black">
                {productDetails.title}
              </h1>

              <p className="text-2xl md:text-xl sm:text-lg lg:text-2xl font-bold text-black mb-4">
                ${productDetails.price}
              </p>

              <p className="text-gray-700 text-sm md:text-[0.875rem] sm:text-[0.75rem] lg:text-lg mb-6 leading-relaxed">
                {productDetails.description}
              </p>

              {/* Size & Quantity */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block font-medium mb-1 text-black">
                    Size:
                  </label>
                  <select className="border border-gray-400 rounded-md px-3 py-2 w-full md:w-48 text-sm sm:text-xs">
                    <option>Select a size</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1 text-black">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    value={quantity}
                    min={1}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="border border-gray-400 rounded-md px-3 py-2 w-24 text-sm sm:text-xs"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <button
                  className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition font-font5 font-semibold text-sm sm:text-xs"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <button
                  className="bg-gray-200 px-6 py-3 rounded-md hover:bg-gray-300 transition text-sm sm:text-xs"
                  onClick={handleAddToWishlist} // ✅ Add to wishlist
                >
                  Add to Wishlist
                </button>
              </div>

              <p className="text-sm md:text-xs sm:text-[0.7rem] lg:text-sm text-gray-500">
                Category: {productDetails.category}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-screen-2xl -my-[5vw] bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.25)] overflow-hidden p-8">
        <div className="flex border-b border-gray-300 bg-gray-100 mt-12">
          {["description", "shipping"].map((tab) => {
            const label = {
              description: "Description",
              shipping: "Shipping & Returns",
            }[tab];
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 text-center font-medium text-sm transition-all ${
                  activeTab === tab
                    ? "border-b-4 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="p-8 space-y-6">
          {activeTab === "description" && (
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-300">
              <h2 className="text-2xl md:text-xl sm:text-lg font-font4 font-semibold text-black mb-4">
                Product Description
              </h2>
              <p className="text-gray-700 text-sm md:text-[0.875rem] sm:text-[0.75rem] leading-relaxed mb-4">
                {productDetails.description}
              </p>
            </div>
          )}
          {activeTab === "shipping" && (
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-300">
              <h2 className="text-2xl md:text-xl sm:text-lg font-font4 font-semibold text-black mb-4">
                Shipping & Returns
              </h2>
              <p className="text-gray-700 text-sm md:text-[0.875rem] sm:text-[0.75rem] mb-2">
                Standard Shipping: 3-5 business days <br />
                Express Shipping: 1-2 business days
              </p>
              <p className="text-gray-700 text-sm md:text-[0.875rem] sm:text-[0.75rem]">
                Returns accepted within 30 days of receipt. Items must be unworn
                and in original packaging.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductdetailsPage;
