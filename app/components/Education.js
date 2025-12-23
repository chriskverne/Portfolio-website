import React, { useState } from 'react';
import Title from './Title';
import { courseWork, awards } from '@/constants/constants';

const Research = () => {
  const [showCourseWork, setShowCourseWork] = useState(false);
  const toggleCourseWork = () => {
    setShowCourseWork(!showCourseWork);
  };
  return (
    <div className='flex flex-col items-center'>
      <div className='w-4/5'>
        <Title title={"Education"} />
      </div>

      <div className='w-4/5 flex flex-col'>
        <div className='flex items-center'>
          <img src={'/FIULogo.png'} alt={`fiu logo`} className="h-14 mr-4" />
          <div className='text-sm md:text-xl'>
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

        <div className='flex align-middle mt-2'>
          <h3 className='font-semibold text-xl'>GPA:</h3>
          <p className='text-xl ml-1'>3.84 / 4.0</p>
          <button className='ml-3 bg-[#14213d] text-white py-1 font-semibold text-sm rounded-md w-[7rem]' onClick={toggleCourseWork}>
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
                  <div className='mr-2 mt-1 flex justify-center items-center text-center space-x-0 border-[1.5px] border-[#e5e5e5] rounded-md px-1' key={index}>
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
