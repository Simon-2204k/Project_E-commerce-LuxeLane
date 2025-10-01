import logo from "../../public/images/new.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const ProductdetailsPage = () => {
     const [activeTab, setActiveTab] = useState("description");
      const [mainImg, setMainImg] = useState(
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=700&auto=format&fit=crop"
      );
    
      const thumbs = [
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=300&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=301&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=302&auto=format&fit=crop",
      ];
  return (
     <>
  {/* Header */}
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

      {/* Main content */}
      <div className="min-h-screen w-full py-12 px-6 font-font6">
        <div className="max-w-screen-2xl mx-[7vw] my-[5vw] bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.25)] overflow-hidden p-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Images */}
            <div className="flex flex-row gap-6">
              <div className="flex-1 w-[25vw]">
                <img
                  src={mainImg}
                  alt="main"
                  className="w-[35vw] rounded-xl shadow-lg border border-gray-300"
                />
                <div className="flex gap-3 mt-4 ml-4 overflow-x-auto">
                  {thumbs.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`thumb-${idx}`}
                      className="w-[7vw] object-cover rounded-lg border border-gray-400 cursor-pointer hover:ring-2 hover:ring-black transition"
                      onClick={() => setMainImg(img)}
                    />
                  ))}
                </div>
              </div>

              {/* Vertical Brand Text */}
              <div className="flex items-center bg-black justify-center w-[25vw] md:w-[20vw] lg:w-[15vw] rounded-xl">
                <h1 className="font-[font3] text-[12vh] md:text-[10vh] font-bold text-white rotate-90">
                  LUXELANE
                </h1>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex-1 mt-6 lg:mt-0 font-[font5]">
              <h1 className="text-3xl md:text-4xl font-font1 font-bold mb-2 text-black">
                Dark Yellow Lace Cut-Out Swing Dress
              </h1>
              <p className="text-2xl font-bold text-black mb-4">$84.00</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Sed egestas, ante et vulputate volutpat, eros pede semper est,
                vitae luctus metus libero eu augue.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block font-medium mb-1 text-black">Size:</label>
                  <select className="border border-gray-400 rounded-md px-3 py-2 w-full md:w-48">
                    <option>Select a size</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium mb-1 text-black">Quantity:</label>
                  <input
                    type="number"
                    defaultValue={1}
                    min={1}
                    className="border border-gray-400 rounded-md px-3 py-2 w-24"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition font-font5 font-semibold">
                  Add to Cart
                </button>
                <button className="bg-gray-200 px-6 py-3 rounded-md hover:bg-gray-300 transition">
                  Add to Wishlist
                </button>
              </div>

              <p className="text-sm text-gray-500">Category: Women</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-screen-2xl -my-[5vw] bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.25)] overflow-hidden p-8">
        <div className="flex border-b border-gray-300 bg-gray-100 mt-12">
          {["description", "additional", "shipping", "reviews"].map((tab) => {
            const label = {
              description: "Description",
              additional: "Additional Info",
              shipping: "Shipping & Returns",
              reviews: "Reviews (2)",
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

        {/* Tab content */}
        <div className="p-8 space-y-6">
          {activeTab === "description" && (
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-300">
              <h2 className="text-2xl font-font4 font-semibold text-black mb-4">
                Product Description
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This beautiful lace cut-out swing dress combines elegance and
                comfort. Perfect for both casual and semi-formal occasions.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Material: 100% Cotton</li>
                <li>Care: Machine wash cold</li>
                <li>Fit: Regular fit</li>
                <li>Length: Knee-length</li>
              </ul>
            </div>
          )}

          {activeTab === "additional" && (
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-300">
              <h2 className="text-2xl font-font4 font-semibold text-black mb-4">
                Additional Information
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Available Colors: Yellow, Red, Blue</li>
                <li>Sizes: Small, Medium, Large</li>
                <li>SKU: DR-0021</li>
                <li>Style: Swing Dress</li>
              </ul>
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

          {activeTab === "reviews" && (
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-300 space-y-4">
              <h2 className="text-2xl font-font4 font-semibold text-black mb-4">
                Customer Reviews
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-100 rounded-xl shadow-inner">
                  <p className="font-medium text-black">Jane Doe</p>
                  <p className="text-gray-700">★★★★☆</p>
                  <p className="text-gray-700 mt-1">
                    Loved the dress! Great fit and fabric.
                  </p>
                </div>
                <div className="p-4 bg-gray-100 rounded-xl shadow-inner">
                  <p className="font-medium text-black">Emily Smith</p>
                  <p className="text-gray-700">★★★★★</p>
                  <p className="text-gray-700 mt-1">
                    Beautiful color and very comfortable.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductdetailsPage
