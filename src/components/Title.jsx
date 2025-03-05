import React from 'react';
import { motion } from 'framer-motion'


function Title() {
    return (
        <>
            <motion.div
                animate={{ scale: [0.96, 1, 0.96] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className='title flex justify-between m-18 w-[80vw] sticky top-0 z-50'>
                <div className="font-[200] z-10 text-left text-[7vmin] text-white">
                    <h1 className='m-[-25px]'>Hello There,</h1>
                    <h1 className='m-[-25px]'>
                        I am<motion.span 
                        initial={{ color: 'white' }}
                        animate={{ color: '#8ec5ff' }}
                        transition={{ duration: 1}}
                        className='font-[700] transition-colors duration-5000'> Suvam Choudhury</motion.span>
                    </h1>
                </div>
                <div className='text-white flex flex-col justify-end'>
                    <ul className='flex gap-4 justify-start opacity-50'>
                        <li><a href="https://www.linkedin.com/in/suvamchoudhury">Linkedin</a></li>
                        <li><a href="https://www.instagram.com/_nyctophile.ig_/">Instagram</a></li>
                        <li><a href='https://github.com/nyctophile07/'>Github</a></li>
                    </ul>
                </div>
            </motion.div>
        </>
    );
}

export default Title;

