"use client";

import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Experience from './components/Experiences';

export default function Home() {
  return (
    <main >
      <NavBar />
      {/*<About />*/}
      <Experience />
    </main>
  );
}
