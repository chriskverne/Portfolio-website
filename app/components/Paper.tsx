import Link from 'next/link'
import React from 'react'

const Paper = ({paper}) => {
  return (
    <div className='mb-6 bg-[rgb(229,229,229)] p-3 rounded-md'>
      <p className='text-xl font-semibold'>{paper.title}</p>
      {paper.isPublished && (
        <>
          <Link href={paper.link}>
            <div className='flex items-center gap-2'>
              <p className='text-xl'>Published at:</p>
              <p className='text-green-500 font-bold text-xl'>{paper.conference}</p>
            </div>
          </Link>
          <p className='text-lg'>
            {paper.authors.map((author, index) => (
              <React.Fragment key={index}>
                {author === "Christopher Kverne" ? (
                  <span className="underline font-bold">{author}</span>
                ) : (
                  <span>{author}</span>
                )}
                {index < paper.authors.length - 1 && ", "}
              </React.Fragment>
            ))}
          </p>
        </>
      )}

      {paper.underReview && (
        <p className='text-lg'>Under review at {paper.conference}</p>
      )}

      {paper.workingOn && (
        <p className='text-lg'>Currently working on it, Please read it when it comes out</p>
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