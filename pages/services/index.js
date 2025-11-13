
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import ServiceSlider from "../../components/ServiceSlider";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">

          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 xl:mt-8">My Education<span className="text-accent">.</span></motion.h2>
            <motion.p variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden"className="mb-4 maz-w-[400px] mx-auto lg:mx-0">
              B.Tech in Computer Science & Engineering
Motilal Nehru National Institute of Technology (MNNIT)
Final Year (Ongoing)
            </motion.p>
          </div>

          {/* slider */}
          <motion.div variants={fadeIn('down', 0.6)} initial="hidden" animate="show" exit="hidden" className="w-full xl:max-w-[65%] ">
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
