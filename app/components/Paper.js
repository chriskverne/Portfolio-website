import Link from 'next/link'
import React from 'react'

const Paper = ({paper}) => {
  return (
    <div className='rounded-md'>
      <p className='text-md font-semibold'>- {paper.title}</p>
      {paper.isPublished && (
        <>
          <Link href={paper.link}>
            <div className='flex items-center gap-2'>
              <p className='text-md'>Published at:</p>
              <p className=' font-bold text-md'>{paper.conference}</p>
              <Link className="text-blue-700 font-semibold underline" href={paper.link}>[Click to Read]</Link>            </div>
          </Link>
        </>
      )}

      {paper.underReview && (
        <p className='text-lg text-[#ff9500]'>Under review at {paper.conference}</p>
      )}

      {paper.workingOn && (
        <p className='text-lg text-[#000000]'>Currently working on it</p>
      )}

      <p className='text-md'>
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