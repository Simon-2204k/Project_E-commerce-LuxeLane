import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchE_commerceData } from "../../feature/Items";

const ProductList = () => {
  const dispatch = useDispatch();
  const { loading, initialItems } = useSelector(
    (state) => state.itemsFetchedData
  );

  useEffect(() => {
    if (loading === "idle") {
      dispatch(fetchE_commerceData());
    }
  }, [loading]);

  if (loading === "loading") {
    return (
      <div className="px-4 py-2 bg-yellow-100 text-yellow-800 border border-yellow-300 rounded-lg shadow-md w-max">
        Pending
      </div>
    );
  }

  if (loading === "error") {
    return (
      <div className="px-4 py-2 bg-red-100 text-red-800 border border-red-300 rounded-lg shadow-md w-max">
        Rejected
      </div>
    );
  }
  return (
    <div className="flex flex-wrap justify-center gap-6 px-3">
      {initialItems.map((item) => (
        <div key={item.id} className="w-full sm:w-[48%] lg:w-[30%]">
          <ProductCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
