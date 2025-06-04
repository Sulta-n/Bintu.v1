import React from "react";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import AVTR1 from "../assets/avatar1.jpg";
import AVTR2 from "../assets/avatar2.jpg";
import AVTR3 from "../assets/avatar3.jpg";
import AVTR4 from "../assets/avatar4.jpg";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Working with Hajia Bintu on our product’s UI/UX design was a game-changer. She has an incredible ability to translate complex ideas into intuitive, visually stunning designs. Our user engagement and retention skyrocketed after implementing her work. Highly recommended for anyone looking to create an exceptional digital experience!",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "I needed a custom web application built from scratch, and Hajia delivered beyond expectations. Her full-stack expertise ensured a smooth and scalable solution, and she was proactive in optimizing performance and security. Her attention to detail and problem-solving skills made the entire development process seamless. Will definitely work with her again!",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Hajia’s content creation skills took our brand’s online presence to the next level. From engaging blog posts to visually stunning social media designs, her work consistently exceeded our expectations. She understands how to craft compelling narratives that resonate with audiences, driving more engagement and conversions. Truly a creative powerhouse!",
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review:
      "Hajia Bintu is more than just a developer—she's a problem solver. When we faced scalability issues with our platform, she provided insightful recommendations and implemented solutions that dramatically improved performance. Her expertise, professionalism, and forward-thinking approach make her an invaluable asset to any tech project.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24 px-4">
      <p className="text-light text-sm">Review from clients</p>
      <h1 className="text-primary text-2xl md:text-3xl mb-8 font-bold">
        Testimonials
      </h1>

      <div className="container mx-auto max-w-5xl">
        <div className="mx-auto w-[70%]">
          <Swiper
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {data.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col space-y-3.5 items-center justify-center w-full bg-background-variant rounded-4xl py-4 px-3">
                  <div className=" border-8 border-primary-variant  rounded-full w-[25%]">
                    <img
                      src={data.avatar}
                      alt={data.name}
                      className="rounded-full "
                    />
                  </div>
                  <h2 className="text-white text-[1.1rem]">{data.name}</h2>
                  <p className="text-sm text-light w-[80%] mb-5">
                    {data.review}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
