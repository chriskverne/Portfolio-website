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

      <div className='w-4/5 flex flex-col mb-4'>
        
        <div className='flex items-start'>
          <img src={'/uchicagologo.png'} alt={`col logo`} className="h-20 mr-4" />
          <div className='text-base md:text-xl'>
            <h2 className='font-semibold'>University of Chicago</h2>
            <h3 className=''>M.S Applied and Computational Mathematics</h3>
            <h3 className='text-gray-600 text-sm md:text-md'>September 2026 - December 2027</h3>
          </div>
        </div>

      </div>

      <div className='w-4/5 flex flex-col'>
        <div className='flex items-start'>
          <img src={'/FIULogo.png'} alt={`fiu logo`} className="h-20 mr-4" />
          <div className='text-sm md:text-xl'>
              <h2 className='font-semibold'>Florida International University</h2>
              <h3 className=''>B.S Computer Science</h3>
              <h3 className='text-gray-600 text-sm md:text-md'>August 2022 - April 2026</h3>
              {/* <button className='bg-[#14213d] text-white py-1 font-semibold text-sm rounded-md w-[7rem]' onClick={toggleCourseWork}>{showCourseWork ? 'Hide Courses' : 'Show Courses'}</button> */}
          </div>
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
