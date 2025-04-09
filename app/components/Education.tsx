import React, { useState } from 'react';
import Title from './Title';
import { courseWork, awards } from '@/constants/constants';

const Research = () => {
  const [showCourseWork, setShowCourseWork] = useState(false);
  const toggleCourseWork = () => {
    setShowCourseWork(!showCourseWork);
  };
  return (
    <div className='flex flex-col items-center mt-5'>
      <div className='w-4/5'>
        <Title title={"Education"} />
      </div>

      <div className='w-4/5 flex flex-col mt-1'>
        <div className='flex items-center mb-1'>
          <img src={'/FIULogo.png'} alt={`fiu logo`} className="h-14 mr-4" />
          <div className='text-lg'>
            <div className='flex'>
              <h3 className='font-semibold'>Bachelor of Science:&nbsp;</h3>
              <p className='italic'>Computer Science</p>
            </div>
            <div className='flex'>
              <h3 className='font-semibold'>Minor:&nbsp;</h3>
              <p className='italic'>Mathematics</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row mb-1'>
          <h3 className='font-semibold text-lg'>Honors and awards:</h3>
          <div className='flex flex-col md:flex-row ml-1'>
            {awards.map((award, index) => (
              <p className='text-lg mr-3' key={index}>{award}</p>
            ))}
          </div>
        </div>

        <div className='flex mb-1 align-middle'>
          <h3 className='font-semibold text-lg'>GPA:</h3>
          <p className='text-lg ml-1'>3.86</p>
          <button className='mb-2 ml-3 bg-[#14213d] text-white py-1 font-semibold text-sm rounded-md w-[7rem]' onClick={toggleCourseWork}>
            {showCourseWork ? 'Hide Courses' : 'Show Courses'}
          </button>
        </div>

        <div className='w-full'>
          {showCourseWork && (
            <div className='flex flex-wrap'>
              {courseWork.map((course, index) => {
                const courseName = Object.keys(course)[0];
                const grade = course[courseName];
                return (
                  <div className='mr-2 mb-1 flex justify-center items-center text-center space-x-0 border-[1.5px] border-[#e5e5e5] rounded-md px-1' key={index}>
                    <p>{courseName}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Research;
