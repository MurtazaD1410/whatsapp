import React from "react";

const Message = ({ name, message, css1, css2 }) => {
  return (
    <div className={`${css2} flex `}>
      <div
        className={`${css1} flex flex-col max-w-[75%] mx-2 my-1 rounded-lg p-3 `}
      >
        <p className="">{name}</p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default Message;
