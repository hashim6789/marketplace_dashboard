import { Search } from "lucide-react";

function ContentSearch() {
  return (
    <div className="w-full px-4">
      {/* Search header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2">
        {/* Search label */}
        <p className="text-sm text-[#000000] font-semibold">
          Showing results for:{" "}
          <span className="text-[#304EA1]">
            Road alignment planning and design
          </span>
        </p>

        {/* Search controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 w-full sm:w-auto">
          {/* Search input */}
          <div className="relative w-full sm:w-40">
            <input
              type="text"
              placeholder="Search"
              className="w-full pr-10 pl-3 py-[6px] border border-[#6A6A6A] rounded-md text-sm text-[#6A6A6A] placeholder-[#BDBDBD] focus:outline-none focus:ring-1 focus:ring-[#304EA1]"
            />
            <span className="absolute right-3 top-2.5 text-sm">
              <Search className="w-4 h-4 text-[#6A6A6A]" />
            </span>
          </div>

          {/* Dropdown */}
          <div className="w-full sm:w-40">
            <select className="w-full border border-[#6A6A6A] rounded-md text-sm px-3 py-[6px] text-[#6A6A6A] focus:outline-none focus:ring-1 focus:ring-[#304EA1]">
              <option>Latest</option>
              <option>Most Relevant</option>
              <option>Popular</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSearch;
