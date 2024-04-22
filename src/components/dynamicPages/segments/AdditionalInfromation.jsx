import React from 'react'

const AdditionalInformation = ({parts, check}) => {
  return (
    <div>
{parts[4] && (
  <h3 className="font-semibold text-xl my-3">Additional Information</h3>
)}

  {parts[4] && parts[4].split("-").map((item, index) => (
    <p key={index} className="first:hidden flex items-center">
      {item.trim()}
    </p>
  ))}



  </div>
  )
}

export default AdditionalInformation
