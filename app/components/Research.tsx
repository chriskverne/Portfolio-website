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
        <p>I&apos;m currently a junior at FIU working under the supervision of Professor <Link className='text-blue-600 underline' target='blank' href={'https://www.cis.fiu.edu/faculty-staff/janki-bhimani/'}>Janki Bhimani</Link> in the <Link className='text-blue-600 underline' href={'https://damrl.cis.fiu.edu/'} target='_blank'>DaMRL</Link> lab. My research interests include <b>Machine Learning</b>, <b>Storage Systems</b>, and <b>Generative AI</b>.</p>
        <p className='mt-2'>My work dives into optimizing storage systems such as SSDs and RAM by utilizing ML, and exploring use cases of generative AI in non-traditional applications. After my bachelor&apos;s, I will continue to pursue AI-related research in Grad school.</p>
        <p className='font-semibold text-2xl mt-2'>Papers:</p>
        <Paper paper={paper1} />
        {/*<Paper paper={paper2} />*/}
        <Paper paper={paper3} />
      </div>
    </div>
  )
}

export default Research
