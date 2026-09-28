import React from 'react'

const Title = ({title}) => {
  return (
    <div className='text-[#000000]'>
      <h1 className='text-[2rem] md:text-[3rem] md:font-medium'>{title}</h1>
    </div>
  )
}

export default Title