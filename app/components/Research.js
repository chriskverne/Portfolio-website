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
  <p>
    <strong>News:</strong> I&apos;m pleased to announce that I have been admitted to{' '}
    <strong style={{ color: '#800000' }}>the University of Chicago</strong>{' '}
    to start my Masters in Applied Mathematics!
  </p>

  <p className='mt-2'>
    I&apos;m currently a Senior at FIU fortunate to be supervised by Professor{' '}
    <Link className='text-blue-600 underline' target='_blank' href={'https://www.cis.fiu.edu/faculty-staff/janki-bhimani/'}>
      Janki Bhimani
    </Link>{' '}
    in the{' '}
    <Link className='text-blue-600 underline' href={'https://damrl.cis.fiu.edu/'} target='_blank'>
      DaMRL
    </Link>{' '}
    lab. My research interests include <b>Optimization Theory</b>,{' '}
    <b>Statistical Inference</b>, and <b>Information Geometry</b>. I&apos;m currently a research intern at SINTEF, where I work on
    approximate optimization methods for combinatorial problems. Previously, I
    interned at the University of Washington, focusing on vision
    transformers and vision-language models. My research has been recognized
    with the CRA Outstanding Undergraduate Researcher Award and
    supported by the National Science Foundation. I am fascinated by the mathematical principles that underlie learning and
    reasoning — particularly within the framework of statistical learning
    theory and information geometry. My work focuses on understanding the fundamental
    limits of learning systems: how algorithms generalize, converge, and adapt
    under various constraints.
  </p>
</div>
    </div>
  )
}

export default Research