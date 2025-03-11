import { useState, useEffect } from 'react';
import '@fontsource/poppins'; // Add this line to import Poppins font
import '@fontsource/poppins/200.css'; // Import Poppins 200 weight
import '@fontsource/poppins/400.css'; // Import Poppins 400 weight (regular)
import '@fontsource/poppins/700.css'; // Import Poppins 700 weight (bold)

import { motion, useAnimation } from 'framer-motion';
import {skillset, project} from './Data';
import Navbar from './components/Navbar';
import './App.css';
import Title from './components/Title';
import Hero from './components/Hero';
import Webd from './components/Webd';
import Bio from './components/Bio';
import Expandables from './components/Expandables';
import Exp from './components/Exp';
import Project from './components/Project';

import brain from './components/assets/brain.png';
import img1 from './components/assets/gallery.png';
import Footer from './components/Footer';


function App() {
  
  const controls = useAnimation();
  const [expandedIndex, setExpandedIndex] = useState(0);

 

  return (
    <>
      <header  id="about" className="App-header">
        <Hero />
        <Navbar />
        <Title />
      </header>
      <motion.section
        className="text-white w-[80vw] mt-2 m-auto flex justify-between pt-5"
        animate={{opacity: [0, 1]}}
        transition={{ duration: 2 }}
      >
        <Webd />
        <Bio />
      </motion.section>
      <section id='skillset' className='w-[80vw] m-auto mb-5 py-35 flex gap-5'>

        <div className='skillexpand justify-around gap-2 flex flex-col'>{skillset.map((e, index) => {
          return (<Expandables
            key={index}
            domain={e.domain}
            skills={e.skills}
            link={e.link}
            linkText={e.linkText}
            isExpanded={expandedIndex === index}
            onHover={() => setExpandedIndex(index)}
          />)
        })}</div>
      <div className='flex flex-col justify-center align-middle' >
        <img id='brain' className='w-[30vmin] mx-auto' src={brain} alt="brain" />
        <h2 className= 'mx-auto heading text-left text-5xl text-blue-300 font-bold'>Knowledge Stack</h2></div>
      </section>

      <section id='experience' className='w-[75vw] flex flex-col gap-3 m-auto py-30'>
        <Exp />
      </section>
      <section id='projects' className='w-[75vw] m-auto mb-10 flex gap-20 pb-10'>
        <ul
         initial={{ y: 50, opacity: 0 }}
         animate={controls}
         transition={{ duration: 1 }}
        className='text-yellow-300 flex flex-col gap-4 justify-center'>
          <li>P</li>
        <li>R</li>
        <li>O</li>
        <li>J</li>
        <li>E</li>
        <li>C</li>
        <li>T</li>
        <li>S</li></ul>
        <Project project={project}/>
      </section>
      <section className='w-[80vw] m-auto py-25'>
        <ul className='gall-text text-white flex justify-center gap-7 text-lg font-[300] p-15'>
          <li>M</li>
          <li>Y&nbsp;&nbsp;</li>
          <li>&nbsp;&nbsp;&nbsp;G</li>
          <li>A</li>
          <li>L</li>
          <li>L</li>
          <li>E</li>
          <li>R</li>
          <li>Y</li>

        </ul>
        <div className='gallery flex flex-wrap justify-center gap-5'>
          <a href="https://www.instagram.com/_nyctophile.ig_"><img className='h-[90vh]' src={img1} alt="gallery" /></a>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default App;
