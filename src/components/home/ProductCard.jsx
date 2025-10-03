import { IoIosHeart } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { addFunctionality } from "../../feature/cartFuncSlice";
import { setSelectedProduct } from "../../feature/pageDetails";
import { addToWishlist } from "../../feature/wishList";
import { useDispatch } from "react-redux";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addFunctionality({
        ...item,
        quantity: 1,
      })
    );
  };

  const handleReadMore = () => {
    dispatch(setSelectedProduct(item));
  };

  return (
    <div
      className="mx-3 my-10 relative rounded-4xl bg-cover bg-center bg-no-repeat 
        h-[60vh] w-full sm:w-[90%] md:w-[45%] lg:w-[25vw]"
      style={{
        backgroundImage: `url(${item.image})`,
      }}
    >
      <div
        className="p-2 bg-amber-50 opacity-70 h-[6vh] rounded-2xl 
          w-[30%] sm:w-[25%] md:w-[20%] lg:w-[10vw] 
          text-center absolute top-[6%] left-[10%] text-xs sm:text-sm md:text-base"
      >
        rating : {item.rating.rate}★
      </div>

      <button
        className="absolute -top-3 -left-3 text-3xl sm:text-4xl md:text-5xl z-20 cursor-pointer"
        onClick={() => dispatch(addToWishlist(item))}
      >
        <IoIosHeart />
      </button>

      <button
        className="absolute right-3 top-3 text-3xl sm:text-4xl md:text-5xl cursor-pointer"
        onClick={handleAddToCart}
      >
        <CiCirclePlus className="text-white" />
      </button>

      <div className="text-white p-3 sm:p-4 md:p-5 absolute bottom-0 h-[40%] w-full rounded-4xl leading-tight sm:leading-6 md:leading-7 bg-black/50">
        <h1 className="font-[font5] text-lg sm:text-xl md:text-2xl font-bold">
          TITLE : {item.title}
        </h1>
        <h3 className="font-[font5] text-sm sm:text-base md:text-lg font-bold">
          CATEGORY : {item.category}
        </h3>
        <h3 className="font-[font5] text-sm sm:text-base md:text-lg font-bold">
          COUNT : {item.rating.count}
        </h3>

        <Link to="/productsdetails">
          <button
            className="cursor-pointer font-[font6] text-white bg-black rounded-2xl mt-4
              p-2 sm:p-3 md:p-4 w-full text-sm sm:text-base md:text-lg"
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
