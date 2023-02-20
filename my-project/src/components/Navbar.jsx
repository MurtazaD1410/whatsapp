import React from "react";
import profile from "../assets/profile.jpg";
import { IconMessageDots, IconMenu2 } from "@tabler/icons";

function Navbar() {
  return (
    <div className="flex items-center justify-between py-2 px-4 bg-[#eeedef] ">
      <div className="flex">
        <img
          src={profile}
          alt=""
          className="w-12 h-12 object-cover rounded-full"
        />
      </div>
      <div className="flex items-center space-x-6">
        <IconMessageDots stroke-width="1.75" className="text-gray-500" />
        <IconMenu2 stroke-width="1.75" className="text-gray-500" />
      </div>
    </div>
  );
}

export default Navbar;
