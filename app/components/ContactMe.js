import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { SiKaggle, SiGooglescholar } from "react-icons/si";
import Link from 'next/link'

const ContactMe = () => {
  return (
    <div className='flex justify-center mb-6'>
      <div className='flex space-x-10 items-center'>
        <Link href={'https://www.linkedin.com/in/christopher-lukas-kverne-95baa1249/'} target="_blank">
          <FaLinkedin style={iconStyle} />
        </Link>

        <Link href={'https://github.com/chriskverne'} target="_blank">
          <FaGithub style={iconStyle} />
        </Link>

        <Link href={'https://www.kaggle.com/christopherkverne'} target="_blank">
          <SiKaggle style={kag_style} />
        </Link>

        <Link href={'mailto:chris.kverne@gmail.com'} target="_blank">
          <TbMailFilled style={iconStyle} />
        </Link>

        <Link href={'https://scholar.google.com/YOUR_SCHOLAR_ID'} target="_blank">
          <SiGooglescholar style={iconStyle} />
        </Link>
      </div>

      <style jsx>{`
        .flex {
          display: flex;
        }
        .flex :global(svg) {
          font-size: 2rem;
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .flex :global(svg:hover) {
          transform: scale(1.2);
        }
      `}
      </style>
    </div>
  )
}

const iconStyle = {
  fontSize: '3rem',
  transition: 'transform 0.3s ease, color 0.3s ease',
};

const kag_style = {
  fontSize: '4rem',
  transition: 'transform 0.3s ease, color 0.3s ease',
};

export default ContactMe