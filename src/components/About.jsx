import { motion } from "framer-motion";
import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// Import images
import ubimage from "../assets/ub.png"; // Add correct path
import grietimage from "../assets/griet.png"; // Add correct path

const Card = ({ icon, title, degree, coursework }) => (
  <div className="w-full bg-gradient-to-br from-[#915EFF] to-[#FF7A00] p-[1px] rounded-[20px] shadow-lg">
    <div className="bg-tertiary rounded-[20px] p-4 sm:p-6 flex items-center gap-4 sm:gap-6">
      {/* University Logo */}
      <div className="h-16 w-16 bg-transparent rounded-full flex items-center justify-center">
        <img src={icon} alt={title} className="md:h-16 md:w-16 w-8 h-8 rounded-full" />
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        <h3 className="text-[#327fa8] text-lg sm:text-xl font-bold">{title}</h3>
        <p className="text-gray-300 text-sm sm:text-base">
          <span className="font-semibold">Degree:</span> {degree}
        </p>
        <p className="text-gray-300 text-sm sm:text-base">
          <span className="font-semibold">Related Coursework:</span> {coursework}
        </p>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <h2 className={`${styles.sectionHeadText} text-white text-xl sm:text-3xl`}>Hello,</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-400 text-sm sm:text-base leading-[26px] sm:leading-[30px]"
      >
        I’m a passionate Machine Learning Engineer with 2+ years of experience, including 1 year as a Data Scientist at a startup where I built data pipelines, 
        fraud detection models, and A/B testing frameworks that improved user engagement and operational efficiency. I recently completed my MS in Computer Science 
        from the University at Buffalo and specialize in production-grade ML solutions using PyTorch, TensorFlow, and MLOps tools. My expertise spans deep learning, 
        computer vision, and NLP, with a growing interest in Generative AI and LLMs. I thrive on building intelligent systems that translate complex algorithms into impactful, 
        real-world applications.
      </motion.p>

      {/* Education Section */}
      <div className="mt-8 flex flex-col gap-6">
        <Card
          icon={ubimage} // Using imported UB image
          title="State University of New York at Buffalo"
          degree="Master's in Computer Science"
          coursework="Analysis of Algorithms, Machine Learning, Deep Learning, Big Data, Computer Vision, Image Processing, Operating Systems"
        />
        <Card
          icon={grietimage} // Using imported GRIET image
          title="Gokaraju RangaRaju Institute of Engineering and Technology"
          degree="Bachelors in Computer Science & Engineering"
          coursework="Python, Cloud Computing, AI, Data Structures, Computer Architecture"
        />
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, "about");

export default WrappedAbout;
