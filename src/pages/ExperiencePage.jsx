import React from "react";
import { motion } from "framer-motion";
import UnityWallpaper from "../assets/unityImage.png";
import UnrealWallpaper from "../assets/unrealImage.jpg";
import CTextBlock1 from "../components/Level1/CTextBlock1";

const internships = [
  {
    title: "Unreal Developer Intern",
    company: "Singular Studio",
    date: "2024 - 2024",
    description:
      "My second internship as a game developer was a formative experience that built upon the lessons I learned during my inaugural internship. Working on a commercially released title, 'Frontier Paladin,' I rapidly expanded my skillset, mastering Unreal Engine and C++ from the ground up. My problem-solving abilities were put to the test as I designed and implemented a robust pooling system to optimize game performance. Throughout this process, I demonstrated strong attention to detail and a collaborative spirit, contributing to the overall success of the project. This internship provided me with invaluable hands-on experience in professional game development, solidifying my passion for the industry and my commitment to continuous learning and growth.",
    points: [
      "Designed and implemented a robust pooling system to optimize game performance",
      "Demonstrated strong learning agility by mastering Unreal Engine and C++ from scratch during the internship",
      "Created a robust subsystem for character and projectile pooling, showcasing ability to design and implement complex systems ",
    ],
    imagePath: UnrealWallpaper,
  },
  {
    title: "Unity Developer Intern",
    company: "IDZ Digital Pvt. Ltd.",
    date: "2023 - 2023",
    description:
      "During my inaugural internship as a game developer, I experienced tremendous growth and learning opportunities. Contributing to the creation of one prototype per week, I encountered challenges that illuminated my personal limitations, providing valuable insights for self-improvement. While the technical aspects were generally manageable, this experience proved pivotal in identifying areas for my professional development. I'm sincerely grateful to the company for granting me this invaluable opportunity to learn and contribute as an intern.",
    points: [
      "Developed one prototype per week, contributing to the overall project pipeline",
      "Demonstrated strong problem-solving skills by identifying and resolving technical issues",
      "Showcased ability to work under pressure and meet tight deadlines",
    ],
    imagePath: UnityWallpaper,
  },
];
const ExperiencePage = () => {
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    return (
      <div className="bg-black grid h-full grid-rows-2 p-4 gap-4">
        <CTextBlock1
          title={internships[0].title}
          subtitle1={internships[0].company}
          subtitle2={internships[0].date}
          text={internships[0].description}
          points={internships[0].points}
          image={UnrealWallpaper}
        />
        <CTextBlock1
          title={internships[1].title}
          subtitle1={internships[1].company}
          subtitle2={internships[1].date}
          text={internships[1].description}
          points={internships[1].points}
          image={UnityWallpaper}
        />
      </div>
    );
  }

  return (
    <motion.div className="bg-black grid lg:grid-cols-2 flex-grow justify-between gap-10 p-10 max-h-full">
      <CTextBlock1
        title={internships[0].title}
        subtitle1={internships[0].company}
        subtitle2={internships[0].date}
        text={internships[0].description}
        points={internships[0].points}
        image={UnrealWallpaper}
      />
      <CTextBlock1
        title={internships[1].title}
        subtitle1={internships[1].company}
        subtitle2={internships[1].date}
        text={internships[1].description}
        points={internships[1].points}
        image={UnityWallpaper}
      />
    </motion.div>
  );
};

const ExperienceBlock = ({
  title,
  company,
  date,
  description,
  points = ["Point 1", "Point 2"],
  image,
}) => {
  const isMobile = window.innerWidth < 768;
  return (
    <motion.div
      className={`flex flex-col text-white bg-slate-800 w-full h-full lg:p-8 ${
        isMobile ? "p-4" : ""
      }`}
      whileHover={{
        scale: 1.01,
        boxShadow: "6px 6px 1px 1px red",
      }}
    >
      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />
      <div className="absolute inset-0 bg-black opacity-[80%] z-[-1]" />

      <h2 className="text-4xl tracking-tighter mb-4">{title}</h2>
      <div className="flex w-full justify-between mb-4 text-xl">
        <h3>{company}</h3>
        <p>{date}</p>
      </div>

      <p className="mb-4">
        {isMobile ? description.substring(0, 200) + "..." : description}
      </p>
      {isMobile ? (
        <></>
      ) : (
        <div className="ml-20 text-lg">
          <li>{points[0]}</li>
          <li>{points[1]}</li>
          <li>{points[2]}</li>
        </div>
      )}
    </motion.div>
  );
};

export default ExperiencePage;
