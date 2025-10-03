import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import Header from "../components/extra/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFunctionality,
  increaseQuantity,
  decreaseQuantity,
} from "../feature/cartFuncSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartFunctionality);

  const discount = 0.1;

  const handleIncrease = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  return (
    <>
      <Header />

      <div className="min-h-screen mt-9 bg-white text-black font-sans py-12 px-6 md:px-20">
        <h1 className="uppercase w-full font-[font1] text-[10vw] md:text-5xl font-extrabold text-center mb-12">
          Your Shopping Cart
        </h1>

        <div className="grid font-[font3] grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 space-y-4">
            <div className="hidden lg:grid grid-cols-5 border-b border-gray-300 text-gray-600 uppercase text-sm pb-2 mb-4">
              <div className="col-span-2">Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
            </div>

            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="grid grid-cols-1 lg:grid-cols-5 items-center gap-4 border-b hover:bg-gray-50 py-4"
                >
                  <div className="col-span-2 flex items-center gap-4">
                    <div
                      className="w-28 h-32 object-cover bg-gray-200 rounded-lg shadow-sm"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <span className="font-medium text-black">{item.title}</span>
                  </div>

                  <div className="font-medium text-gray-700">${item.price}</div>

                  <div className="flex items-center gap-2">
                    <button
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                      onClick={() => handleDecrease(item.id)}
                    >
                      <FaMinus size={12} />
                    </button>
                    <span className="px-3 font-medium">{item.quantity}</span>
                    <button
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                      onClick={() => handleIncrease(item.id)}
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>

                  <div className="font-semibold text-black">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  <div>
                    <FaTrash
                      className="text-gray-700 cursor-pointer"
                      onClick={() =>
                        dispatch(removeFunctionality({ id: item.id }))
                      }
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit space-y-6">
            <h2 className="text-2xl font-semibold text-black">Order Summary</h2>

            <div className="flex justify-between text-gray-700 font-medium">
              <span>Subtotal:</span>
              <span>
                $
                {cartItems
                  .reduce((sum, item) => sum + item.price * item.quantity, 0)
                  .toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between text-gray-700 font-medium">
              <span>Discount (10%):</span>
              <span>
                -$
                {(
                  cartItems.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                  ) * discount
                ).toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between text-lg font-bold text-black">
              <span>Total:</span>
              <span>
                $
                {(
                  cartItems.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                  ) *
                  (1 - discount)
                ).toFixed(2)}
              </span>
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
