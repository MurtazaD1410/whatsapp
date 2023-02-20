import React from "react";
import { IconMicrophone, IconMoodHappy } from "@tabler/icons";

const TypingBar = () => {
  return (
    <div className="">
      <div className="  bg-[#eeedef] py-2 flex items-center px-3 ">
        <div className=" ">
          <IconMoodHappy className="text-gray-400 w-5 h-5 mx-2" />
        </div>
        <input
          type="search"
          name=""
          id=""
          placeholder="Type your message"
          className="border border-gray-300 w-full text-xs py-2 rounded-md pl-2 focus:outline-0 hover:bg-gray-100"
        />
        <div className=" ">
          <IconMicrophone className="text-gray-400 w-5 h-5 mx-2" />
        </div>
      </div>
    </div>
  );
};

export default TypingBar;
