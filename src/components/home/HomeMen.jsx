import { Link } from "react-router-dom";
import logo from "../../assets/images/new.png";
import Caurosel from "../Men/Caurosel";
const HomeMen = () => {
  return (
    <div>
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

      <Caurosel />
    </div>
  );
};

export default HomeMen;
