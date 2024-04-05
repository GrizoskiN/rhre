import React from 'react'

const Description = ({parts}) => {
  return (
    <div className='border-b-[1px] pb-5 lg:pb-11 mb-5 lg:mb-11 border-royal/70'>
       <h1 className="font-semibold text-xl my-3">Project Description</h1>
      <p className="first-child:font-bold">{parts[0]}</p>
    </div>
  )
}

export default Description
