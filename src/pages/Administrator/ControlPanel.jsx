import React, { useState, useEffect } from "react";
// import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import ProjectType from "../../assets/ProjectCustoms";

const ControlPanel = () => {
  const [projectName, setProjectName] = useState("");
  const [projectSummary, setProjectSummary] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectImage, setProjectImage] = useState(null);
  const [projectLink, setProjectLink] = useState("");
  const [projectType, setProjectType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", projectName);
    formData.append(
      "summary",
      projectSummary.replace(/\n/g, " ").replace(",", " ")
    ); // Replace newlines with spaces
    formData.append(
      "description",
      projectDescription.replace(/\n/g, " ").replace(",", " ")
    );
    formData.append("image", projectImage); // Assuming projectImage is a File object
    formData.append("link", projectLink);
    formData.append("type", projectType);

    try {
      const response = await fetch("http://localhost:3000/add-project", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json", // Add the Content-Type header
        // },
        body: formData,
      });

      if (response.status === 201) {
        alert("Project added successfully");
        setProjectName("");
        setProjectSummary("");
        setProjectDescription("");
        setProjectImage(null);
        setProjectLink("");
      } else {
        console.log(response);
        alert("Failed to add project");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-black min-h-screen p-5 text-white">
      {/* <Heading> Control Panel </Heading> */}
      <div className="m-3 bg-slate-300 py-4 px-3">
        <SubHeading> Adding Project </SubHeading>
        <form onSubmit={handleSubmit} className="text-black py-5">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Project Summary"
              value={projectSummary}
              onChange={(e) => setProjectSummary(e.target.value)}
              rows={3}
              cols={10}
              className="p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Project Description"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              rows={8}
              cols={10}
              className="p-2 rounded-md"
            />
            <input
              type="file"
              accept="image/*"
              placeholder="Project Image"
              onChange={(e) => setProjectImage(e.target.files[0])}
              className="p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Project Link"
              value={projectLink}
              onChange={(e) => setProjectLink(e.target.value)}
              className="p-2 rounded-md"
            />
            <select
              value={projectType}
              onChange={(e) => {
                setProjectType(e.target.value);
              }}
              className="p-2 rounded-md"
            >
              <option value="" disabled>
                Select Project Type
              </option>
              {Object.values(ProjectType).map((type, index) => (
                <option key={type} value={Object.keys(ProjectType)[index]}>
                  {type.title}
                </option>
              ))}
            </select>
            <button type="submit" className="p-2 bg-slate-400 rounded-md">
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

function arrayToCSV(data) {
  return data.map((row) => row.join(",")).join("\n");
}

export default ControlPanel;
