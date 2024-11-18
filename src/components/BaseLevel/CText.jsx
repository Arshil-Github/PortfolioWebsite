import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import CurrentColorScheme from "../../../public/projectConfig";

const CText = ({ children, color }) => {
  const isMobile = window.innerWidth <= 768;

  const textColor = CurrentColorScheme[color]
    ? CurrentColorScheme[color]
    : "white";

  return (
    <motion.p
      className={
        "tracking-tighter text-justify" + (isMobile ? " text-lg" : " text-lg")
      }
      initial={{ color: textColor }}
    >
      {children}
    </motion.p>
  );
};

CText.propTypes = {
  title: PropTypes.string.isRequired,
};

CText.defaultProps = {
  color: "white",
};

export default CText;
