import React from "react";
import { motion } from "framer-motion";
import instaLogo from "../assets/instagram.png";
import linkedinLogo from "../assets/linkedin.png";
import githubLogo from "../assets/github.png";
import mailLogo from "../assets/gmail.png";
import CTextBlock1 from "../components/Level1/CTextBlock1";
import CTextBlock2 from "../components/Level1/CTextBlock2.";
import CLinkBlock from "../components/Level1/CLinkBlock";
import AboutBg from "../assets/aboutBg.jpeg";

const bioText = `I'm a second-year college student enthusiastic from Noida about game
  development, machine learning, fullstack development and everything
  tech. I was born in Moradabad. I thrive on seeking new opportunities and
  learning experiences within the industry. I am always on the lookout new
  skills and hobbies to expand my horizon. I like reading, playing games,
  sketching, messing around with my guitar, fitness with a bit of sports.
  My favorite game series, anime, and books are Persona, Blue Period and
  War of Art. My digital artistic endeavors span both 2D and 3D realms. In
  2D, I specialize in pixel art using Asprite and vector art through
  Photoshop, creating diverse character designs and animations. I've also
  honed skills in perspective and environmental design. In 3D, I'm
  proficient in Houdini Engine and Blender, continuously refining my
  mastery in the latter. In 2d, my favorite style is pixel art. I use
  Aspirite for that. I also know how to make vector art using Photoshop. I
  can make character with different designs and animations. I have also
  learned about perspective and environmental design. In 3D, my favorite
  tool to use is definitely Houdini Engine. I love how they applied logic
  to 3D art. I also know how to use blender. I am still learning it so it
  might take some time to master it.`;

const AboutPage = () => {
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    return (
      <motion.div className="flex flex-col w-full p-4 gap-4 bg-black text-white">
        <CTextBlock1
          title="About me"
          text={bioText}
          image={AboutBg}
          fullText={true}
        />
        <CTextBlock2
          title="Post a message"
          text="You can post a message here. I will try to reply as soon as possible."
        />
        <CTextBlock2
          title="Blogs"
          text="Coming soon! I am working on it. Stay tuned."
        />
        <div className="h-[10%]">
          {/* <ConnectSection /> */}
          <CLinkBlock
            title="Links"
            description="You can connect with me on these platforms."
          />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div className="flex flex-col h-full grid-cols-2 p-4 gap-4 bg-black text-white">
      <div className="w-full h-[90%] flex gap-4">
        {/* <AboutSection /> */}
        <CTextBlock1 title="About me" text={bioText} image={AboutBg} />
        <div className="flex flex-col gap-4 w-[80%]">
          {/* <PostAMessage /> */}
          <CTextBlock2
            title="Post a message"
            text="You can post a message here. I will try to reply as soon as possible."
          />
          {/* <ComingSoon /> */}
          <CTextBlock2
            title="Blogs"
            text="Coming soon! I am working on it. Stay tuned."
          />
        </div>
      </div>
      <div className="h-[10%]">
        {/* <ConnectSection /> */}
        <CLinkBlock
          title="Links"
          description="You can connect with me on these platforms."
        />
      </div>
    </motion.div>
  );
};

const AboutSection = ({ title, description }) => {
  return (
    <motion.div className="text-white bg-slate-900 w-full  lg:p-8 border-2 border-red-400">
      <h1 className="text-4xl text-center py-5">About me</h1>
      <p className="mb-4 text-xl text-justify ">
        I'm a second-year college student enthusiastic from Noida about game
        development, machine learning, fullstack development and everything
        tech. I was born in Moradabad. I thrive on seeking new opportunities and
        learning experiences within the industry. I am always on the lookout new
        skills and hobbies to expand my horizon. I like reading, playing games,
        sketching, messing around with my guitar, fitness with a bit of sports.
        My favorite game series, anime, and books are Persona, Blue Period and
        War of Art. My digital artistic endeavors span both 2D and 3D realms. In
        2D, I specialize in pixel art using Asprite and vector art through
        Photoshop, creating diverse character designs and animations. I've also
        honed skills in perspective and environmental design. In 3D, I'm
        proficient in Houdini Engine and Blender, continuously refining my
        mastery in the latter. In 2d, my favorite style is pixel art. I use
        Aspirite for that. I also know how to make vector art using Photoshop. I
        can make character with different designs and animations. I have also
        learned about perspective and environmental design. In 3D, my favorite
        tool to use is definitely Houdini Engine. I love how they applied logic
        to 3D art. I also know how to use blender. I am still learning it so it
        might take some time to master it.
      </p>
    </motion.div>
  );
};

const WebLinks = {
  instagram: "https://www.instagram.com/arshil.mbd/",
  linkedin: "https://www.linkedin.com/in/arshil-mohd/",
  github: "https://github.com/Arshil-Github",
  mail: "mailto:mohdarshilmbd1@gmail.com",
};

const ConnectSection = () => {
  return (
    <div className="flex flex-col w-full h-full bg-slate-900 border-2 border-red-400 p-3">
      <h1 className="text-4xl text-center py-5">Links</h1>
      <div className=" h-full grid grid-cols-4 gap-5">
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
    </div>
  );
};
const SocialMediaButton = ({ text, icon, link }) => {
  return (
    <motion.button className="h-full w-full" onClick={() => window.open(link)}>
      {/* <img src={icon} alt="" className="cover" /> */}
      <a href={link}> {text} </a>
    </motion.button>
  );
};

const ComingSoon = () => {
  return (
    <div className="flex flex-col w-full h-full bg-slate-900 border-2 border-red-400 p-3">
      <h1 className="text-4xl text-center py-5">Blogs</h1>
      <p className="text-xl text-center">
        Coming soon! I am working on it. Stay tuned.
      </p>
    </div>
  );
};

const PostAMessage = () => {
  return (
    <div className="flex flex-col w-full h-full bg-slate-900 border-2 border-red-400 p-3">
      <h1 className="text-4xl text-center py-5">Post a message</h1>
      <p className="text-xl text-center">
        You can post a message here. I will try to reply as soon as possible.
      </p>
    </div>
  );
};

export default AboutPage;
