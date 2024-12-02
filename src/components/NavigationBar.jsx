import React from "react";
import { useNavigate } from "react-router";
import NavButton from "./BaseLevel/CNavButton";
import { motion } from "framer-motion";
import CurrentColorScheme from "../../public/projectConfig";
import CSubTitle from "./BaseLevel/CSubTitle";
import CSubTitle2 from "./BaseLevel/CSubTitle2";

const NavigationBar = ({ activeTab }) => {
  const isMobile = window.innerWidth < 768;
  const navigate = useNavigate();

  if (isMobile) {
    return (
      <div>
        <MobileNavigationBar />
      </div>
    );
  }
  return (
    <motion.div className="sticky top-0 z-50 flex justify-between max-w-[100vw] bg-slate-200 text-white">
      <NavButton navLoc="/">Home</NavButton>
      <NavButton navLoc="/experience">Experience</NavButton>
      <NavButton navLoc="/projects">Projects</NavButton>
      <NavButton navLoc="/about">About</NavButton>
    </motion.div>
  );
};

const MobileNavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <motion.div className="fixed h-fit w-full z-50 ">
      <motion.button
        className="absolute top-0 right-0 z-50 m-5 w-[10vw] h-[10vw] bg-slate-200 shadow-md shadow-black"
        variants={{
          default: {
            backgroundColor: CurrentColorScheme["primary"],
          },
        }}
        initial="default"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      {
        // If the menu is closed, return nothing
        isMenuOpen ? (
          <motion.div
            className="flex flex-col justify-center items-center ml-auto mt-[2vw] h-fit w-4/5  shadow-md shadow-black"
            variants={{
              default: {
                backgroundColor: CurrentColorScheme["accent"],
              },
            }}
            initial="default"
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
          >
            <div className="mt-3">
              <CSubTitle>Menu</CSubTitle>
            </div>
            <div className="flex flex-col h-full w-full m-3 ">
              <NavButton navLoc="/">Home</NavButton>
              <NavButton navLoc="/experience">Experience</NavButton>
              <NavButton navLoc="/projects">Projects</NavButton>
              <NavButton navLoc="/about">About</NavButton>
            </div>
          </motion.div>
        ) : (
          <></>
        )
      }
    </motion.div>
  );
};

export default NavigationBar;
