import Navbar from "../components/home/Navbar"; // Top navigation bar with links, cart, search
import ProductList from "../components/home/ProductList"; // Main product grid, fetches and displays products
import FooterPanel from "../components/footer/FooterPanel"; // Footer with links, contact info

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {" "}
      {/* Prevent horizontal scroll caused by large images/components */}
      <Navbar />
      <ProductList />
      <FooterPanel />
    </div>
  );
};
export default Home;
