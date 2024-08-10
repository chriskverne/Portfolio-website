import React from 'react';

const Experience = ({ job }) => {
  const { company, imgURL, title, startDate, endDate, subSections } = job;
  return (
      <div className='mb-5'>
        <div className="flex items-center">
          <img src={imgURL} alt={`${company} logo`} className="h-16 mr-4" />
          <div>
            <h2 className="text-xl font-semibold">{company}</h2>
            <h3 className="text-md">{title}</h3>
            <p className="text-gray-600 text-md">{startDate} - {endDate}</p>
          </div>
        </div>
        {subSections.map((section, index) => (
          <div key={index} className="mt-1">
            {section.subTitle && <h4 className="text-md font-semibold">{section.subTitle}</h4>}
            <ul className="list-disc list-inside">
              {section.description.map((desc, idx) => (
                <li key={idx} className="text-sm mb-1">{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
  );
};

export default Experience;
