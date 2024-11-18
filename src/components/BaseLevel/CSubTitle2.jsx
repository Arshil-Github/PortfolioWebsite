import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import CurrentColorScheme from "../../../public/projectConfig";

const CSubTitle2 = ({ children, color }) => {
  const isMobile = window.innerWidth <= 768;

  const textColor = CurrentColorScheme[color]
    ? CurrentColorScheme[color]
    : "white";

  return (
    <motion.p
      className={"font-thin " + (isMobile ? "text-lg" : "text-xl")}
      initial={{ color: textColor }}
    >
      {children}
    </motion.p>
  );
};

CSubTitle2.propTypes = {
  title: PropTypes.string.isRequired,
};

CSubTitle2.defaultProps = {
  color: "white",
};

export default CSubTitle2;
