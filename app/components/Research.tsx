import React from 'react'
import Title from './Title'
import Paper from './Paper'
import Link from 'next/link'
import { paper1, paper2, paper3 } from '@/constants/constants'

const Research = () => {
  return (
    <div className='flex flex-col items-center mb-5'>
      <div className='w-4/5'>
        <Title title={"Research"} />
      </div>
      <div className='w-4/5'>
        <p>I&apos;m currently a junior at FIU fortunate enough to be working under Professor <Link className='text-blue-600 underline' target='blank' href={'https://www.cis.fiu.edu/faculty-staff/janki-bhimani/'}>Janki Bhimani</Link> in the <Link className='text-blue-600 underline' href={'https://damrl.cis.fiu.edu/'} target='_blank'>DaMRL</Link> lab. My research interests include <b>Machine Learning</b>, <b>Computer Systems</b>, <b>Deep Learning</b>, and <b>Generative AI</b>.</p>
        <p className='mt-2'>With the explosion of large language models, many companies use thousands of GPU&apos;s and months of training time to develop a single model. My goal is to reduce the computational power needed for this by developing more efficient deep learning architectures and optimizing processes such as parallel computing. I will continue to pursue my research in Graduate School when I complete my Bachelors degree.</p>
        <p className='font-semibold text-2xl mt-2'>Papers:</p>
        <Paper paper={paper1} />
        {/*<Paper paper={paper2} />*/}
        <Paper paper={paper3} />
      </div>
    </div>
  )
}

export default Research
