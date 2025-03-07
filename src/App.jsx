import { useState, useEffect } from 'react';
import '@fontsource/poppins'; // Add this line to import Poppins font
import '@fontsource/poppins/200.css'; // Import Poppins 200 weight
import '@fontsource/poppins/400.css'; // Import Poppins 400 weight (regular)
import '@fontsource/poppins/700.css'; // Import Poppins 700 weight (bold)

import { motion, useAnimation } from 'framer-motion';
import Navbar from './components/Navbar';
import './App.css';
import Title from './components/Title';
import Hero from './components/Hero';
import Webd from './components/Webd';
import Bio from './components/Bio';
import Expandables from './components/Expandables';
import Exp from './components/Exp';
import Project from './components/Project';
import img1 from './components/assets/gallery.png';


import dzinkImage from './components/assets/1730353689305-1.png';
import elibraryImage from './components/assets/1730366272485-1.png';
import Footer from './components/Footer';


function App() {
  const skillset = [
    {
      domain: "Coding </>",
      skills: ["Languages : Javascript, Python, Java, C++, HTML ,CSS, PHP",
        "Frameworks/Libraries : React Native, React, Spring and Multiple Component Libraries",
        "Other Tools : Git, Github, MySQL, MongoDB, Jenkins",
        "UI/UX: Canva, Figma"],
      link: "#experience",
      linkText: "View Projects"
    },
    {
      domain: "Films & Photography",
      skills: ["Do enjoy to capture the moments & stories whether it's a still shot or a moving picture.",
        "Sometimes express my thoughts via words."],
      link: "https://www.instagram.com/_.ancestor85._/",
      linkText: "Instagram"
    },
    {
      domain: "Video Editing & GFX",
      skills: ["I love video editing and graphic design as I enjoy representing stories through the art of visual storytelling.", "Photoshop, Davinci Resolve, Premiere Pro"],
      link: "https://www.instagram.com/grafix.me/",
      linkText: "My works"
    },
  ]
  const project= [
    {img: dzinkImage,
      title:"DZINK",
        desc:"An Ecom. web app featuring a diverse collection of merchandise across a wide range of categories and varieties.",
      link:"https://dzink.rf.gd/"},
    { img: elibraryImage,
      title:"e-Library",
        desc:"Explore diverse genres, engage in discussions, and join a community passionate about reading and learning.",
      link:"https://elib.rf.gd/"}
  ]
  const controls = useAnimation();
  const [expandedIndex, setExpandedIndex] = useState(0);

 

  return (
    <>
      <header className="App-header">
        <Hero />
        <Navbar />
        <Title />
      </header>
      <motion.section
        id="about"
        className="text-white w-[80vw] m-auto flex justify-between pt-5"
        animate={{opacity: [0, 1]}}
        transition={{ duration: 2 }}
      >
        <Webd />
        <Bio />
      </motion.section>
      <section id='skillset' className='w-[80vw] m-auto mb-5 py-35 flex flex-col gap-5'>
        <div><h2 className= 'heading text-left text-4xl text-blue-300 font-bold'>Things i have learnt</h2></div>

        <div className='skillexpand flex justify-around'>{skillset.map((e, index) => {
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
