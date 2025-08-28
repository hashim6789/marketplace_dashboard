import { useDispatch, useSelector } from "react-redux";
import { setSearch, setSortBy } from "../../store/slices/productSlice";
import { sortOptions, type SortType } from "../../types";
import Dropdown from "../ui/Dropdown";
import SearchBar from "../ui/Searchbar";
import type { RootState } from "../../store";

function ContentSearch() {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.products.search);
  const sortBy = useSelector((state: RootState) => state.products.sortBy);

  return (
    <div className="w-full px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2">
        <p className="text-sm text-[#000000] font-semibold">
          Showing results for:{" "}
          <span className="text-[#304EA1]">{search || "All Products"}</span>
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 w-full sm:w-auto">
          <SearchBar
            value={search}
            onChange={(val) => dispatch(setSearch(val))}
            placeholder="Search items..."
          />
          <Dropdown
            options={sortOptions}
            value={sortBy as SortType}
            onChange={(val) => dispatch(setSortBy(val))}
          />
        </div>
      </div>
    </div>
  );
}

export default ContentSearch;
