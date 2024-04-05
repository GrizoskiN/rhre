import React from 'react'

const ProjectInfo = ({fullTextAmenities, check}) => {
  return (
    <div>
      <h1 className="font-semibold text-xl my-3">Property Highlights</h1>
    <ul className="grid lg:grid-cols-3">
    {fullTextAmenities.split(', ').map((amenity, index) => (
      <li key={index} className="first:hidden flex items-center"><span className="mr-3">{check}</span>  {amenity}</li> ))}
    </ul>
  </div>
  )
}

export default ProjectInfo
