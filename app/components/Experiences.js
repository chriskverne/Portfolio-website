import React from 'react'
import Experience from './Experience'
import Title from './Title'
import { experiences } from '@/constants/constants'

const Experiences = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-4/5 flex items-center'>
        <Title title={"Work Experience"} />
      </div>

      <div className='w-4/5 space-y-6'>
        {experiences.map((experience, i) => (
          <Experience key={i} job={experience} />
        ))}
      </div>
    </div>
  )
}

export default Experiences
