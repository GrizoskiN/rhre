import React from 'react'

const Title = ({title, subtitle, paragraph}) => {
  return (
    <div className='flex flex-col lg:flex-row justify-between lg:items-end w-11/12 max-w-[1400px] m-auto my-16 lg:my-32'>
      <div className="mb-6 lg:mb-0 w-2/3">
      <h1 className='text-5xl font-bold lg:text-7xl'>{title}</h1>
      <h3 className='uppercase text-2xl lg:text-4xl'>{subtitle}</h3>
      </div>
      <p className='text-xl xl:text-2xl md:w-2/3 xl:w-2/4'>{paragraph}</p>
    </div>
  )
}

export default Title
