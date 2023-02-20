import React from "react";
import profile1 from "../assets/1.jpg";
import profile2 from "../assets/2.jpg";
import profile3 from "../assets/3.jpg";
import profile4 from "../assets/4.jpg";
import profile5 from "../assets/5.jpg";
import Contact from "./Contact";

function Contacts() {
  const contacts = [
    {
      img: profile5,
      name: "Sinhgad",
      message: "Attendance compulsory",
    },
    {
      img: profile1,
      name: "Bros Before Hoes",
      message: "Let's go out Tonight",
    },
    { img: profile2, name: "Subrat Dhapola", message: "Good Morning" },
    { img: profile3, name: "Kaushikram", message: "What's Up" },
    { img: profile4, name: "Abdullah", message: "How are you?" },

    { img: profile2, name: "Tanvi", message: "Ty😉" },
    { img: profile3, name: "Kaushikram", message: "What's Up" },
    { img: profile4, name: "Abdullah", message: "How are you?" },
    { img: profile5, name: "Cool Kids", message: "Abhi upload karke rakhde" },
    { img: profile2, name: "Subrat Dhapola", message: "Good Morning" },
    { img: profile3, name: "Kaushikram", message: "What's Up" },
    { img: profile4, name: "Abdullah", message: "How are you?" },

    { img: profile2, name: "Tanvi", message: "Ty😉" },
    { img: profile3, name: "Kaushikram", message: "What's Up" },
    { img: profile4, name: "Abdullah", message: "How are you?" },
    { img: profile5, name: "Cool Kids", message: "Abhi upload karke rakhde" },
  ];

  return (
    <div>
      <div className="">
        {contacts.map((contact) => (
          <Contact
            img={contact.img}
            name={contact.name}
            message={contact.message}
          />
        ))}
      </div>
    </div>
  );
}

export default Contacts;
