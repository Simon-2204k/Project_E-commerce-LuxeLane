import Navbar from "../components/home/Navbar";
import ProductList from "../components/home/ProductList";

import FooterPanel from "../components/footer/FooterPanel";
const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <ProductList />
      <FooterPanel></FooterPanel>
    </div>
  );
};

export default Home;
