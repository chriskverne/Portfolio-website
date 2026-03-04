import React from 'react'
import Title from './Title'
import Link from 'next/link'
import { FaFilePdf } from "react-icons/fa";


const Research = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-4/5 flex items-center'>
        <Title title={"Research Interests"} />
        <p className='text-[1.5rem] md:text-[2rem] ml-8'>CV</p>
        <a href={'/Christopher_Lukas_Kverne_CV.pdf'} target="_blank" rel="noopener noreferrer" style={{fontSize: '2.5rem', color: 'red'}}>
          <FaFilePdf />
        </a>
      </div>
      
      <div className='w-4/5 text-sm md:text-lg'>
        <p className='text-md md:text-xl'> <strong>News:</strong> I'm pleased to announce that I have been admitted to{' '} <strong style={{ color: '#75AADB' }}>Columbia University</strong>{' '} 🦁 to start my Masters in Data Science! </p>        <p>
          I&apos;m currently a Senior at FIU fortunate to be supervised by Professor <Link className='text-blue-600 underline' target='blank' href={'https://www.cis.fiu.edu/faculty-staff/janki-bhimani/'}>Janki Bhimani</Link> in 
          the <Link className='text-blue-600 underline' href={'https://damrl.cis.fiu.edu/'} target='_blank'>DaMRL</Link> lab.
          My research interests include <b>Optimization Theory📈</b>, <b>Statistical Inference 🧮</b>, and <b>Deep Learning🧠</b>.
        </p>
       
        <p className='mt-2 underline'><i><b>What is intelligence?</b></i></p>
        <p className='mt-2'>
          This question drives my current research interests. I am fascinated by the mathematical principles that underlie learning and reasoning — particularly within the framework of statistical learning theory and optimization. My work focuses on understanding the fundamental limits of learning systems: how algorithms generalize, converge, and adapt under various data and computational constraints.
        </p>  
        <p className='mt-2 underline'>
          If you find any of my work interesting or would like to collaborate feel free to reach out 😊
        </p>
        
      </div>
    </div>
  )
}

export default Research