import PreLoaader from "./pages/PreLoaader";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import HomeElectronics from "../src/components/home/HomeElectronics";
import HomeMen from "../src/components/home/HomeMen";
import HomeWomen from "../src/components/home/HomeWomen";
import HomeJewellary from "../src/components/home/HomeJewellary";
import ProductdetailsPage from "./pages/ProductdetailsPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PreLoaader />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/men" element={<HomeMen />}></Route>
        <Route path="/women" element={<HomeWomen />}></Route>
        <Route path="/electronic" element={<HomeElectronics />}></Route>
        <Route path="/jewellary" element={<HomeJewellary />}></Route>
        <Route path="/productsdetails" element={<ProductdetailsPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
