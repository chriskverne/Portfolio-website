import React from 'react'
import Title from './Title'
import { services } from '@/constants/constants'

const Service = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-4/5'>
        <Title title={"Reviewing and Service"} />
        <ul className='space-y-2 text-xs md:text-base'>
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Service
