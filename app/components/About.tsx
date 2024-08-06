import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-4/5 flex flex-col items-center mt-3'>
        <h1 className='text-4xl'>About me</h1>
        <p className='mt-2'>
          I'm a Norwegian junior at FIU studying Computer science and math.
          I'm currently doing research on Machine learning, while also having experience in full stack development.
          Thanks for visiting my website, and feel free to connect with me on <Link className='text-blue-500 underline hover:text-blue-700' href={'https://www.linkedin.com/in/christopher-lukas-kverne-95baa1249/'}>LinkedIn</Link>
        </p>
      </div>
    </div>
  )
}

export default About