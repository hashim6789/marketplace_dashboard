import React from "react";

function ContentSearch() {
  return (
    <div className="w-full px-4 py-2">
      {/* Top blue progress bar */}
      {/* <div className="h-1 bg-blue-600 w-full mb-4" /> */}

      {/* Search header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-700">
          Showing results for:{" "}
          <span className="font-medium">
            Road alignment planning and design
          </span>
        </p>

        <div className="flex items-center space-x-3">
          {/* Search input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </div>

          {/* Dropdown */}
          <select className="border border-gray-300 rounded-md text-sm px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option>Latest</option>
            <option>Most Relevant</option>
            <option>Popular</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ContentSearch;
