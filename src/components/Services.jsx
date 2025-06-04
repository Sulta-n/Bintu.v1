import React from "react";
import { BsCheck2 } from "react-icons/bs";
const servicessOffered = [
  {
    title: "+UI/UX Design",
    icon: <BsCheck2 />,
    list: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "UX/UI Design for Web & Mobile",
      "Usability Testing",
      "Design System Development",
      "Interaction Design",
    ],
  },
  {
    title: "Web Development",
    icon: <BsCheck2 />,
    list: [
      "Front-end Development (React, Vue, Angular)",
      "Back-end Development (Node.js, Django, Laravel)",
      "API Development & Integration",
      "Database Design & Optimization",
      "E-commerce Solutions",
      "Website Performance & SEO Optimization",
    ],
  },
  {
    title: "Content Creation",
    icon: <BsCheck2 />,
    list: [
      "Blog Writing & Copywriting",
      "Video Editing & Production",
      "Graphic Design for Social Media",
      "Brand Storytelling",
      "SEO-Optimized Content Strategy",
      "Social Media Management",
    ],
  },
];

const Services = () => {
  return (
    <section id="service" className="relative py-24 px-4">
      <p className="text-light text-sm">What I Offer</p>
      <h1 className="text-primary text-2xl md:text-3xl mb-7 font-bold">
        Services
      </h1>
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {servicessOffered.map((services, index) => (
            <div key={index} className="card lg:h-fit p-0 border-primary">
              <div className="bg-primary  p-8 rounded-b-4xl shadow-2xl">
                <h1 className="text-bg text-center font-semibold">
                  {services.title}
                </h1>
              </div>
              <ul className="p-6">
                {services.list.map((text, textIndex) => (
                  <li
                    key={textIndex}
                    className="flex justify-start items-center p-2 text-white text-[0.9rem]"
                  >
                    <small className="mr-2 text-sm text-primary">
                      {services.icon}
                    </small>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
