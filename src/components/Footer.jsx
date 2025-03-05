import React from 'react'
import img from './assets/send-message-4-256-1.png'
import insta from './assets/instagram-logo-instagram-logo-transparent-instagram-icon-transpa.png'
import linkedin from './assets/linkedin-logo-4871-1.png'
import github from './assets/pngimg-com-github-png23-1.png'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='w-[80vw] m-auto py-15 flex justify-between'>
        <div className="footerdesc">
        <h2 className='text-[6vmin] py-7 font-[400]'>Let's have a conversation...</h2>
        <p >Direct message to me:</p>
        <p className='pt-1'><span className='text-2xl font-bold'>@  </span><a href="mailto:suvamchoudhury18@gmail.com"> suvamchoudhury18@gmail.com</a></p>
        <p className='pt-1'><span className='text-2xl font-bold'>🕿  </span> +91 7064114285</p>
    </div>
    <img src={img} alt='msg-icon' className="footerimg"></img>
        </div>
       <div className='flex gap-5 justify-center pb-10'>
        <a href="https://www.linkedin.com/in/suvamchoudhury"><img className='footicon' src={linkedin} alt="linkedin" /></a>
        <a href="https://www.instagram.com/_nyctophile.ig_/"><img className='footicon' src={insta} alt="insta" /></a>
        <a href="https://github.com/nyctophile07/"><img className='footicon' src={github} alt="github" /></a>
       </div>
    </div>
  )
}

export default Footer