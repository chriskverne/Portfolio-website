import React from 'react'
import Title from './Title'
import Paper from './Paper'
import Link from 'next/link'

const paper1 = {
    title: 'MoKE: Modular Key-value Emulator for Realistic Studies on Emerging Storage Devices',
    description: [
        //'Developed and implemented a new Hash based Indexing technique for Key Value storage systems',
        //'Ran experiments on our Linux servers with workloads from Twitter traces'
    ],
    conference: null,
    link: null,
    isPublished: false,
    underReview: false,
    workingOn: true
}

const paper2 = {
    title: "Course-Job Fit: Leveraging Language Models to Understand the Relevance of Computer Science Courses to Employment Opportunities",
    description: [
        ''
    ],
    conference: 'SigCSE 2025',
    link: null,
    isPublished: false,
    underReview: true,
    workingOn: false
}

const paper3 = {
    title: "LLM CS Advising Agent",
    description: [
        ''
    ],
    conference: null,
    link: null,
    isPublished: false,
    underReview: false,
    workingOn: true
}

const Research = () => {
  return (
    <div>
      <div className='flex flex-col items-center'>
        <div className='w-4/5'>
          <Title title={"Research"} />
        </div>
        <div className='w-4/5'>
            <p>I'm currently a junior at FIU working under the supervision of Professor Janki Bhimani in the <Link className='text-blue-600 underline' href={'https://damrl.cis.fiu.edu/'} target='_blank'>DaMRL Lab</Link>. My research interests includes <b>Machine Learning</b>, <b>Computer Systems</b>, and <b>Practical AI</b>.</p>
            <p className='mt-2'>My work dives into optimizing storage systems such as SSDs and RAM, optimizing ML phases such as ML training, and exploring use cases of AI in computer storage systems and other fields. After my bachelors, I will continue to pursue AI related research in Grad school.</p>
            <p className='font-semibold text-2xl mt-2'>Papers:</p>
            <Paper paper={paper1} />
            <Paper paper={paper2} />
            <Paper paper={paper3} />
        </div>
      </div>

    </div>
  )
}

export default Research