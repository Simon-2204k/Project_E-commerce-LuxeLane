import { IoIosHeart } from "react-icons/io"; // Heart icon for wishlist
import { CiCirclePlus } from "react-icons/ci"; // Plus icon for add-to-cart
import { Link } from "react-router-dom"; // For navigation
import { addFunctionality } from "../../feature/cartFuncSlice"; // Redux action to add to cart
import { setSelectedProduct } from "../../feature/pageDetails"; // Redux action to set selected product
import { addToWishlist } from "../../feature/wishList"; // Redux action to add to wishlist
import { useDispatch } from "react-redux"; // Redux hook

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  // Function to handle adding product to cart
  const handleAddToCart = () => {
    dispatch(
      addFunctionality({
        ...item, // Spread item properties
        quantity: 1, // Default quantity when added to cart
      })
    );
  };

  // Function to handle setting the selected product for details page
  const handleReadMore = () => {
    dispatch(setSelectedProduct(item));
  };

  return (
    <div
      className="mx-3 my-10 relative rounded-4xl bg-cover bg-center bg-no-repeat 
        h-[60vh] w-full sm:w-[90%] md:w-[45%] lg:w-[25vw]"
      style={{
        backgroundImage: `url(${item.image})`, // Set background image of the product
      }}
    >
      {/* Rating badge */}
      <div
        className="p-2 bg-amber-50 opacity-70 h-[6vh] rounded-2xl 
          w-[30%] sm:w-[25%] md:w-[20%] lg:w-[10vw] 
          text-center absolute top-[6%] left-[10%] text-xs sm:text-sm md:text-base"
      >
        rating : {item.rating.rate}★
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
        onClick={handleAddToCart}
      >
        <CiCirclePlus className="text-white" />
      </button>

      {/* Product info overlay */}
      <div className="text-white p-2 sm:p-3 md:p-4 absolute bottom-0 h-[40%] w-full rounded-4xl leading-tight sm:leading-5 md:leading-6 bg-black/50 flex flex-col justify-between">
        {/* Product title */}
        <h1 className="font-[font5] text-base sm:text-lg md:text-xl font-bold">
          TITLE :{" "}
          {item.title.length > 10 ? item.title.slice(0, 11) + ".." : item.title}
        </h1>

        {/* Product category */}
        <h3 className="font-[font5] text-xs sm:text-sm md:text-base font-bold">
          CATEGORY : {item.category}
        </h3>

        {/* Rating count */}
        <h3 className="font-[font5] text-xs sm:text-sm md:text-base font-bold">
          COUNT : {item.rating.count}
        </h3>

        {/* Read more button */}
        <Link to="/productsdetails">
          <button
            className="cursor-pointer font-[font6] text-white bg-black rounded-2xl mt-2 sm:mt-3 md:mt-4 p-1 sm:p-2 md:p-3 w-full text-xs sm:text-sm md:text-base"
            onClick={handleReadMore}
          >
            READ MORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
