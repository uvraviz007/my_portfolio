import { GiCricketBat, GiShuttlecock } from "react-icons/gi";
import { FaChessKnight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

// testimonial data
const testimonialSlides = [
  {
    name: "Cricket",
    icon: <GiCricketBat className="text-5xl text-accent mx-auto mb-2" />,
    message:
      "Cricket has always been my favorite way to relax, compete, and enjoy the game.",
  },
  {
    name: "Badminton",
    icon: <GiShuttlecock className="text-5xl text-accent mx-auto mb-2" />,
    message:
      "I enjoy playing badminton in the evenings as an indoor sport, and it’s one of my favorite ways to stay active.",
  },
  {
    name: "Chess",
    icon: <FaChessKnight className="text-5xl text-accent mx-auto mb-2" />,
    message:
      "I enjoy playing chess, and with a Chess.com rating of around 900 and nearly 2500 games played, it’s one of my most engaging hobbies.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[350px]"
    >
      {testimonialSlides.map((person, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">

            {/* icon + name */}
            <div className="w-full max-w-[250px] flex flex-col items-center text-center mx-auto">
              
              {/* Hobby Icon */}
              <div>{person.icon}</div>

              {/* Name */}
              <div className="text-xl font-semibold mt-1">{person.name}</div>
            </div>

            {/* message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px]
              xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[180px] 
              relative xl:pl-20">

              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
