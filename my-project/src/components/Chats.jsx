import React from "react";
import Message from "./Message";

const Chats = () => {
  const messages = [
    {
      name: "Joe Doe",
      message: "Hi, I'm Joe Doe",
      css1: "bg-blue-400 ",
      css2: "justify-start",
    },
    {
      name: "boe loe",
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio deserunt eaque, sequi et reprehenderit unde, esse quo cumque sunt aliquam nihil. ",
      css1: "bg-slate-700 ",
      css2: "justify-end",
    },
    {
      name: "boe loe",
      message: "Perferendis, . ",
      css1: "bg-slate-700  ",
      css2: "justify-end",
    },
    {
      name: "Joe Doe",
      message: "Build What's App 2.0 with REACT.JS! (JS, HTML , CSS) |",
      css1: "bg-blue-400 ",
      css2: "justify-start",
    },
    {
      name: "boe loe",
      message: "Perferendis, . ",
      css1: "bg-slate-700  ",
      css2: "justify-end",
    },
    {
      name: "Joe Doe",
      message: "Build What's App 2.0 with REACT.JS! (JS, HTML , CSS) |",
      css1: "bg-blue-400 ",
      css2: "justify-start",
    },
    {
      name: "boe loe",
      message: "Perferendis, . ",
      css1: "bg-slate-700  ",
      css2: "justify-end",
    },
    {
      name: "Joe Doe",
      message: "Build What's App 2.0 with REACT.JS! (JS, HTML ",
      css1: "bg-blue-400 ",
      css2: "justify-start",
    },
  ];

  return (
    <div className="">
      <div className="text-white ">
        <div className=" ">
          {messages.map((message) => (
            <Message
              name={message.name}
              css1={message.css1}
              css2={message.css2}
              message={message.message}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chats;
