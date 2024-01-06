import React from "react";
import { PersonStanding, LockIcon, Group, MessageCircle } from "lucide-react";

const AboutSection = () => {
  const list = [
    {
      title: "All Specialist",
      description:
        "You can reach up to 3500+ doctors from 80+ specialities, who are esperienced in telemmdicine",
      svg: <PersonStanding size={40} />,
    },
    {
      title: "Private & Secure",
      description:
        "All your data is protected and safeguarded with secured SSL, data at rest encryption",
      svg: <LockIcon size={40} />,
    },
    {
      title: "Million Customers",
      description:
        " Trusted by millions and serving customers worldwide, Users from 196 countries and counting",
      svg: <Group size={40} />,
    },
    {
      title: "Chatbot Support",
      description:
        "Get access to doctors via chat bots for a fantastic telehealth service, contact via instagram",

      svg: <MessageCircle size={40} />,
    },
  ];

  return (
    <div className=" w-full flex flex-col items-center justify-center my-10 space-y-10 ">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
        Why you should trust us? <br />
        Get to know about us
      </h2>

      <div className=" lg:grid-cols-2 xl:grid-cols-4 gap-4 grid">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-2 w-72 text-center bg-white py-5 space-y-3"
          >
            <div>{item.svg}</div>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {item.title}
            </h4>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
