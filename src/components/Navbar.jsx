import React from 'react';
import {motion} from 'framer-motion'


function Navbar() {
    return (
        <nav className="nav fixed max-w-fit flex justify-center items-center px-10 py-3 rounded-4xl text-white z-10 gap-9 m-6 text-[2.6vmin] backdrop-blur-sm cursor-pointer opacity-95">
                <motion.a whileHover={{ scale: 1.07, opacity:0.7 }} transition={{ duration: 0.3 }} href='#about'>ABOUT ME</motion.a>
                <motion.a whileHover={{ scale: 1.07, opacity:0.7 }} transition={{ duration: 0.3 }} href='#skillset'>SKILLS</motion.a>
                <motion.a whileHover={{ scale: 1.07, opacity:0.7 }} transition={{ duration: 0.3 }} href='#experience'>EXPERIENCE</motion.a>
                <motion.a whileHover={{ scale: 1.07, opacity:0.7 }} transition={{ duration: 0.3 }} href='#footer'>CONTACTS</motion.a>
        </nav>
    );
}

export default Navbar;