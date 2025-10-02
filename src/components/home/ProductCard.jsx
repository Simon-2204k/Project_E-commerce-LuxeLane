import { IoIosHeart } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div>
      <div
        className=" mx-3 my-10 px-[0.1%] z-10 relative bg-amber-500 h-[60vh] w-[25vw] rounded-4xl  object-cover bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* <div><img src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div> */}
        <div className=" p-2 bg-amber-50 opacity-[0.7] h-[6vh] rounded-2xl w-[10vw] text-center absolute top-[6%] left-[10%] ">
          rating : 4★
        </div>
        <button className=" z-20  cursor-pointer absolute text-5xl -top-5 -left-4  ">
          <IoIosHeart />
        </button>
        <button className=" cursor-pointer absolute text-4xl right-5 top-5">
          <CiCirclePlus className="text-white cursor-pointer " />
        </button>

        <div className=" p-[2vw] absolute bottom-0  h-[40%] w-[100%] rounded-4xl leading-[5vh]">
          <h1 className="flex  font-[font5] text-2.5xl font-bold">
            {" "}
            TITLE : falverns
          </h1>
          <h3 className="font-[font5] text-1xl font-bold">
            CATEGORY : men's category{" "}
          </h3>
          <h3 className="font-[font5] text-1.5xl font-bold">COUNT : 120</h3>
          <Link to="/productsdetails">
            <button className="cursor-pointer font-[font6] text-white bg-black rounded-2xl p-5 w-[99%]">
              READ MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
