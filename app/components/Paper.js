import Link from 'next/link'
import React from 'react'

const Paper = ({paper}) => {
  return (
    <div className='rounded-md text-xs md:text-base'>
      <p className='font-semibold'>- {paper.title}</p>
      {paper.isPublished && (
        <>
          <Link href={paper.link} target='_blank'>
            <div className='flex items-center gap-2'>
              <p className='italic'>{paper.conference}</p>
              <p className="text-blue-600 underline">[Click to Read]</p>            
            </div>
          </Link>
        </>
      )}

      {paper.underReview && (
        <p className='text-[#000000]'>Under review at {paper.conference}</p>
      )}

      {paper.workingOn && (
        <p className=' text-[#000000]'>Currently working on it</p>
      )}

      <p className=''>
        {paper.authors.map((author, index) => (
            <React.Fragment key={index}>
              {author === "Christopher Kverne" ? (
                <span className="underline">{author}</span>
              ) : (
                <span>{author}</span>
              )}
              {index < paper.authors.length - 1 && ", "}
            </React.Fragment>
          ))}
      </p>

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