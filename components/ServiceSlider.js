
// import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket, RxArrowTopRight } from "react-icons/rx";
// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';
// import { FreeMode, Pagination } from 'swiper';

// // data
// const serviceData = [
//   {
//     icon: <RxCrop />,
//     title: 'Branding',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     icon: <RxPencil2 />,
//     title: 'Design',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     icon: <RxDesktop />,
//     title: 'Development',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     icon: <RxReader />,
//     title: 'Copywriting',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     icon: <RxRocket />,
//     title: 'SEO',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
// ];

// const ServiceSlider = () => {
//   return (
//     <Swiper breakpoints={{
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 15
//       },
//       640:{
//         slidesPerView:3,
//         spaceBetween:15
//       }
//     }} freeMode={true} pagination={{
//       clickable:true
//     }} modules={[FreeMode,Pagination]}
//     className="h-[240px] sm:h-[340px]">
//       {
//         serviceData.map((item,itemIndex) => {
//           return (
//             <SwiperSlide key={itemIndex}>
//               <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8
//               flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer 
//               hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">

//                 {/* icon */}
//                 <div className="text-4xl text-accent mb-4">{item.icon}</div>
                
//                 {/* titl and desc */}
//                 <div className="mb-8">
//                   <div className="mb-2 text-lg">{item.title}</div>
//                   <p className="max-w-[350px] leading-normal">{item.description}</p>
//                 </div>
                
//                 {/* arrow */}
//                 <div className="text-3xl">
//                   <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
//                 </div>
//               </div>
//             </SwiperSlide>
//           )
//         })
//       }
//     </Swiper>
//   );
// };

// export default ServiceSlider;





// import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket, RxArrowTopRight } from "react-icons/rx";
// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';
// import { FreeMode, Pagination } from 'swiper';

// // data
// const serviceData = [
//   {
//     icon: <RxCrop />,
//     title: 'Scondary School',
//     description: 'Escorts World School Kanpur ,UP ',
//   },
//   {
//     icon: <RxPencil2 />,
//     title: 'Senior Secondary',
//     description: 'Escorts World School Kanpur, Up',
//   }
//   // {
//   //   icon: <RxDesktop />,
//   //   title: 'Bachelors of Technology',
//   //   description: 'Motilal Nehru National Institue Of Technology',
//   // },
//   // {
//   //   icon: <RxReader />,
//   //   title: 'Copywriting',
//   //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   // },
//   // {
//   //   icon: <RxRocket />,
//   //   title: 'SEO',
//   //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   // },
// ];

// const ServiceSlider = () => {
//   return (
//     <Swiper breakpoints={{
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 15
//       },
//       640:{
//         slidesPerView:3,
//         spaceBetween:15
//       }
//     }} freeMode={true} pagination={{
//       clickable:true
//     }} modules={[FreeMode,Pagination]}
//     className="h-[240px] sm:h-[340px]">
//       {
//         serviceData.map((item,itemIndex) => {
//           return (
//             <SwiperSlide key={itemIndex}>
//               <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8
//               flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer 
//               hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">

//                 {/* icon */}
//                 <div className="text-4xl text-accent mb-4">{item.icon}</div>
                
//                 {/* titl and desc */}
//                 <div className="mb-8">
//                   <div className="mb-2 text-lg">{item.title}</div>
//                   <p className="max-w-[350px] leading-normal">{item.description}</p>
//                 </div>
                
//                 {/* arrow */}
//                 <div className="text-3xl">
//                   <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
//                 </div>
//               </div>
//             </SwiperSlide>
//           )
//         })
//       }
//     </Swiper>
//   );
// };

// export default ServiceSlider;
import { useState } from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { MdSchool, MdAccountBalance } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';

const serviceData = [
  {
    icon: <MdSchool />,
    title: 'Secondary School',
    description: 'Escorts World School Kanpur, UP',
    more: {
      subjects: "Maths, Science, English, Social Science, Hindi",
      percentage: "96%",
      passing: "2019"
    }
  },
  {
    icon: <MdSchool />,
    title: 'Senior Secondary',
    description: 'Escorts World School Kanpur, UP',
    more: {
      subjects: "PCM + Computer Science",
      percentage: "93%",
      passing: "2021"
    }
  },
  {
    icon: <MdAccountBalance />,
    title: 'B.Tech (CSE)',
    description: 'MNNIT Allahabad',
    more: {
      branch: "Computer Science & Engineering",
      cpi: "7.88",
      passing: "2026",
      semesterCPI: {
        sem1: "7.62",
        sem2: "7.74",
        sem3: "7.81",
        sem4: "8.33",
        sem5: "7.78",
        sem4: "7.95",
      }
    }
  }
];

const ServiceSlider = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 }
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-auto pb-10"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] rounded-lg px-6 py-8
              flex flex-col gap-y-4 group cursor-pointer 
              hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">

            {/* icon */}
            <div className="text-4xl text-accent">{item.icon}</div>

            {/* title + desc */}
            <div>
              <div className="text-lg font-semibold">{item.title}</div>
              <p className="text-sm">{item.description}</p>
            </div>

            {/* arrow */}
            <div
              className="text-3xl cursor-pointer"
              onClick={() => toggleDetails(index)}
            >
              <RxArrowTopRight
                className={`transition-all duration-300 ${
                  openIndex === index ? "rotate-45 text-accent" : ""
                }`}
              />
            </div>

            {/* expanding details */}
            {openIndex === index && (
              <div className="mt-4 bg-white/10 p-4 rounded-lg text-sm animate-fadeIn">
                {item.more.subjects && (
                  <>
                    <p><strong>Subjects:</strong> {item.more.subjects}</p>
                    <p><strong>Percentage:</strong> {item.more.percentage}</p>
                    <p><strong>Year of Passing:</strong> {item.more.passing}</p>
                  </>
                )}

                {item.more.branch && (
                  <>
                    <p><strong>Branch:</strong> {item.more.branch}</p>
                    <p><strong>CPI:</strong> {item.more.cpi}</p>
                    <p><strong>Year of Passing:</strong> {item.more.passing}</p>
                    <p className="mt-2"><strong>Semester-wise CPI:</strong></p>
                    <ul className="list-disc pl-6">
                      {Object.entries(item.more.semesterCPI).map(
                        ([sem, val]) => (
                          <li key={sem}>
                            {sem.toUpperCase()}: {val}
                          </li>
                        )
                      )}
                    </ul>
                  </>
                )}
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
