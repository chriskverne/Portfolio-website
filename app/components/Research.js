import React from 'react'
import Title from './Title'
import Paper from './Paper'
import Link from 'next/link'
import { papers } from '@/constants/constants'

const Research = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-4/5'>
        <Title title={"Research Interests"} />
      </div>
      
      <div className='w-4/5 text-sm md:text-lg'>
        <p>
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