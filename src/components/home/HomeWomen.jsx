import { IoIosHeart } from "react-icons/io"; // Heart icon for wishlist
import { CiCirclePlus } from "react-icons/ci"; // Plus icon for add-to-cart
import { Link } from "react-router-dom"; // For navigation
import { useSelector, useDispatch } from "react-redux"; // Redux hooks
import logo from "../../assets/images/new.png"; // Brand logo
import { addFunctionality } from "../../feature/cartFuncSlice"; // Redux action to add to cart
import { setSelectedProduct } from "../../feature/pageDetails"; // Redux action to set selected product
import { addToWishlist } from "../../feature/wishList"; // Redux action to add to wishlist

const HomeWomen = () => {
  // Get all products from Redux store
  const homeItems = useSelector((state) => state.itemsFetchedData.initialItems);

  // Filter products to only "women's clothing" category
  const womenItems = homeItems.filter(
    (item) => item.category === "women's clothing"
  );

  const dispatch = useDispatch(); // Initialize Redux dispatch

  // Function to add an item to the cart
  const handleAddToCart = (item) => {
    dispatch(addFunctionality({ ...item, quantity: 1 }));
  };

  // Function to select a product for the details page
  const handleReadMore = (item) => {
    dispatch(setSelectedProduct(item));
  };

  return (
    <>
      {/* Header with logo and link to home */}
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

      {/* Product cards grid */}
      <div className="flex flex-wrap mt-15 justify-center">
        {womenItems.map((item) => (
          <div
            key={item.id}
            className="mx-3 my-10 relative rounded-4xl bg-cover bg-center bg-no-repeat h-[60vh] w-full sm:w-[90%] md:w-[45%] lg:w-[25vw] shadow-lg"
            style={{ backgroundImage: `url(${item.image})` }} // Card background image
          >
            {/* Rating badge */}
            <div className="p-2 bg-amber-50 opacity-70 h-[6vh] rounded-2xl w-[30%] sm:w-[25%] md:w-[20%] lg:w-[10vw] text-center absolute top-[6%] left-[10%] text-xs sm:text-sm md:text-base">
              rating :{item.rating.rate}★
            </div>

            {/* Wishlist button */}
            <button
              className="absolute -top-3 -left-3 text-3xl sm:text-4xl md:text-5xl z-20 cursor-pointer"
              onClick={() => dispatch(addToWishlist(item))}
            >
              <IoIosHeart />
            </button>

            {/* Add to cart button */}
            <button
              className="absolute right-3 top-3 text-3xl sm:text-4xl md:text-5xl cursor-pointer"
              onClick={() => handleAddToCart(item)}
            >
              <CiCirclePlus className="text-white" />
            </button>

            {/* Product info overlay */}
            <div className="text-white p-3 sm:p-4 md:p-5 absolute bottom-0 h-[40%] w-full rounded-4xl leading-tight sm:leading-6 md:leading-7 bg-black/50 flex flex-col justify-between">
              <div>
                {/* Product title with truncation if too long */}
                <h1 className="font-[font5] text-lg sm:text-xl md:text-2xl font-bold">
                  TITLE :{" "}
                  {item.title.length > 10
                    ? item.title.slice(0, 11) + ".."
                    : item.title}
                </h1>
                {/* Product category */}
                <h3 className="font-[font5] text-sm sm:text-base md:text-lg font-bold">
                  CATEGORY : {item.category}
                </h3>
                {/* Product rating count */}
                <h3 className="font-[font5] text-sm sm:text-base md:text-lg font-bold">
                  COUNT : {item.rating.count}
                </h3>
              </div>

              {/* Read More button navigates to product details */}
              <Link to="/productsdetails">
                <button
                  className="cursor-pointer font-[font6] text-white bg-black rounded-2xl mt-4 p-2 sm:p-3 md:p-4 w-full text-sm sm:text-base md:text-lg"
                  onClick={() => handleReadMore(item)}
                >
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeWomen;
