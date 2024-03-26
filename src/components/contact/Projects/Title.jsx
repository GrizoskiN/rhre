import React from 'react'

const Title = ({title, subtitle, paragraph}) => {
  return (
    <div className='flex flex-col lg:flex-row justify-between lg:items-start w-11/12 max-w-[1200px] m-auto my-16 lg:my-32'>
      <div className="mb-6 lg:mb-0 w-2/3">
      <h1 className='text-5xl font-bold '>{title}</h1>
      <h3 className='uppercase text-2xl  mt-2'>{subtitle}</h3>
      </div>
      <p className='text-lg md:w-2/3 xl:w-3/4'>{paragraph}</p>
    </div>
  )
}

export default Title
