import React from 'react'

const LocationAdvantages = ({parts, check}) => {
  return (
    <div>
    <h3 className="font-semibold text-xl my-3">Location Advantages</h3>
    <ul className="grid lg:grid-cols-3">
      {parts[3].split("-").map((item, index) => (
        <li key={index} className="first:hidden flex items-center">
          <span className="mr-3">{check}</span> {item.trim()}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default LocationAdvantages
