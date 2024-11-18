import React, { act } from "react";
import { motion } from "framer-motion";
import CurrentColorScheme from "../../../public/projectConfig";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";

const NavButton = ({ children, navLoc }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === navLoc;
  return (
    <motion.button
      className="text-3xl font-semibold tracking-tight text-black py-4 items-center bg-red-100 w-full"
      onClick={() => {
        navigate(navLoc);
      }}
      variants={{
        default: {
          backgroundColor: CurrentColorScheme["accent"],
          color: "black",
        },
        hover: {
          backgroundColor: CurrentColorScheme["primary"],
          color: "white",
          zIndex: 1,
        },
        active: {
          backgroundColor: CurrentColorScheme["secondary"],
          color: "white",
          scale: 1.1,
          zIndex: 2,
        },
      }}
      whileHover="hover"
      initial="default"
      animate={isActive ? "active" : "default"}
    >
      {children}
    </motion.button>
  );
};

export default NavButton;
