import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchE_commerceData } from "../../feature/ItemsSlice";
import { LuSearch } from "react-icons/lu";

const ProductList = () => {
  // State to store search results
  const [searchItems, setSerachitems] = useState(null);

  const dispatch = useDispatch();
  // Get loading state and items from Redux store
  const { loading, initialItems } = useSelector(
    (state) => state.itemsFetchedData
  );

  // Fetch items on component mount if not already fetched
  useEffect(() => {
    if (loading === "idle") {
      dispatch(fetchE_commerceData());
    }
  }, [loading]);

  // Display loading state
  if (loading === "loading") {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <div className="px-4 py-2 bg-yellow-100 text-yellow-800 border border-yellow-300 rounded-lg shadow-md text-center">
          Loading ......
        </div>
      </div>
    );
  }

  // Display error state
  if (loading === "error") {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <div className="px-4 py-2 bg-red-100 text-red-800 border border-red-300 rounded-lg shadow-md text-center">
          Rejected .....
        </div>
      </div>
    );
  }

  // Handle search input
  const handlefunction = (dets) => {
    let word = dets.toLowerCase();

    const searched = initialItems.filter(
      (e) => e.title.toLowerCase().includes(word) // Filter items by title
    );
    return setSerachitems(searched); // Update search results
  };

  return (
    <>
      {/* Search input */}
      <div className="flex relative left-1/2">
        <input
          onChange={(dets) => handlefunction(dets.target.value)}
          type="text"
          className="h-[5vh] mt-15 rounded-4xl text-center font-[font3] font-medium"
          placeholder="search"
        />
        <div className="cursor-pointer text-[3vh] top-17 absolute left-[2vw] h-[8vh] w-[3vw] rounded-full text-center">
          <LuSearch />
        </div>
      </div>

      {/* Product grid */}
      <div className="flex flex-wrap justify-center gap-6 px-3">
        {searchItems === null ? (
          // Show all items if no search performed
          initialItems.map((item) => (
            <div key={item.id} className="w-full sm:w-[48%] lg:w-[30%]">
              <ProductCard item={item} />
            </div>
          ))
        ) : searchItems.length > 0 ? (
          // Show search results if any
          searchItems.map((item) => (
            <div key={item.id} className="w-full sm:w-[48%] lg:w-[30%]">
              <ProductCard item={item} />
            </div>
          ))
        ) : (
          // Show no results message if search yields nothing
          <div className="flex items-center justify-center h-screen w-full">
            <div className="px-4 py-2 bg-yellow-100 text-yellow-800 border border-yellow-300 rounded-lg shadow-md text-center">
              No results found
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
