import React from 'react';
import {motion} from 'framer-motion'
import aboutIcon from './assets/about.webp';
import skillicon from './assets/skill.png';               
import expicon from './assets/exp.png';
import contacticon from './assets/contact.webp';
import linkedin from './assets/li.webp';
import insta from './assets/insta.avif';


function Navbar() {
    return (
        <nav className="nav fixed max-w-fit flex justify-center items-center px-10 py-3 rounded-4xl text-white z-10 gap-9 m-6 text-[2.6vmin] backdrop-blur-sm cursor-pointer opacity-95">
                <motion.a whileHover={{ scale: 1.07, opacity:0.7 }} transition={{ duration: 0.3 }} href='#about'>
                    
                    <div><img className='m-auto nav-icon w-7 h-7' src={aboutIcon} alt="about" />
                        <p className='text-[2.6vmin]'>ABOUT ME</p></div>

                </motion.a>
                <motion.a whileHover={{ scale: 1.07, opacity:0.7 }} transition={{ duration: 0.3 }} href='#skillset'>
                    
                    <div><img className='m-auto nav-icon w-7 h-7' src={skillicon} alt="skills" />
                    <p className='text-[2.6vmin]'>SKILLS</p></div>

                </motion.a>
                <motion.a class='li' whileHover={{ scale: 1.07, opacity:0.7 }} transition={{ duration: 0.3 }} href='https://www.instagram.com/_nyctophile.ig_'>
                    
                    <img className='m-auto nav-icon w-10 h-10' src={insta} alt="insta" />

                </motion.a>
                <motion.a whileHover={{ scale: 1.07, opacity:0.7 }} transition={{ duration: 0.3 }} href='#experience'>
                    
                    <div><img className='m-auto nav-icon w-7 h-7' src={expicon} alt="experience" />
                    <p className='text-[2.6vmin]'>EXPERIENCE</p></div>

                </motion.a>
                <motion.a whileHover={{ scale: 1.07, opacity:0.7 }} transition={{ duration: 0.3 }} href='#footer'>
                    
                    <div><img className='m-auto nav-icon w-7 h-7' src={contacticon} alt="contact" />
                    <p className='text-[2.6vmin]'>CONTACTS</p></div>

                </motion.a>
        </nav>
    );
}

export default Navbar;