import React, { useState, useEffect, useRef } from "react";
import { easeIn, motion } from "framer-motion";

const ProjectTile = ({
  title,
  subtitle,
  description,
  image,
  rowspan = 1,
  colspan = 1,
  customClass,
  mousePosition,
  setCursorVariant,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const isMobile = window.innerWidth <= 768;

  const variants = {
    default: {
      backgroundColor: "black",
      opacity: 0.5,
      transition: 0,
    },
    hovered: {
      backgroundColor: "#ef4444",
      opacity: 1,
    },
  };

  return (
    <motion.div
      className={
        "relative min-h-[30vh] h-full w-[100%] bg-white overflow-clip" +
        ` col-span-${colspan} row-span-${rowspan} ` +
        customClass
      }
      onMouseEnter={() => {
        setIsHovered(true);
        setCursorVariant("OnBlock");
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setCursorVariant("default");
      }}
    >
      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover "
      />
      <button
        className="absolute top-0 right-0 h-full w-full z-20"
        onClick={
          !isMobile
            ? onClick
            : () => {
                if (isHovered) {
                  onClick();
                }
              }
        }
      />

      <motion.div
        className="absolute w-full h-full"
        variants={variants}
        animate={isHovered ? "hovered" : "default"}
      />

      <div className="absolute left-0 p-2 w-full h-full text-white flex flex-col justify-center items-center">
        <motion.p
          className="text-center text-5xl tracking-tighter overflow-hidden mb-0"
          variants={{
            hover: {
              scale: 1.1,
              fontWeight: 400,
              textShadow: "0px 0px 8px black",
              duration: 0.3,
            },
            default: {
              fontWeight: 50,
            },
          }}
          animate={isHovered ? "hover" : "default"}
        >
          {title}
        </motion.p>

        {isHovered ? (
          <div className="w-full">
            <motion.p className=" text-center text-lg tracking-tighter duration-75">
              {description.length > 100
                ? description.substring(0, 100) + "..."
                : description}
            </motion.p>
            {isMobile ? (
              <motion.div className="bg-red-700 w-full mt-3 p-2 text-center z-auto font-mono tracking-tighter shadow-sm shadow-black">
                {"Click again for more info"}
              </motion.div>
            ) : (
              <> </>
            )}
          </div>
        ) : (
          <motion.p className="text-center font-serif tracking-wider mb-2">
            {subtitle}
          </motion.p>
        )}
      </div>
      {isHovered && !isMobile ? (
        <motion.div
          className="fixed w-fit h-fit max-w-[25vw] max-h-[25vh] top-0 left-0 overflow-clip z-10 flex justify-center items-center"
          style={{
            transition: { delay: 0 },
            x: mousePosition.x + 20,
            y: mousePosition.y + 25,
          }}
        >
          <motion.div
            className="absolute w-full h-full"
            variants={variants}
            animate="default"
          />
          <motion.img
            src={image}
            className="cover"
            variants={{
              default: {
                transition: 0,
              },
            }}
            animate="default"
          />
        </motion.div>
      ) : (
        <></>
      )}
    </motion.div>
  );
};

// ProjectTile.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   imageUrl: PropTypes.string.isRequired,
//   projectUrl: PropTypes.string.isRequired,
// };

export default ProjectTile;
