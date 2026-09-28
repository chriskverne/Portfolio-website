import React from 'react';
import Title from './Title';

const Education = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-4/5'>
        <Title title={"Education"} />
      </div>

      <div className='w-4/5 flex flex-col space-y-6'>
        <div className='flex items-start'>
          <img src={'/uchicagologo.png'} alt={`col logo`} className="h-20 mr-4" />
          <div className='ml-2 text-base md:text-xl'>
            <h2 className='font-semibold'>University of Chicago</h2>
            <h3>M.S Applied Mathematics</h3>
            <h3 className='text-gray-600 text-sm md:text-md'>September 2026 - December 2027</h3>
          </div>
        </div>

        <div className='flex items-start'>
          <img src={'/FIULogo.png'} alt={`fiu logo`} className="h-20 mr-4" />
          <div className='ml-2 text-sm md:text-xl'>
            <h2 className='font-semibold'>Florida International University</h2>
            <h3>B.S Computer Science</h3>
            <h3 className='text-gray-600 text-sm md:text-md'>August 2022 - April 2026</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
