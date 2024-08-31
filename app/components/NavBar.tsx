import React, { useEffect, useState } from 'react';
import TypeWriter from './TypeWriter';

const NavBar = () => {
  const [bgImage, setBgImage] = useState('/bg_pic6.png');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setBgImage('/bg_pic1.jpg');
      } else {
        setBgImage('/bg_pic6.png');
      }
    };

    // Set the initial background image based on the screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Media query listener for devices that might not trigger resize
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        setBgImage('/bg_pic1.png');
      } else {
        setBgImage('/bg_pic6.png');
      }
    };

    mediaQuery.addListener(handleMediaQueryChange);

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <div className='relative w-full mb-5'>
      <img src={bgImage} alt='Background' />
      <TypeWriter />
    </div>
  );
};

export default NavBar;
