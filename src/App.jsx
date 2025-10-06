// Import all required page components (default exports assumed)
import PreLoaader from "./pages/PreLoaader";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import HomeElectronics from "../src/components/home/HomeElectronics";
import HomeMen from "../src/components/home/HomeMen";
import HomeWomen from "../src/components/home/HomeWomen";
import HomeJewellary from "../src/components/home/HomeJewellary";
import ProductdetailsPage from "./pages/ProductdetailsPage";
import LoginPage from "./pages/LoginPage";

// React Router imports to handle navigation between pages
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* Define all application routes */}
      <Routes>
        {/* Landing/Preloader page */}
        <Route path="/" element={<PreLoaader />} />

        {/* Home page for all users */}
        <Route path="/home" element={<Home />} />

        {/* Cart page showing added items */}
        <Route path="/cart" element={<Cart />} />

        {/* Wishlist page */}
        <Route path="/wishlist" element={<WishList />} />

        {/* Category pages */}
        <Route path="/men" element={<HomeMen />} />
        <Route path="/women" element={<HomeWomen />} />
        <Route path="/electronic" element={<HomeElectronics />} />
        <Route path="/jewellary" element={<HomeJewellary />} />

        {/* Product details page */}
        <Route path="/productsdetails" element={<ProductdetailsPage />} />

        {/* Login page */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;
