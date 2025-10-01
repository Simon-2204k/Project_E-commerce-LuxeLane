import logo from "../../assets/images/new.png";
import { LuShoppingCart } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";
import AnimateHome from "./AnimateHome";
const Navbar = () => {
  return (
    <>
      <header>
        <div className="fixed z-40 top-0 h-[17vh] w-full">
          <div className="flex my-[0.5vh] items-center justify-between px-[2vw] ">
            <Link to="/home">
              <img src={logo} className="h-[15vh]" alt="luxelane" />
            </Link>

            <div className="flex items-center space-x-[2vw]">
              <Link
                to="/electronic"
                className=" h-[10vh] rounded-4xl text-center   font-[font3] font-medium"
              >
                Electronics
              </Link>
              <Link
                to="/women"
                className=" h-[10vh] rounded-4xl text-center   font-[font3] font-medium"
              >
                Women's Clothing
              </Link>
              <Link
                to="/men"
                className=" h-[10vh] rounded-4xl text-center   font-[font3] font-medium"
              >
                Men's Clothing
              </Link>
              <Link
                to="/jewellary"
                className=" h-[10vh] rounded-4xl text-center   font-[font3] font-medium"
              >
                Jewellery
              </Link>
              <Link to="/wishlist">
                <div className="cursor-pointer text-[4vh]  h-[10vh] w-[3vw]  rounded-full text-center">
                  <LuHeart />
                </div>
              </Link>
              <Link to="/cart">
                <div className="cursor-pointer text-[4vh]  h-[10vh] w-[3vw]  rounded-full text-center">
                  <LuShoppingCart />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex my-[0.5vh] items-center justify-between px-[2vw] ">
            <div className="flex items-center justify-between w-screen relative -top-7">
              <a
                href="#"
                className=" mt-1 ml-[3vw] h-[5vh] underline rounded-4xl text-center text-[1.5vw]  font-[font3] font-medium"
              >
                login
              </a>
              <div className="flex relative">
                <input
                  type="text"
                  className="h-[5vh] -mt-4 rounded-4xl text-center   font-[font3] font-medium"
                  placeholder="search"
                />{" "}
                <div className="cursor-pointer text-[3vh] -top-2 absolute left-[2vw]  h-[8vh] w-[3vw]  rounded-full text-center">
                  <LuSearch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <AnimateHome />
    </>
  );
};

export default Navbar;
