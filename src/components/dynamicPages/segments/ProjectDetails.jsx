import React from 'react'

const ProjectDetails = ({parts, check}) => {
  return (
    <div>
    <h3 className="font-semibold text-xl my-3">Project Details</h3>
    <ul className="grid lg:grid-cols-3">
      {parts[1].split("-").map((item, index) => (
        <li key={index} className="first:hidden flex items-start ">
          <span className="mr-3 pt-1">{check}</span> {item.trim()}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default ProjectDetails
