import React from "react";
import PropTypes from "prop-types";
import instaLogo from "../../assets/instagram.png";
import linkedinLogo from "../../assets/linkedin.png";
import githubLogo from "../../assets/github.png";
import mailLogo from "../../assets/gmail.png";
import { motion } from "framer-motion";
import CurrentColorScheme from "../../../public/projectConfig";
import CSubTitle from "../BaseLevel/CSubTitle";

const WebLinks = {
  instagram: "https://www.instagram.com/arshil.mbd/",
  linkedin: "https://www.linkedin.com/in/arshil-mohd/",
  github: "https://github.com/Arshil-Github",
  mail: "mailto:mohdarshilmbd1@gmail.com",
};

const CLinkBlock = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <motion.div
      className={`flex flex-col text-white w-full h-full py-4 px-3 ${
        isMobile ? "p-4" : ""
      }`}
      initial={{
        backgroundColor: CurrentColorScheme["secondary"],
      }}
      whileHover={{
        border: `1px solid ${CurrentColorScheme["primary"]}`,
      }}
    >
      {/* <CSubTitle>Links</CSubTitle> */}
      <div className=" h-full flex justify-around">
        <SocialMediaButton
          text="Instagram"
          icon={instaLogo}
          link={WebLinks.instagram}
        />
        <SocialMediaButton
          text="LinkedIn"
          icon={linkedinLogo}
          link={WebLinks.linkedin}
        />
        <SocialMediaButton
          text="Github"
          icon={githubLogo}
          link={WebLinks.github}
        />
        <SocialMediaButton text="Mail" icon={mailLogo} link={WebLinks.mail} />
      </div>
    </motion.div>
  );
};
const SocialMediaButton = ({ text, icon, link }) => {
  return (
    <motion.button
      className="h-full w-fit text-xl px-2"
      onClick={() => window.open(link)}
      whileHover={{
        scale: 1.1,
        borderRight: `2px solid ${CurrentColorScheme["primary"]}`,
        borderLeft: `2px solid ${CurrentColorScheme["primary"]}`,
      }}
    >
      {/* <img src={icon} alt="" className="cover" /> */}
      {text}
    </motion.button>
  );
};

export default CLinkBlock;
