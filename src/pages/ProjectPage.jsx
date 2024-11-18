import React, { useState, useEffect, useRef } from "react";
import testImage from "../assets/testImage.png";
import { easeIn, easeInOut, motion } from "framer-motion";
import Papa from "papaparse";
import Button from "../components/BaseLevel/CNavButton";
import ProjectTile from "../components/Level1/ProjectTile";
import ProjectType from "../assets/ProjectCustoms";

const ProjectPage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [projects, setProjects] = useState([]);
  const [projectType, setProjectType] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", (e) => {
      setIsMobile(window.innerWidth <= 768);
    });

    window.addEventListener("mousemove", (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    });

    fetch("../public/projects.csv")
      .then((response) => response.text())
      .then((data) => {
        Papa.parse(data, {
          header: true,
          complete: (results) => {
            setProjects(results.data);
            console.log(results.data);
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      window.removeEventListener("resize", () => {});
      window.removeEventListener("mousemove", () => {});
    };
  }, []);
  return (
    <div className="bg-black flex-grow h-fit p-5 w-full">
      <div className="flex-grow grid lg:grid-rows-4 lg:grid-cols-4 gap-4 sm:max-h-[100vh] lg:gap-y-[200px]">
        {projects.map((project, index) => {
          if (
            projectType == null ||
            (projectType != null && project.type === projectType)
          ) {
            return (
              <ProjectTile
                key={index}
                title={project.name}
                subtitle={project.summary}
                description={project.description}
                image={"public/projectImages/" + project.image}
                mousePosition={mousePos}
                setCursorVariant={setCursorVariant}
                onClick={() => {
                  window.open(project.link);
                }}
              />
            );
          }
        })}
        {/* <ProjectTile
          title="Hello"
          subtitle="Testing Block"
          description="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem "
          image={testImage}
          mousePosition={mousePos}
          setCursorVariant={setCursorVariant}
          onClick={() => {
            window.open("https://google.com");
          }}
        /> */}
      </div>

      {isMobile ? (
        <ProjectNavigatorMobile
          currentType={projectType}
          setProjectType={setProjectType}
        />
      ) : (
        <ProjectNavigator
          currentType={projectType}
          setProjectType={setProjectType}
        />
      )}
      {/* <motion.div
        className="w-10 h-10 bg-red-400 absolute rounded-full top-0 left-0 pointer-events-none opacity-0"
        variants={cursorVariants}
        animate={cursorVariant}
      /> */}
      {/* Add your project components or details here */}
    </div>
  );
};

const ProjectNavigator = ({ currentType, setProjectType }) => {
  return (
    <div className="fixed top-[90%] left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[50vw] rounded-full text-center bg-white p-0 overflow-clip z-50">
      <motion.div className={` grid grid-rows-1 grid-cols-4 z-20 p-0`}>
        {Object.values(ProjectType).map((type, index) => {
          return (
            <motion.button
              className="py-3 text-xl font-semibold tracking-tighter"
              initial={{
                backgroundColor: "white",
                color: "black",
              }}
              animate={{
                backgroundColor:
                  currentType === Object.keys(ProjectType)[index]
                    ? type.color
                    : "white",
                color:
                  currentType === Object.keys(ProjectType)[index]
                    ? "white"
                    : "black",
              }}
              whileHover={{
                scale: 1.1,
                color:
                  currentType === Object.keys(ProjectType)[index]
                    ? "white"
                    : type.color,
                zIndex: 10,
              }}
              onClick={() => {
                setProjectType(Object.keys(ProjectType)[index]);
              }}
            >
              {type.title}
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
};
const ProjectNavigatorMobile = ({ currentType, setProjectType }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 min-w-[100vw] rounded text-center bg-white overflow-clip z-50 p-0"
      variants={{
        default: {
          height: "6vh",
        },
        open: {
          height: "40vh",
        },
      }}
      animate={isOpen ? "open" : "default"}
    >
      {!isOpen ? (
        <motion.button
          className="h-full text-xl font-mono font-semibold tracking-tighter w-full"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          animate={{
            backgroundColor:
              currentType != null ? ProjectType[currentType].color : "white",
            color: currentType != null ? "white" : "black",
          }}
        >
          {currentType != null
            ? ProjectType[currentType].title
            : "Select a Project Type:"}
        </motion.button>
      ) : (
        <div className="grid grid-rows-4 bg-red-100 h-full w-full">
          {Object.values(ProjectType).map((type, index) => {
            return (
              <motion.button
                className="py-3 text-xl font-semibold tracking-tighter"
                initial={{
                  backgroundColor: "white",
                  color: "black",
                }}
                animate={{
                  backgroundColor:
                    currentType === Object.keys(ProjectType)[index]
                      ? type.color
                      : "white",
                  color:
                    currentType === Object.keys(ProjectType)[index]
                      ? "white"
                      : "black",
                }}
                whileHover={{
                  scale: 1.1,
                  color:
                    currentType === Object.keys(ProjectType)[index]
                      ? "white"
                      : type.color,
                  zIndex: 10,
                }}
                onClick={() => {
                  setProjectType(Object.keys(ProjectType)[index]);
                  setIsOpen(!isOpen);
                }}
              >
                {type.title}
              </motion.button>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};
export default ProjectPage;
