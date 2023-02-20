import React from "react";
import { IconChecks } from "@tabler/icons";

const Contact = ({ img, name, message }) => {
  return (
    <div className="flex justify-between mx-2 items-center hover:bg-[#eeedef] rounded-xl border-b">
      <div className="flex items-center ">
        <div className="flex ">
          <img
            src={img}
            alt=""
            className="h-14 w-14 object-cover rounded-full mx-3 my-2"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <h3 className="text-sm fontse">{name}</h3>
          <div className="flex space-x-1">
            <IconChecks className="h-4 w-4" stroke-width="1" />
            <p className="text-gray-500 text-xs">{message}</p>
          </div>
        </div>
      </div>
      <div className="mx-3">
        <p className="text-gray-400 text-xs ">8:51</p>
      </div>
    </div>
  );
};

export default Contact;
