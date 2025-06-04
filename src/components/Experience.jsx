import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
const frontEnd = [
  { icon: <BsPatchCheckFill />, text: "HTML", level: "Experienced" },
  { icon: <BsPatchCheckFill />, text: "CSS", level: "Intermidiate" },
  { icon: <BsPatchCheckFill />, text: "Javascript", level: "Experienced" },
  { icon: <BsPatchCheckFill />, text: "Bootstrap", level: "Intermidiate" },
  { icon: <BsPatchCheckFill />, text: "Tailwind", level: "Experienced" },
  { icon: <BsPatchCheckFill />, text: "React", level: "Experienced" },
];

const backEnd = [
  { icon: <BsPatchCheckFill />, text: "Node js", level: "Experienced" },
  { icon: <BsPatchCheckFill />, text: "MongoDB", level: "Intermidiate" },
  { icon: <BsPatchCheckFill />, text: "PHP", level: "Intermidiate" },
  { icon: <BsPatchCheckFill />, text: "Python", level: "Intermidiate" },
  { icon: <BsPatchCheckFill />, text: "MySQL", level: "Basic" },
];

const Experience = () => {
  return (
    <section className="relative py-24 px-4" id="exp">
      <p className="text-sm text-light">What Skills I Have</p>
      <h5 className="text-2xl font-bold text-primary md:text-3xl mb-7">
        My Experience
      </h5>
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 place-items-center">
          {/* frontEnd */}
          <div className="card md:w-[78%] lg:w-full">
            <h3 className="text-primary text-2xl mb-7 text-center text-bold">
              Frontend Development
            </h3>
            <div className=" grid grid-cols-2 gap-2 place-items-center">
              {frontEnd.map((skill, index) => (
                <article
                  className="flex items-start justify-center space-x-4 text-left"
                  key={index}
                >
                  <h2 className="text-primary">{skill.icon}</h2>
                  <div>
                    <h4 className="text-white">{skill.text}</h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* BackEnd */}
          <div className="card md:w-[78%] lg:w-full">
            <h3 className="text-primary text-2xl mb-7 text-center text-bold ">
              Backend Development
            </h3>
            <div className=" grid grid-cols-2 gap-2 place-items-center">
              {backEnd.map((skill, index) => (
                <article
                  className="flex items-start justify-center space-x-4 text-left"
                  key={index}
                >
                  <h2 className="text-primary">{skill.icon}</h2>
                  <div>
                    <h4 className="text-white">{skill.text}</h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
