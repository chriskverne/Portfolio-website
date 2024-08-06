import React from 'react';
import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
  const messages = ['Christopher Lukas Kverne', 'a CS and Math Student' ,'a ML & Systems Researcher', 'a Software Engineer', 'a Dog and Hiking Lover :D'];
  const options = {
    strings: messages,
    delay: 50, // The delay between each key when typing.
    deleteSpeed: 20, // Speed to delete each character
    loop: true,
    autoStart: true,
    pauseFor: 1500, // Duration to pause after a message is written
    cursor: '|',
  };

  return (
    <div className='absolute left-10 top-1/2 transform -translate-y-1/2 text-[3.5rem] font-bold text-white' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
      <p>Hi there, I am</p>
      <Typewriter options={options} />
    </div>
  );
};

export default TypeWriter;
