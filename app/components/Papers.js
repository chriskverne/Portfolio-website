import React from 'react'
import Title from './Title'
import Paper from './Paper'
import Link from 'next/link'
import { papers } from '@/constants/constants'


const Papers = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-4/5'>
        <Title title={"Publications"} />
        <div className='space-y-4'>
          {papers.map((paper, index) => (
            <Paper key={index} paper={paper} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Papers