import React from "react";
import { FiSearch } from "react-icons/fi";

function Search() {
  return (
    <div className="relative mx-3 bg-[#fafafa] py-2 flex items-center">
      <div className="absolute left-2">
        <FiSearch className="text-gray-400" />
      </div>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search for Friends"
        className="border border-gray-300 w-full text-xs p-1 rounded-md pl-8 focus:outline-0 hover:bg-gray-100"
      />
    </div>
  );
}

export default Search;
