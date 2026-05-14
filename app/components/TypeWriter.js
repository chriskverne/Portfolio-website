import React from 'react';
import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
  const messages = ['Christopher Lukas Kverne', 'an Applied Mathematics Student' ,'an ML & Statistics Researcher', 'a Dog and Hiking Lover :D'];
  const options = {
    strings: messages,
    delay: 40, // The delay between each key when typing.
    deleteSpeed: 15, // Speed to delete each character
    loop: true,
    autoStart: true,
    pauseFor: 2500, // Duration to pause after a message is written
    cursor: '|',
  };

  return (
    <div className='absolute left-10 top-1/2 transform -translate-y-1/2 text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] text-white font-medium' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
      <p>Hi there, I am</p>
      <Typewriter options={options} />
    </div>
  );
};

export default TypeWriter;
