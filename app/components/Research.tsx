import React from 'react'
import Title from './Title'
import Paper from './Paper'
import Link from 'next/link'
import { paper1, paper2, paper3 } from '@/constants/constants'

const Research = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-4/5'>
        <Title title={"Research"} />
      </div>
      <div className='w-4/5 text-xl'>
        <p>
          I&apos;m currently a junior at FIU fortunate enough to be working under Professor <Link className='text-blue-600 underline' target='blank' href={'https://www.cis.fiu.edu/faculty-staff/janki-bhimani/'}>Janki Bhimani</Link> in 
          the <Link className='text-blue-600 underline' href={'https://damrl.cis.fiu.edu/'} target='_blank'>DaMRL</Link> lab.
          My research interests include <b>Optimization</b>, <b>Deep Learning</b>, <b>Generative AI</b>, <b>Neuromorphic Computing</b> and <b>Theoretical ML</b>.
        </p>
        <p className='mt-2 underline'><i><b>What is intelligence?</b></i></p>
        <p className='mt-2'>
          This problem drives my current research interests.
          While deep learning has demonstrated remarkable capabilities, it remains constrained by its reliance on large datasets and its limited ability to handle multimodal data effectively (e.g., integrating images, text, and audio). In contrast, humans seamlessly process and integrate diverse forms of information, such as sound, vision, and touch. As gradient-based learning continues to dominate the field of AI, I question whether it is always the optimal approach. My work seeks to explore the mathematical foundations of &quot;intelligence&quot; by advancing neural architectures and investigating alternative learning paradigms, such as biologically inspired networks. Ultimately, my goal is to deepen our understanding of machine learning foundations to replicate and enhance the concept of &quot;intelligence.&quot;
        </p>  
      </div>
      <div className='w-4/5'>
        <Title title={"Papers"} />
        <Paper paper={paper1} />
        <Paper paper={paper2} />
        <Paper paper={paper3} />
      </div>
    </div>
  )
}

export default Research
