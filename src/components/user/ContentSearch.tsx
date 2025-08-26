import { Search } from "lucide-react";
import React from "react";

function ContentSearch() {
  return (
    <div className="w-full px-4">
      {/* Search header */}
      <div className="flex items-center  justify-between mb-2">
        <p className="text-sm text-[#000000] font-semibold">
          Showing results for:{" "}
          <span className=" text-[#304EA1]">
            Road alignment planning and design
          </span>
        </p>

        <div className="flex items-center gap-6">
          {/* Search input */}
          <div className="relative w-32">
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
          <div className="w-32">
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
