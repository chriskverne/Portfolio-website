import React from 'react'
import Title from './Title'
import Project from './Project'
import { projects } from '@/constants/constants'

const Projects = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-4/5'>
        <Title title={"Projects"} />
      </div>

      <div className='w-4/5 flex flex-col space-y-2'>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects