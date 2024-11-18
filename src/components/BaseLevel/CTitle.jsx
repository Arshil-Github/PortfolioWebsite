import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import CurrentColorScheme from "../../../public/projectConfig";

const CTitle = ({ children }) => {
  return (
    <motion.p
      className="text-9xl font-thin"
      initial={{ color: CurrentColorScheme.primary }}
    >
      {children}
    </motion.p>
  );
};

CTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

CTitle.defaultProps = {};

export default CTitle;
