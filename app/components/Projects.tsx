import React from 'react'
import Title from './Title'
import Project from './Project';
import { title } from 'process';
import { project1, project2, project3, project4 } from '@/constants/constants';

const Projects = () => {
  return (
    <div className='flex flex-col items-center mb-10'>
      <div className='w-4/5'>
        <Title title={"Projects"} />
      </div>

      <div className='w-4/5 flex flex-col'>
        <Project project={project1}/>
        <Project project={project2} />
        <Project project={project3} />
        <Project project={project4} />
      </div>
    </div>
  )
}

export default Projects
