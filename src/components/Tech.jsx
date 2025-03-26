import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { softwaredevelopment } from "../constants";
import { AIML } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col items-center bg-transparent relative">
      {/* Title */}
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Technologies</h2>
      </motion.div>

      {/* My Work 1 Section */}
        <p className={`${styles.sectionSubText} text-[#327fa8] text-center`}>Software Development</p>

      {/* Scrolling Tech Stack */}
      <div className="w-full flex relative mt-10">
        <motion.div
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{ display: "flex", minWidth: "max-content" }}
        >
          {[...softwaredevelopment, ...softwaredevelopment].map(({ name, icon }, index) => (
            <div
              key={index}
              className="w-24 h-24 p-3 bg-white/10 rounded-xl flex items-center justify-center 
                        shadow-lg shadow-gray-900 shadow-blue-500 transition-all duration-300"
            >
              <img src={icon} alt={name} className="w-16 h-16 object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
      <br></br>
      <br></br>


      {/* My Work 2 Section */}
        <p className={`${styles.sectionSubText} text-[#327fa8] text-center`}>AI and ML</p>

      {/* Scrolling Tech Stack */}
      <div className="w-full flex relative mt-10">
        <motion.div
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{ display: "flex", minWidth: "max-content" }}
        >
          {[...AIML, ...AIML].map(({ name, icon }, index) => (
            <div
              key={index}
              className="w-24 h-24 p-3 bg-white/10 rounded-xl flex items-center justify-center 
                        shadow-lg shadow-gray-900 shadow-blue-500 transition-all duration-300"
            >
              <img src={icon} alt={name} className="w-16 h-16 object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
