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
        <p className='mt-2'>
          I&apos;m a Masters student at <strong style={{ color: '#800000' }}>the University of Chicago</strong> studying Applied Mathematics.
          My research lies broadly in <b>large-scale optimization</b> and <b>generative modelling</b>.
          I&apos;m particularly interested in how generative models generalize — what properties of the data distribution they capture, and how this is shaped by the optimization methods used to train them.
          Before UChicago, I completed my B.S. in CS at FIU in 2026, where I was fortunate to be supervised by Professor{' '}
          <Link className='text-blue-600 underline' target='_blank' href={'https://www.cis.fiu.edu/faculty-staff/janki-bhimani/'}>
            Janki Bhimani
          </Link>{' '}
          in the{' '}
          <Link className='text-blue-600 underline' href={'https://damrl.cis.fiu.edu/'} target='_blank'>
            DaMRL
          </Link>{' '}
          lab. Previously, I was a research intern at SINTEF, where I worked on modelling SDEs through discrete Markov chains.
          I also interned at the University of Washington, focusing on vision transformers and vision-language models.
          My research has been recognized with the CRA Outstanding Undergraduate Researcher Award.
        </p>
      </div>
    </div>
  )
}

export default Research