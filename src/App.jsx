import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Navbar from './components/navbar';
import './App.css';
import { Desktop } from './components/desktop';
import Title from './components/Title';
import Hero from './components/Hero';
import Webd from './components/Webd';
import Bio from './components/Bio';
import Expandables from './components/Expandables';
import Exp from './components/Exp';

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
  const controls = useAnimation();
  const [expandedIndex, setExpandedIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const aboutPosition = aboutSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (aboutPosition < screenPosition) {
        controls.start({ y: 0, opacity: 1 });
      } else {
        controls.start({ y: 50, opacity: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <>
      <header className="App-header">
        <Hero />
        <Navbar />
        <Title />
      </header>
      <motion.section
        id="about"
        className="text-white w-[70vw] m-auto flex justify-between pt-20"
        initial={{ y: 50, opacity: 0 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <Webd />
        <Bio />
      </motion.section>
      <section id='skillset' className='w-[75vw] m-auto mb-10 py-40 flex flex-col gap-5'>
        <div><h2 className='text-left text-4xl text-blue-300 font-bold'>Things i have learnt</h2></div>

        <div className='flex justify-around'>{skillset.map((e, index) => {
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

      <section id='experience' className='w-[75vw] flex flex-col gap-3 m-auto mt-10 mb-10 py-20'>
        <Exp />
      </section>
      {/* <Desktop /> */}
    </>
  );
}

export default App;
