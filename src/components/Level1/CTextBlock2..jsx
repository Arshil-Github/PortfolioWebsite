import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import CurrentColorScheme from "../../../public/projectConfig";
import CSubTitle from "../BaseLevel/CSubTitle";
import CSubTitle2 from "../BaseLevel/CSubTitle2";
import CText from "../BaseLevel/CText";
import CBackImage from "../BaseLevel/CBackImage";

const CTextBlock2 = ({ title, subtitle1, subtitle2, text, points, image }) => {
  const isMobile = window.innerWidth < 768;
  return (
    <motion.div
      className={`flex flex-col text-black w-full h-full py-8 px-6 ${
        isMobile ? "p-4" : ""
      }`}
      initial={{
        backgroundColor: CurrentColorScheme["primary"],
      }}
      whileHover={{
        scale: 1.01,
        border: `2px solid ${CurrentColorScheme["accent"]}`,
        backgroundColor: CurrentColorScheme["secondary"],
      }}
    >
      {/* Background Image */}
      {/* <CBackImage image={image} /> */}

      {/* MainHeading */}
      <CSubTitle>{title}</CSubTitle>

      {/* Second Line - SubTitle */}
      {subtitle1 === "" || subtitle2 === "" ? (
        <></>
      ) : (
        <div className="flex w-full justify-between mb-4 text-xl">
          <CSubTitle2>{subtitle1}</CSubTitle2>
          <CSubTitle2>{subtitle2}</CSubTitle2>
        </div>
      )}

      <div className="h-full  flex flex-col justify-between">
        {/* Description */}
        <CText className="mb-4 ">
          {isMobile ? text.substring(0, 200) + "..." : text}
        </CText>

        {/* Points */}
        {isMobile ? (
          <></>
        ) : (
          <div className="ml-20 text-lg font-thin h-[50%]">
            {points.map((point) => {
              return <li>{point}</li>;
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
};

CTextBlock2.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

CTextBlock2.defaultProps = {
  points: [],
  image: "",
  company: "",
  date: "",
};

export default CTextBlock2;
