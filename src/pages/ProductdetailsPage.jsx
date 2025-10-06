import logo from "../assets/images/new.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFunctionality } from "../feature/cartFuncSlice";

const ProductdetailsPage = () => {
  const dispatch = useDispatch();

  // Get selected product details from Redux store
  const productDetails = useSelector((state) => state.product.selectedProduct);

  const [activeTab, setActiveTab] = useState("description"); // Track active tab
  const [quantity, setQuantity] = useState(1); // Quantity for cart

  // Dispatch action to add product to cart
  const handleAddToCart = () => {
    dispatch(addFunctionality({ ...productDetails, quantity }));
  };

  if (!productDetails) return null; // Guard clause if no product selected

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

      {/* Main product details section */}
      <div className="min-h-screen w-full py-12 px-6 font-font6">
        <div className="max-w-screen-2xl mx-[7vw] my-[5vw] bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.25)] overflow-hidden p-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Product image and branding */}
            <div className="flex flex-row gap-6">
              <div className="flex-1 w-[25vw]">
                <img
                  src={productDetails.image}
                  alt={productDetails.title}
                  className="w-[35vw] rounded-xl shadow-lg border border-gray-300"
                />
              </div>

              <div className="flex items-center bg-black justify-center w-[25vw] md:w-[20vw] lg:w-[15vw] rounded-xl">
                <h1 className="font-[font3] text-[12vh] md:text-[10vh] font-bold text-white rotate-90">
                  LUXELANE
                </h1>
              </div>
            </div>

            {/* Product info, price, description, options */}
            <div className="flex-1 mt-6 lg:mt-0 font-[font5]">
              <h1 className="text-3xl md:text-4xl font-font1 font-bold mb-2 text-black">
                {productDetails.title}
              </h1>
              <p className="text-2xl font-bold text-black mb-4">
                ${productDetails.price}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {productDetails.description}
              </p>

              {/* Product size and quantity selection */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block font-medium mb-1 text-black">
                    Size:
                  </label>
                  <select className="border border-gray-400 rounded-md px-3 py-2 w-full md:w-48">
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
                    className="border border-gray-400 rounded-md px-3 py-2 w-24"
                  />
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <button
                  className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition font-font5 font-semibold"
                  onClick={handleAddToCart} // Add product to cart
                >
                  Add to Cart
                </button>
                <button className="bg-gray-200 px-6 py-3 rounded-md hover:bg-gray-300 transition">
                  Add to Wishlist
                </button>
              </div>

              <p className="text-sm text-gray-500">
                Category: {productDetails.category}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs for Description & Shipping */}
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
                onClick={() => setActiveTab(tab)} // Switch active tab
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

        {/* Tab content */}
        <div className="p-8 space-y-6">
          {activeTab === "description" && (
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-300">
              <h2 className="text-2xl font-font4 font-semibold text-black mb-4">
                Product Description
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {productDetails.description}
              </p>
            </div>
          )}

          {activeTab === "shipping" && (
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-300">
              <h2 className="text-2xl font-font4 font-semibold text-black mb-4">
                Shipping & Returns
              </h2>
              <p className="text-gray-700 mb-2">
                Standard Shipping: 3-5 business days <br />
                Express Shipping: 1-2 business days
              </p>
              <p className="text-gray-700">
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
