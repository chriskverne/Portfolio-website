"use client";

import React from 'react';
import { Rubik } from '@next/font/google';
import NavBar from './components/NavBar';
import Experience from './components/Experiences';
import Research from './components/Research';
import ContactMe from './components/ContactMe';
import Education from './components/Education';
import Projects from './components/Projects';
import Papers from './components/Papers'

const rubik = Rubik({ subsets: ['latin'], weight: ['300', '400'] });

export default function Home() {
  return (
    <main className={`${rubik.className} space-y-5`}>
      <NavBar />
      <Research />
      <Papers />
      <Experience />
      <Education />
      {/* <Projects /> */}
      <ContactMe />
    </main>
  );
}
