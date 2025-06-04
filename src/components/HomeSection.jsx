import React from "react";
import Me from "../assets/me.png";
import CV from "../assets/cv.pdf";
import { Github, Instagram, Linkedin } from "lucide-react";

const HomeSection = () => {
  return (
    <header className=" min-h-screen py-2  pt-28">
      <div className="container relative text-center mx-auto px-4 text-white h-full min-h-screen">
        <div className="space-y-4">
          <h5 className="text-sm font-medium">Hello I'm</h5>
          <h1 className="text-3xl md:text-5xl  my-3 font-bold">Hajia Bintu</h1>
          <h5 className="font-medium text-light text-sm">
            Fullstack Developer
          </h5>
          {/* CTA buttons */}
          <div className="mt-10 flex space-x-4 justify-center items-center">
            <a href={CV} download className="button">
              Download Cv
            </a>
            <a href="" className="button bg-primary text-background">
              Let's Talk
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="absolute left-[calc(50%-11rem)]  mt-16 h-96 w-full max-w-[22rem] overflow-hidden">
          <div className="bg-gradient-to-b from-primary to-transparent rounded-t-full p-14 pt-10 overflow-hidden">
            <img src={Me} alt="" className="object-cover block w-full" />
          </div>
        </div>
        {/* Side links */}
        <div className="max-sm:hidden flex flex-col gap-[0.8rem] after:w-[1px] after:h-[2rem] after:bg-primary absolute left-4 bottom-36 items-center  text-primary">
          <Linkedin size={16} />
          <Github size={16} />
          <Instagram size={16} />
        </div>
        {/* Scroll down */}
        <div className="max-sm:hidden absolute  bottom-42 right-2 rotate-90 text-primary">
          <a href="#contact">Sroll Down</a>
        </div>
      </div>
    </header>
  );
};

export default HomeSection;
