import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import BackgroundImage from "../assets/herobg.jpg";
import CTitle from "../components/BaseLevel/CTitle";
import CSubTitle from "../components/BaseLevel/CSubTitle";

const LandingPage = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <motion.div className="flex-grow flex flex-col h-full justify-center">
      <img
        src={BackgroundImage}
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />
      <div className="absolute inset-0 bg-black opacity-[70%] z-[-1]" />
      <div className="flex flex-col p-[10vw] lg:text-left md:text-center">
        <CTitle>Arshil</CTitle>
        <div className="flex gap-4">
          <CSubTitle>{isMobile ? " " : "I am a "}</CSubTitle>
          <CSubTitle color="accent">
            <ReactTyped
              strings={[
                "Game Developer.",
                "Web Developer.",
                "ML Connusieur.",
                "Student.",
                "Human?",
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </CSubTitle>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
