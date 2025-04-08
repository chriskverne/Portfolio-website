import React from 'react'
import Title from './Title'
import Paper from './Paper'
import Link from 'next/link'
import { papers } from '@/constants/constants'

const Research = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-4/5'>
        <Title title={"Research"} />
      </div>
      <div className='w-4/5 text-lg'>
        <p>
          I&apos;m currently a junior at FIU fortunate enough to be working under Professor <Link className='text-blue-600 underline' target='blank' href={'https://www.cis.fiu.edu/faculty-staff/janki-bhimani/'}>Janki Bhimani</Link> in 
          the <Link className='text-blue-600 underline' href={'https://damrl.cis.fiu.edu/'} target='_blank'>DaMRL</Link> lab.
          My research interests include <b>Optimization</b>, <b>Deep Learning</b>, <b>Generative AI</b>, and <b>Quantum Machine Learning</b>.
        </p>
        <p className='mt-2 underline'><i><b>What is intelligence?</b></i></p>
        <p className='mt-2'>
          This problem drives my current research interests. 
          While deep learning has demonstrated remarkable capabilities,
          it remains constrained by its reliance on large datasets and its limited ability to handle multimodal data effectively (e.g., integrating images, text, and audio). 
          My work seeks to explore the mathematical foundations of &quot;intelligence&quot; by advancing neural architectures, optimization techniques
          and investigating alternative learning methods, such as Quantum Computing. 
          Ultimately, my goal is to deepen our understanding of machine learning foundations to replicate and enhance the concept of 
          &quot;intelligence.&quot;
        </p>  
      </div>
      <div className='w-4/5'>
        <Title title={"Papers"} />
        {papers.map((paper, index) => (
          <Paper key={index} paper={paper} />
        ))}
      </div>
    </div>
  )
}

export default Research