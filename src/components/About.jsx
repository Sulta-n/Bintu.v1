import React from "react";
import aboutpic from "@/assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { VscFolderLibrary } from "react-icons/vsc";

const cards = [
  { icon: <FaAward />, text: "Experience", xp: "3+ Years Working" },
  { icon: <LuUser />, text: "Clients", xp: "200+ Worldwide" },
  { icon: <VscFolderLibrary />, text: "Projects", xp: "80+ Completed" },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 p-4">
      <p className="text-light text-sm">Get to Know </p>
      <h1 className="text-primary text-2xl md:text-3xl mb-8 font-bold">
        About Me
      </h1>
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-[35%_50%] gap-[15%] md:items-center max-md:grid-cols-1 max-sm:gap-[12%]">
          {/* image section */}
          <div className="w-full max-md:w-[50%] mx-auto bg-gradient-to-r from-transparent via-primary to-transparent grid place-items-center rounded-[2rem]">
            <div className="aspect-square rotate-[10deg] rounded-[2rem] hover:rotate-0 transition-transform duration-300">
              <img src={aboutpic} alt="" className="rounded-[2rem]" />
            </div>
          </div>

          {/* cards-section */}
          <div className="w-full h-full">
            <div
              className="grid grid-cols-1 
              sm:grid-cols-2
            md:grid-cols-3 place-items-center md:gap-x-24 max-sm:gap-y-7 max-sm:gap-x-8"
            >
              {cards.map((card) => (
                <article className="flex flex-col items-center justify-center space-y-3 card max-w-fit ">
                  <h1 className="text-primary text-[1.7rem]">{card.icon}</h1>
                  <h5 className="text-white  text-[0.9rem] font-bold">
                    {card.text}
                  </h5>
                  <small className="whitespace-nowrap text-light  text-[0.7rem]">
                    {card.xp}
                  </small>
                </article>
              ))}
            </div>
          </div>
          {/* <div className=" w-full h-full">
            <div className="grid grid-cols-3  place-items-center">
              {cards.map((card) => (
                <article className="card items-center place-items-center  text-white cursor-default w-[150px] h-[150px]">
                  <h1 className="text-primary text-[1.4rem] mb-3">
                    {card.icon}
                  </h1>
                  <h5 className="text-white text-[0.9rem]">{card.text}</h5>
                  <small className="text-light text-[0.7rem] whitespace-nowrap">
                    {card.xp}
                  </small>
                </article>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
