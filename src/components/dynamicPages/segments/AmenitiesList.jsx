import React from 'react'

const AmenitiesList = ({parts, check}) => {
  return (
    <div>
      {parts[2] && (
        <h3 className="font-semibold text-xl my-3">Amenities</h3>
      )}
      <ul className="grid lg:grid-cols-3">
        {parts[2] &&
          parts[2].split("-").map((item, index) => (
            <li key={index} className="first:hidden flex items-center">
              <span className="mr-3">{check}</span> {item.trim()}
            </li>
          ))}
      </ul>
  </div>
  )
}

export default AmenitiesList
