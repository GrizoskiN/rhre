import React from "react";

const ProjectDetails = ({ parts, check }) => {
  return (
    <div className="border-b-[1px] pb-5 lg:pb-11 mb-5 lg:mb-11 border-royal/70">
      {parts[1] && (
        <h3 className="font-semibold text-xl my-3">Project Details</h3>
      )}
      <ul className="grid lg:grid-cols-3">
        {parts[1] &&
          parts[1].split("-").map((item, index) => (
            <li key={index} className="first:hidden flex items-center">
              <span className="mr-3">{check}</span> {item.trim()}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
