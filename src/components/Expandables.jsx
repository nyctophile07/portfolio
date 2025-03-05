import React from 'react';
import { motion } from 'framer-motion';

function Expandables({ isExpanded, onHover, domain, skills, link, linkText }) {

    return (
        <motion.div
            className={`flex flex-col gap-4 expandable boxshadow ${isExpanded ? 'expanded' : 'compressed'}`}
            onMouseEnter={onHover}
            initial={{ width: '150px',height:'fit-content' }}
            animate={{ width: isExpanded ? '40%' : '28%' }}
            transition={{ duration: 0.3 }}
        >
            <motion.span
                className="title text-wrap"
                animate={{ fontSize: isExpanded ? '1.5rem' : '2.1rem' }}
                transition={{ duration: 0.3 }}
            >
                {domain}
            </motion.span>
            {isExpanded && (
                <ul typeof='circle'>
                     {skills.map((e,index)=>{
                        return(
                            <li className='text-wrap text-[2.5vmin]' key={index}>{e}</li>
                         )
                     })}
                </ul>
            )}
           {isExpanded && (<a className='px-6 py-3 rounded-full bg-black text-white w-min text-sm' href={link}>{linkText}</a>)} 
        </motion.div>
    );
}

export default Expandables;