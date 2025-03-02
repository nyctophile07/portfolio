import { useState } from 'react'
import Navbar from './components/navbar'
import './App.css'
import { Desktop } from './components/desktop'
import Title from './components/Title'
import Hero from './components/Hero'
import Webd from './components/Webd'
import Bio from './components/Bio'
function App() {
  return (
    <>
     <header className="App-header">
        <Hero />
        <Navbar />
        <Title />
        </header>
        <section id='about' className='text-white w-[70vw] m-auto flex justify-between mt-10'>
        <Webd />
        <Bio />
        </section>
      {/* <Desktop /> */}
    </>
  )
}

export default App
