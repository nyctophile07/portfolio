import React, {useState} from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <>
    <motion.div
      animate={{ scale: [1.02, 1, 1.02] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}        
      className='hero-image opacity-50'>
      </motion.div>
  </>)
}

export default Hero