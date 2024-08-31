import Link from 'next/link'
import React from 'react'

const Paper = ({paper}) => {
  return (
    <div className='mt-3 bg-[#e5e5e5] p-3 rounded-md'>
      <p className='text-lg'>{paper.title}</p>
      {paper.isPublished && (
        <div>
          <p className='text-green-500 font-bold'>Published here: </p>
          <Link href={paper.link} />
        </div>
      )}

      {paper.underReview && (
        <p className='font-bold'>Under review at the {paper.conference} conference</p>
      )}

      {paper.workingOn && (
        <p className='font-bold '>Currently working on it, Please read it when it comes out</p>
      )}

      <div>
        {paper.description.map((desc, index) =>(
          <div key={index}>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Paper