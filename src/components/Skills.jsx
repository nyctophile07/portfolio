import React from 'react'
import { motion } from "framer-motion";

function Skills(props) {
    return(props.list.map((skill, index) => {
        return (
         <motion.div whileHover={
            { backgroundColor: "#f9f9f9",
            color: "#000",
            scale:1.03
            , transition: { duration: 0.2 }}            
         } key={index} className="text-[2vmin] skill cursor-pointer">{skill}</motion.div>
        )
    })
)}

export default Skills