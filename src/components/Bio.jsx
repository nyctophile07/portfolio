import React from 'react'
import Skills from './Skills'

function Bio() {
    const skills=["I am kind of a nerd myself.","Spend a lot time with Movies, Music, Video games and books also.",
      "Always do love to capture the moments.",
      "Has an particular interest in innovations in technologies.","Still exploring as i believe life is all about continuous learning."]
  return (
    <div className=" bio_container flex flex-col justify-center align-text-bottom gap-10 w-[50%]">
        <div className="bio text-xl"><span className='text-blue-300'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, I'm Suvam Choudhury from Odisha, India.</span> I have a passion for exploring the world and I'm a tech enthusiast who loves innovation. My goal is to simplify life with technology. Capturing moments through photography is one of my hobbies, and I'm also venturing into the realm of graphic design. Moreover, I enjoy creating my own small projects, as you can see below.</div>
        <div>
        <Skills list={skills}/>
        </div>
    </div>
  )
}

export default Bio