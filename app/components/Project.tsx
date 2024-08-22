import Link from 'next/link'
import React from 'react'

const Project = ({ project }) => {
  return (
    <div className='mb-2'>
      <div className='flex justify-between text-lg'>
        <h3 className='font-semibold'>{project.title}</h3>
        <Link href={project.link} target='blank' className='text-blue-600 underline'>GitHub Repository</Link>
      </div>

      <ul className='list-disc list-inside'>
        {project.description.map((bulletPoint, index) => (
          <li key={index}>{bulletPoint}</li> // Render the bullet point text
        ))}
      </ul>
    </div>
  )
}

export default Project
