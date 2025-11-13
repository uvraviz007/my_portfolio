import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'VM Project',
          path: '/vm.png',
          link: 'https://github.com/uvraviz007/vm_assignment.git',
        },
        {
          title: 'Plum Project',
          path: '/plum.png',
          link: 'https://github.com/uvraviz007/ai-benefits-flow.git',
        },
        {
          title: 'One Vote',
          path: '/one_vote.png',
          link: 'https://github.com/uvraviz007/OneVote.git',
        },
        {
          title: 'fin-track',
          path: '/fin_track2.png',
          link: 'https://github.com/uvraviz007/fintrack.git',
        },
      ],
    },
    {
      images: [
        {
          title: 'BG Project',
          path: '/bg.png',
          link: 'https://github.com/uvraviz007/gita_website.git',
        },
        {
          title: 'Shop Project',
          path: '/shop.png',
          link: 'https://github.com/RSGPhoeniX01/RSmart.git',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, slideIndex) => {
        return (
          <SwiperSlide key={slideIndex}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((img, id) => {
                return (
                  <a
                    href={img.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={id}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">

                      {/* image */}
                      <Image src={img.path} width={500} height={300} alt={img.title} />

                      {/* overlay gradient */}
                      <div
                        className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd]
                        opacity-0 group-hover:opacity-80 transition-all duration-700"
                      ></div>

                      {/* title on hover */}
                      <div
                        className="absolute bottom-0 translate-y-full group-hover:-translate-y-10
                        group-hover:xl:-translate-y-20 transition-all duration-300"
                      >
                        <div className="flex flex-col items-center text-white text-[14px] tracking-wide">
                          <div className="font-semibold group-hover:opacity-100 opacity-0 transition-all duration-300">
                            {img.title}
                          </div>
                          <div className="flex items-center gap-x-2 text-[12px] uppercase mt-1">
                            <div className="delay-100">View</div>
                            <div
                              className="translate-y-[500%] group-hover:-translate-y-0 transition-all duration-300 delay-150"
                            >
                              Project
                            </div>
                            <div
                              className="text-xl translate-y-[500%] group-hover:-translate-y-0 transition-all duration-300 delay-200"
                            >
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;