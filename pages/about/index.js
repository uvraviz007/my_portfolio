// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaBrain,
  FaLinux,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiCplusplus,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

import Circles from "../../components/Circles";
import Avatar from "../../components/Avatar";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

// data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="1" />,
          <FaCss3 key="2" />,
          <FaJs key="3" />,
          <FaReact key="4" />,
          <SiNextdotjs key="5" />,
          <SiFramer key="6" />,
          <FaWordpress key="7" />,
        ],
      },

      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="8" />,
          <SiAdobexd key="9" />,
          <SiAdobephotoshop key="10" />,
        ],
      },

      {
        title: "Data Structure & Algorithm",
        icons: [<SiCplusplus key="11" />], // C++
      },

      {
        title: "Operating System",
        icons: [<FaLinux key="12" />], // Linux OS
      },

      {
        title: "AI / ML",
        icons: [<FaBrain key="13" />], // AI Brain icon
      },

      {
        title: "Database",
        icons: [
          <SiMongodb key="14" />,
          <SiPostgresql key="15" />,
        ],
      },
    ],
  },

  {
    title: "awards",
    info: [
      {
        title: "Wabtec Exceeds",
        stage: "2024 - 2025",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[320px] z-1"
      >
        <Avatar />
      </motion.div>

      {/* main container */}
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        
        {/* LEFT SIDE TEXT */}
        <div className="flex-1 flex flex-col justify-center z-20">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            About Me.{" "}
            <span className="text-accent"></span> 
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-8 px-2 xl:px-0"
          >
            I’m Ravi Sharma, currently pursuing my B.Tech in Computer Science
            and Engineering at MNNIT. I am based in Jaipur, Rajasthan. Before
            this, I completed my schooling in Kanpur, and I was born in Bihar.
            These experiences across different places have shaped my perspective
            and identity.
          </motion.p>

          {/* COUNTERS (WITH ANIMATION) */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">

              {/* EXPERIENCE */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10
              after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={0} duration={2} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                  Years of Experience
                </div>
              </div>

              {/* DSA QUESTIONS */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10
              after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={800} duration={3} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                  DSA Questions
                </div>
              </div>

              {/* PROJECTS */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10
              after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={7} duration={3} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                  Finished Projects
                </div>
              </div>

              {/* AWARDS */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={1} duration={2} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                  Winning Awards
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE TABS */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* TAB TITLES */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize xl:text-lg relative 
                  after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0 
                  ${
                    index === itemIndex &&
                    "text-accent after:bg-accent after:w-[100%] after:transition-all after:duration-300"
                  }`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 
                items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>

                <div className="flex gap-x-4">
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
