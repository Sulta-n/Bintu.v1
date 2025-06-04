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
    <section id="about" className="relative py-24 px-4">
      <p className="text-light text-sm">Get to Know </p>
      <h1 className="text-primary text-2xl md:text-3xl mb-8 font-bold">
        About Me
      </h1>
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_50%] lg:gap-[15%] gap-[12%]">
          {/* image section */}
          <div className="w-md max-md:w-[50%] mx-auto bg-gradient-to-r from-transparent via-primary to-transparent grid place-items-center rounded-[2rem]">
            <div className="aspect-square rotate-[10deg] rounded-[2rem] hover:rotate-0 transition-transform duration-300">
              <img src={aboutpic} alt="" className="rounded-[2rem] w-md" />
            </div>
          </div>

          {/* Cards */}
          <div className="w-full h-full lg:ml-5">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[1rem]">
              {cards.map((card, index) => (
                <article
                  className="card flex flex-col justify-between items-center "
                  key={index}
                >
                  <h2 className="text-primary text-[1.7rem]">{card.icon}</h2>
                  <h5 className="text-white  text-[0.9rem] font-bold">
                    {card.text}
                  </h5>
                  <small className="whitespace-nowrap text-light  text-[0.7rem]">
                    {card.xp}
                  </small>
                </article>
              ))}
            </div>
            <p className="text-light my-4 text-sm text-left">
              A passionate full-stack developer with a keen eye for building
              seamless digital experiences. With expertise in both front-end and
              back-end technologies, I craft scalable solutions that blend
              functionality with design. Whether it's developing dynamic web
              applications, optimizing databases, or architecting APIs, I thrive
              on solving complex challenges with clean and efficient code.
            </p>
            <a
              href="#contact"
              className="button flex justify-center items-center lg:justify-start"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
