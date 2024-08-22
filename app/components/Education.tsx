import React from 'react'
import Title from './Title'

const awards = ['Global Scholarship ($6300)', 'Dean’s list 4x', 'NSF Grant ($2000)']
const courseWork = [
  { 'Calculus 1': 'A' }, 
  { 'Calculus 2': 'A' }, 
  { 'Physics 1': 'A-' }, 
  { 'Physics 1 Lab': 'A-' }, 
  { 'Programming 1': 'A' }, 
  { 'Programming 2': 'A-' }, 
  { 'Discrete Mathematics': 'A' }, 
  { 'Probability & Statistics': 'A' }, 
  { 'Computer Architecture': 'A-' }, 
  { 'Data Structures': 'A' }, 
  { 'Systems Programming': 'A' }, 
  { 'Physics 2': 'B+' }, 
  { 'Physics 2 Lab': 'A' }, 
  { 'Technology in Global Arena': 'A' }, 
  { 'Machine Learning': '' }, 
  { 'Software Engineering': '' }, 
  { 'Capstone 1': '' }, 
  { 'Operating Systems': '' }, 
]

const Research = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-4/5'>
        <Title title={"Education"} />
      </div>

      <div className='w-4/5 flex flex-col'>

        <div className='flex flex-col mb-2 sm:flex-row sm:space-y-0 sm:space-x-3 text-lg'>
          <div className='flex'>
            <h3 className='font-semibold'>Bachelor of Science:&nbsp;</h3>
            <p className='italic'>Computer Science</p>
          </div>
          <div className='flex'>
            <h3 className='font-semibold'>Minor:&nbsp;</h3>
            <p className='italic'>Mathematics</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row mb-2 '>
          <h3 className='font-semibold text-lg'>Honors and awards:</h3>
          <div className='flex flex-col md:flex-row ml-1'>
            {awards.map((award, index) => (
              <p className='text-lg mr-3' key={index}>{award}</p>
            ))}
          </div>
        </div>

        <div className='flex mb-2'>
          <h3 className='font-semibold text-lg'>GPA:</h3>
          <p className='ml-2 text-lg'>3.89</p>
        </div>

        <div className='w-full'>
          <h3 className='font-semibold text-lg mb-1'>Relevant Course Work:</h3>
          <div className='flex flex-wrap'>
            {courseWork.map((course, index) => {
              const courseName = Object.keys(course)[0];
              const grade = course[courseName];
              return (
                <div className='mr-2 mb-1 flex space-x-0 border-2 border-gray rounded-md px-1' key={index}>
                  <p>{courseName} :&nbsp;</p>
                  <p className='font-medium'>{grade ? grade : 'In Progress'}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Research
