import React from 'react'
import Title from './Title'
import Project from './Project';
import { title } from 'process';

const project1 = {
  title: 'NoSQL Database',
  link: 'https://github.com/chriskverne/NoSQL-Database',
  description: [
    'Developed an in-memory key-value store (MemTable) with efficient data persistence mechanisms, enabling fast lookups, inserts, and deletions, and dynamically flushing data to disk upon reaching capacity.',
    'Implemented a Log-Structured Merge Tree (LSM Tree) to manage multi-level disk storage, optimizing data compaction, merging processes, using tombstones for deletion management.',
    'Designed a Skip List data structure to enhance in-memory operations with O(log⁡n) searches and O(1) updates, tailored for rapid data access in the MemTable'
  ]
}

const project2 = {
  title: 'Neural Network (from scratch)',
  link: 'https://github.com/chriskverne/Neural-Network-from-Scratch',
  description: [
    'Implemented a neural network from scratch in python using numpy',
    'Desgined a layer class, softmax and ReLU activation functions, Cross entropy loss function, and backwards propagation algorithm',
    'Trained the network on a spiral dataset achieving an accuracy of 98%'
  ]
}

const project3 = {
  title: 'Fake news detector',
  link: 'https://github.com/chriskverne/Optimized-Fake-News-Detector',
  description: [
    'Worked with a team of 4 students at the Knighthacks hackathon by developing a model that detects fake news.',
    'Created a stemming algorithm that removes non important information. Vectorized text with TF-IDF and trained a linear regression model from tensorflow with a final accuracy of 98.2%.',
  ]
}

const Projects = () => {
  return (
    <div className='flex flex-col items-center mb-10'>
      <div className='w-4/5'>
        <Title title={"Projects"} />
      </div>

      <div className='w-4/5 flex flex-col'>
        <Project project={project1}/>
        <Project project={project2} />
        <Project project={project3} />
      </div>
    </div>
  )
}

export default Projects
