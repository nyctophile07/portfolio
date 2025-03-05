import React from 'react'
import Skills from './Skills'

function Bio() {
    const skills=["I am kind of a nerd myself.","Spend a lot time with Movies, Music, games and books also.",
      "Always do love to capture the moments.",
      "Has an particular interest in innovations in technologies.","Still exploring as i believe life is all about continuous learning."]
    
    const bio=" I have a deep interest in different forms of storytelling. My curiosity about human potential and technology drives me to explore art, programming, and filmmaking. I enjoy collaborating and learning new things. Let's create something altogether that benefits humanity and society."

  return (
    <div className=" bio_container flex flex-col justify-center align-text-bottom gap-10 w-[50%]">
        <div className="bio text-[2.4vmin]"><span className='text-blue-300'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, I'm Suvam Choudhury from Odisha, India.</span>{bio}</div>
        <div>
        <Skills list={skills}/>
        </div>
    </div>
  )
}

export default Bio