"use client";

import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Experience from './components/Experiences';
import Research from './components/Research';
import ContactMe from './components/ContactMe';
import Education from './components/Education'

export default function Home() {
  return (
    <main >
      <NavBar />
      {/*<About />*/}
      <Experience />
      <Research />
      <Education />
      <ContactMe />
    </main>
  );
}
