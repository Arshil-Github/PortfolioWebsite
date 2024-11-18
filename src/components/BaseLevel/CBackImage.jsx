import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import CurrentColorScheme from "../../../public/projectConfig";

const CBackImage = ({ image }) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div>
      {image ? (
        <motion.img
          src={image}
          className="absolute inset-0 w-full h-full object-cover z-[-1] blur-[5px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      ) : null}
      <div className="absolute inset-0 bg-black opacity-[80%] z-[-1]" />
    </div>
  );
};

export default CBackImage;
