import { Instagram, Mail } from "lucide-react";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const contactCard = [
  {
    icon: <Mail />,
    text: "Email",
    email: "maliodaslordzee280@gmail.com",
    href: "mailto:maliodaslordzee280@gmail.com",
  },
  {
    icon: <Instagram />,
    text: "Instagram",
    href: "mailto:maliodaslordzee280@gmail.com",
  },
  {
    icon: <BsWhatsapp />,
    text: "WhatssApp",
    href: "https://api.whatsapp.com/send?phone=+2348026163193&text=Hello%2C%20I%20would%20like%20to%20chat!",
  },
];

const Contact = () => {
  return (
    <section className="relative py-24 px-4">
      <p className="text-light text-sm">Get In Touch </p>
      <h1 className="text-primary text-2xl md:text-3xl mb-8 font-bold">
        Contact Me
      </h1>
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_58%] gap-9">
          {/* contact cards */}
          <div className=" w-full space-y-3 md:w-[80%] mx-auto">
            {contactCard.map((card, index) => (
              <div
                className="card flex flex-col justify-center items-center space-y-4 text-white"
                key={index}
              >
                <h2>{card.icon}</h2>
                <h1 className="font-semibold">{card.text}</h1>
                <a
                  href={card.href}
                  className="text-primary hover:text-white transition-colors duration-300"
                >
                  Send A Message
                </a>
              </div>
            ))}
          </div>
          {/* Form */}
          <div className="w-full md:w-[80%] h-full mx-auto lg:w-full">
            <form
              action=""
              className="flex flex-col space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Your Full Name"
                required
                className="inputs"
              />
              <input
                type="email"
                placeholder="Your Full Email"
                required
                className="inputs"
              />
              <textarea
                type="text"
                className="inputs"
                placeholder="Your Full Message"
                rows="7"
              />
              <button
                type="submit"
                className="button bg-primary hover:bg-white text-background"
              >
                {" "}
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
