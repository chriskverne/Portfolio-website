import React from 'react';

const Experience = ({ job }) => {
  const { company, imgURL, title, startDate, endDate, subSections } = job;
  return (
      <div className=''>
        <div className="flex items-center">
        <img src={imgURL} alt={`${company} logo`} className="h-20 w-20 object-contain mr-4" />
        <div className='ml-2 space-y-1'>
            <h2 className="text-base md:text-xl font-semibold">{company}</h2>
            <h3 className="text-base md:text-xl">{title}</h3>
            <p className="text-gray-600 text-sm md:text-md">{startDate} - {endDate}</p>
          </div>
        </div>
      </div>
  );
};

export default Experience;
