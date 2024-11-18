import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import CurrentColorScheme from "../../../public/projectConfig";

const CSubTitle = ({ children, color }) => {
  const isMobile = window.innerWidth <= 768;

  const textColor = CurrentColorScheme[color]
    ? CurrentColorScheme[color]
    : "white";

  return (
    <motion.p
      className={"font-thin " + (isMobile ? "text-4xl" : "text-5xl")}
      initial={{ color: textColor }}
    >
      {children}
    </motion.p>
  );
};

CSubTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

CSubTitle.defaultProps = {
  color: "white",
};

export default CSubTitle;
