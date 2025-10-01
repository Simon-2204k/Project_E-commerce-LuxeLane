import ProductCard from "./ProductCard";
const ProductList = () => {
  return (
    <div>
      <div
        className="h-screen w-screen bg-cover bg-center  "
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1659095012488-c37a7ddb251e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      ></div>
      <div className=" h-screen flex items-center justify-center  w-scrren">
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default ProductList;
