import React from 'react';
import { motion } from 'framer-motion';

function Expandables({ isExpanded, onHover, domain, skills }) {
    console.log(isExpanded, onHover, domain, skills)

    return (
        <motion.div
            className={`expandable boxshadow ${isExpanded ? 'expanded' : 'compressed'}`}
            onMouseEnter={onHover}
            initial={{ width: '150px',height:'fit-content' }}
            animate={{ width: isExpanded ? '500px' : '300px' }}
            transition={{ duration: 0.3 }}
        >
            <motion.span
                className="title text-wrap"
                animate={{ fontSize: isExpanded ? '1.5rem' : '2rem' }}
                transition={{ duration: 0.3 }}
            >
                {domain}
            </motion.span>
            {isExpanded && (
                <ul typeof='circle'>
                     {skills.map((e,index)=>{
                        return(
                            <li className='text-wrap' key={index}>{e}</li>
                         )
                     })}
                </ul>
            )}
        </motion.div>
    );
}

export default Expandables;