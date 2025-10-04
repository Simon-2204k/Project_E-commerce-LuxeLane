import { IoIosHeart } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/images/new.png";
import { addFunctionality } from "../../feature/cartFuncSlice";
import { setSelectedProduct } from "../../feature/pageDetails";
import { addToWishlist } from "../../feature/wishList";
import { useDispatch } from "react-redux";

const HomeElectronics = () => {
  const homeElectronic = useSelector(
    (state) => state.itemsFetchedData.initialItems
  );

  const electronicsItem = homeElectronic.filter(
    (items) => items.category === "electronics"
  );
  const dispatch = useDispatch();

  const handleAddToCart = (elec) => {
    dispatch(
      addFunctionality({
        ...elec,
        quantity: 1,
      })
    );
  };

  const handleReadMore = (elec) => {
    dispatch(setSelectedProduct(elec));
  };

  return (
    <>
      <div className="fixed top-0 w-screen h-[10vh] overflow-hidden backdrop-blur-md flex justify-between items-center bg-white/20 border-b border-gray-300 px-10 z-50">
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

      <div className="flex flex-wrap mt-15 justify-center">
        {electronicsItem.map((elec) => (
          <div
            key={elec.id}
            className="mx-3 my-10 relative rounded-4xl bg-cover bg-center bg-no-repeat 
            h-[60vh] w-full sm:w-[90%] md:w-[45%] lg:w-[25vw] shadow-lg"
            style={{
              backgroundImage: `url(${elec.image})`,
            }}
          >
            <div
              className="p-2 bg-amber-50 opacity-70 h-[6vh] rounded-2xl 
            w-[30%] sm:w-[25%] md:w-[20%] lg:w-[10vw] 
            text-center absolute top-[6%] left-[10%] text-xs sm:text-sm md:text-base"
            >
              rating :{elec.rating.rate}★
            </div>

            <button
              className="absolute -top-3 -left-3 text-3xl sm:text-4xl md:text-5xl z-20 cursor-pointer"
              onClick={() => dispatch(addToWishlist(elec))}
            >
              <IoIosHeart />
            </button>

            <button
              className="absolute right-3 top-3 text-3xl sm:text-4xl md:text-5xl cursor-pointer"
              onClick={() => handleAddToCart(elec)}
            >
              <CiCirclePlus className="text-white" />
            </button>

            <div className="text-white p-3 sm:p-4 md:p-5 absolute bottom-0 h-[40%] w-full rounded-4xl leading-tight sm:leading-6 md:leading-7 bg-black/50 flex flex-col justify-between">
              <div>
                <h1 className="font-[font5] text-lg sm:text-xl md:text-2xl font-bold">
                  TITLE :{" "}
                  {elec.title.length > 10
                    ? elec.title.slice(0, 11) + ".."
                    : elec.title}
                </h1>
                <h3 className="font-[font5] text-sm sm:text-base md:text-lg font-bold">
                  CATEGORY : {elec.category}
                </h3>
                <h3 className="font-[font5] text-sm sm:text-base md:text-lg font-bold">
                  COUNT : {elec.rating.count}
                </h3>
              </div>

              <Link to="/productsdetails">
                <button
                  className="cursor-pointer font-[font6] text-white bg-black rounded-2xl mt-4
                  p-2 sm:p-3 md:p-4 w-full text-sm sm:text-base md:text-lg"
                  onClick={() => handleReadMore(elec)}
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

export default HomeElectronics;
