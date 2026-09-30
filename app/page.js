"use client";

import React from 'react';
import NavBar from './components/NavBar';
import Experience from './components/Experiences';
import Research from './components/Research';
import ContactMe from './components/ContactMe';
import Education from './components/Education';
import Papers from './components/Papers'
import Awards from './components/Awards'

export default function Home() {
  return (
    <main className={`space-y-5`}>
      <NavBar />
      <Research />
      <Education />
      <Experience />
      <Papers />
      <Awards />
      <ContactMe />
    </main>
  );
}
