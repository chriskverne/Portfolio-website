import React from 'react'
import Title from './Title'
import { awards } from '@/constants/constants'

const Awards = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-4/5'>
        <Title title={"Honors and Awards"} />
        <ul className='space-y-2 text-xs md:text-base'>
          {awards.map((award, index) => (
            <li key={index}>
              {award.title} &ndash; {award.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Awards
