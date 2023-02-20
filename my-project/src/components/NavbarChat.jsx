import React from "react";
import profile1 from "../assets/1.jpg";
import { IconPaperclip, IconDotsVertical } from "@tabler/icons";

const Navbar = ({}) => {
  return (
    <div className="border-l border-gray-300 flex items-center justify-between py-2 px-4 bg-[#eeedef] ">
      <div className="flex items-center space-x-4">
        <div className="flex">
          <img
            src={profile1}
            alt=""
            className="w-12 h-12 object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <h3 className="text-sm fontse">Bros before Hoes</h3>
          <div className="flex space-x-1">
            <p className="text-gray-500 text-xs">
              Abdullah, Kaushik, Subrat, You
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <IconPaperclip stroke-width="1.75" className="text-gray-500" />
        <IconDotsVertical stroke-width="1.75" className="text-gray-500" />
      </div>
    </div>
  );
};

export default Navbar;
