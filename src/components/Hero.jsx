import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import profileImage from "../assets/profile.jpeg"; // Add correct path
import { FaLinkedin, FaEnvelope, FaRobot } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-center items-center text-center px-4">
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <img 
          src={profileImage} 
          alt="Profile" 
          className="mt-12 w-40 h-40 sm:w-60 sm:h-60 rounded-full object-cover border-4 border-white shadow-lg"
        />

        {/* Name */}
        <h1 className="text-white text-3xl sm:text-5xl font-bold mt-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-[#915EFF] to-[#FF7A00] text-transparent bg-clip-text">
            Saikiranmansa Sunnam
          </span>
        </h1>

        {/* Typewriter Effect (Fixed Visibility) */}
        <p className="text-gray-300 text-lg sm:text-xl mt-4 font-medium">
          <Typewriter
            options={{
              strings: ["Software Engineer", "AI & ML Engineer", "NLP", "Gen AI Enthusiast"],
              autoStart: true,
              loop: true,
              deleteSpeed: "natural",
              pauseFor: 1000,
            }}
          />
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-6">
          <a href="https://linkedin.com/in/saikiranmansa-sunnam-7421b7258" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-3xl hover:text-blue-500 transition duration-300" />
          </a>
          <a href="mailto:ssaikiranmansa2023@gmail.com">
            <FaEnvelope className="text-white text-3xl hover:text-red-500 transition duration-300" />
          </a>
          <a href="https://huggingface.co/saikiranmansa" target="_blank" rel="noopener noreferrer">
            <FaRobot className="text-white text-3xl hover:text-yellow-500 transition duration-300" />
          </a>
        </div>

        {/* Scroll Down Animation */}
        <a href="#about" className="mt-10">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>

        {/* Contact & Resume Buttons (Side by Side on Desktop) */}
        <div className="mt-8 w-full flex flex-col sm:flex-row items-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3 text-white bg-gradient-to-r from-[#915EFF] to-[#FF7A00] hover:opacity-90 rounded-lg font-semibold">
              Contact Me
            </button>
          </a>
          <a href="/resume.pdf" download className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3 text-white bg-gradient-to-r from-[#915EFF] to-[#FF7A00] hover:opacity-90 rounded-lg font-semibold">
              Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
