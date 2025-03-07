import React from 'react';
import {motion} from 'framer-motion'
import aboutIcon from './assets/about.webp';
import skillicon from './assets/skill.png';               
import expicon from './assets/exp.png';
import contacticon from './assets/contact.webp';


function Navbar() {
    return (
        <nav className="nav fixed max-w-fit flex justify-center items-center px-10 py-3 rounded-4xl text-white z-10 gap-9 m-6 text-[2.6vmin] backdrop-blur-sm cursor-pointer opacity-95">
                <motion.a whileHover={{ scale: 1.07, opacity:0.7 }} transition={{ duration: 0.3 }} href='#about'>
                    
                    <div><img className='m-auto nav-icon w-5 h-5' src={aboutIcon} alt="about" />
                        <p></p>ABOUT ME</div>

                </motion.a>
                <motion.a whileHover={{ scale: 1.07, opacity:0.7 }} transition={{ duration: 0.3 }} href='#skillset'>
                    
                    <div><img className='m-auto nav-icon w-5 h-5' src={skillicon} alt="skills" />
                    <p>SKILLS</p></div>

                </motion.a>
                <motion.a whileHover={{ scale: 1.07, opacity:0.7 }} transition={{ duration: 0.3 }} href='#experience'>
                    
                    <div><img className='m-auto nav-icon w-5 h-5' src={expicon} alt="experience" />
                    <p>EXPERIENCE</p></div>

                </motion.a>
                <motion.a whileHover={{ scale: 1.07, opacity:0.7 }} transition={{ duration: 0.3 }} href='#footer'>
                    
                    <div><img className='m-auto nav-icon w-5 h-5' src={contacticon} alt="contact" />
                    <p>CONTACTS</p></div>

                </motion.a>
        </nav>
    );
}

export default Navbar;