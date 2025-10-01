import React from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/new.png";
const Cart = () => {
  const cartItems = [
    {
      id: 67,
      title: "Mechanical Keyboard",
      price: 119.99,
      quantity: 1,
      image: "https://source.unsplash.com/featured/?electronics,keyboard",
    },
    {
      id: 23,
      title: "Blue Utility Pinafore Denim Dress",
      price: 76.0,
      quantity: 2,
      image: "https://source.unsplash.com/featured/?fashion,women,dress",
    },
  ];

  const shippingOptions = [
    { option: "free", cost: 0 },
    { option: "standard", cost: 15 },
    { option: "express", cost: 30 },
  ];

  const subtotal = 271.99;
  const total = 286.99;

  return (
    <>
      <div className="fixed top-0 w-screen h-[10vh] overflow-hidden backdrop-blur-md flex justify-between items-center bg-white/20 border-b border-gray-300 px-10">
        <Link to="/home">
          <img
            src={logo}
            className="h-[25vh] mt-3  -ml-9 object-contain"
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
      <div className="min-h-screen bg-white text-black font-sans py-12 px-6 md:px-20">
        <h1 className=" uppercase  w-full font-[font1] text-[10vw] md:text-5xl font-extrabold text-center mb-12">
          your Shopping Cart
        </h1>

        <div className="grid font-[font3] grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-300 text-gray-600 uppercase text-sm">
                  <th className="py-3">Product</th>
                  <th className="py-3">Price</th>
                  <th className="py-3">Quantity</th>
                  <th className="py-3">Total</th>
                  <th className="py-3"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="py-10 flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-30 h-40 object-cover rounded-lg shadow-sm grayscale"
                      />
                      <span className="font-medium text-black">
                        {item.title}
                      </span>
                    </td>
                    <td className="py-4 font-medium text-gray-700">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                          <FaMinus size={12} />
                        </button>
                        <span className="px-3 font-medium">
                          {item.quantity}
                        </span>
                        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                          <FaPlus size={12} />
                        </button>
                      </div>
                    </td>
                    <td className="py-4 font-semibold text-black">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="py-4">
                      <FaTrash className="text-gray-700" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">
            <h2 className="text-2xl font-semibold mb-6 text-black">
              Order Summary
            </h2>

            <div className="flex justify-between mb-4 text-gray-700 font-medium">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="mb-4">
              <h3 className="text-gray-700 mb-2 font-medium">Shipping</h3>
              {shippingOptions.map((s) => (
                <label
                  key={s.option}
                  className="flex justify-between items-center mb-2 cursor-pointer text-gray-800"
                >
                  <input
                    type="radio"
                    name="shipping"
                    className="mr-2 accent-black"
                  />
                  <span className="capitalize">{s.option}</span>
                  <span className="font-medium">
                    {s.cost === 0 ? "Free" : `$${s.cost}`}
                  </span>
                </label>
              ))}
            </div>

            <div className="flex justify-between text-lg font-bold mb-6 text-black">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
